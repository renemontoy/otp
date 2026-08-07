import StatsCards from "../components/StatsCards/StatsCards";
import PatientTable from "../components/PatientTable/PatientTable";
import PatientProfile from "../components/PatientProfile/PatientProfile";
import History from "../components/History/History";
import UpcomingAppointments from "../components/UpcomingAppointments/UpcomingAppointments";
import { useState, useEffect} from "react";    
import {getPatients, createPatient, updatePatient, deactivatePatient, updatePatientStatus} from "../supabase/patients";
import PatientForm from "../components/PatientForm/PatientForm";
import ExploracionForm from "../components/Exploracion/Exploracion";
import OdontogramModule from "../components/OdontogramV2/OdontogramModule";

function Pacientes() {

    const [patients, setPatients] = useState([]);

    const [selectedPatient, setSelectedPatient] = useState(null);

    const [panelMode, setPanelMode] = useState("profile");

    async function loadPatients() {

        try {

            const data = await getPatients();

            setPatients(data);

            return data;

        } catch (error) {

            console.error(error);

            return [];

        }

    }

    useEffect(() => {
        loadPatients();
    }, []);

    useEffect(() => {

        if (!selectedPatient && patients.length > 0) {

            setSelectedPatient(patients[0]);

        }

    }, [patients]);

    async function handleCreatePatient(formData) {

        try {

            const newPatient = await createPatient(formData);

            setPatients((prev) => [...prev, newPatient]);

            setSelectedPatient(newPatient);

            setPanelMode("profile");

        } catch (error) {

            console.error(error);

            alert("Ocurrió un error al guardar el paciente.");

        }

    }

    async function handleUpdatePatient(formData) {

        try {

            const updatedPatient = await updatePatient(
                selectedPatient.id,
                formData
            );

            await loadPatients();

            setSelectedPatient(updatedPatient);

            setPanelMode("profile");

        } catch (error) {

            console.error(error);

        }

    }

    if (panelMode === "odontogram") {

    return (

        <OdontogramModule
            patient={selectedPatient}
            onCancel={() => setPanelMode("profile")}
        />

    );

}

async function handleTogglePatientStatus(patient) {

    if (!patient?.id) {
        return;
    }

    const newStatus = !patient.status;

    const patientName = [
        patient.nombre,
        patient.apellido
    ]
        .filter(Boolean)
        .join(" ");

    const action =
        newStatus
            ? "activar"
            : "desactivar";

    const confirmed = window.confirm(
        `¿Deseas ${action} al paciente ${patientName}?`
    );

    if (!confirmed) {
        return;
    }

    try {

        const updatedPatient =
            await updatePatientStatus(
                patient.id,
                newStatus
            );

        setPatients((previousPatients) =>

            previousPatients.map((item) =>

                item.id === updatedPatient.id
                    ? {
                        ...item,
                        status: updatedPatient.status
                    }
                    : item

            )

        );

        if (
            selectedPatient?.id ===
            updatedPatient.id
        ) {

            setSelectedPatient((previous) => ({
                ...previous,
                status: updatedPatient.status
            }));

        }

    } catch (error) {

        console.error(
            "Error al cambiar estado del paciente:",
            error
        );

        alert(
            "No fue posible cambiar el estado del paciente."
        );

    }
}
    return (
        <div className="dashboard">


            <div className="dashboardGrid">

                <div className="leftColumn">

                <PatientTable
                    patients={patients}
                    onSelectPatient={setSelectedPatient}
                    selectedPatient={selectedPatient}
                    onCreatePatient={() => setPanelMode("create")}
                    onEditPatient={() => setPanelMode("edit")}
                    onOdontogramPatient={() => setPanelMode("odontogram")}
                    onExploracionPatient={() => setPanelMode("exploracion")}
                    onTogglePatientStatus={handleTogglePatientStatus}
                                    />
                </div>

                <div className="rightColumn">

                    {panelMode === "profile" && (
                        <>
                            <PatientProfile patient={selectedPatient}/>
                            <History
                            patientId={selectedPatient?.id}
                            />
                            <UpcomingAppointments/>
                        </>
                    )}

                    {panelMode === "create" && (
                        <PatientForm
                            mode="create"
                            onCancel={() => setPanelMode("profile")}
                            onSave={handleCreatePatient}
                        />
                    )}

                    {panelMode === "edit" && (
                        <PatientForm
                            mode="edit"
                            patient={selectedPatient}
                            onCancel={() => setPanelMode("profile")}
                            onSave={handleUpdatePatient}
                        />
                    )}

                    {panelMode === "odontogram" && (
                        <OdontogramModule
                            patient={selectedPatient}
                            onCancel={() => setPanelMode("profile")}
                        />
                    )}

                    {panelMode === "exploracion" && (
                        <ExploracionForm
                            mode="edit"
                            patient={selectedPatient}
                            onCancel={() => setPanelMode("profile")}
                            onSave={handleUpdatePatient}
                        />
                    )}

                </div>

            </div>

        </div>
    );
}

export default Pacientes;