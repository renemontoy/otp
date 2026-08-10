import "./Pacientes.css";
import StatsCards from "../components/StatsCards/StatsCards";
import PatientTable from "../components/PatientTable/PatientTable";
import PatientProfile from "../components/PatientProfile/PatientProfile";
import History from "../components/History/History";
import UpcomingAppointments from "../components/UpcomingAppointments/UpcomingAppointments";
import { useState, useEffect} from "react";    
import {getPatients, createPatient, updatePatient} from "../supabase/patients";
import PatientForm from "../components/PatientForm/PatientForm";
import ExploracionForm from "../components/Exploracion/Exploracion";
import OdontogramModule from "../components/OdontogramV2/OdontogramModule";
import { getExploracionStatus } from "../supabase/exploraciones";
import { getInitialEvaluationStatus } from "../supabase/initialOdontogram";

function Pacientes() {

    const [patients, setPatients] = useState([]);

    const [selectedPatient, setSelectedPatient] = useState(null);

    const [panelMode, setPanelMode] = useState("profile");

    const [
        exploracionStatus,
        setExploracionStatus
    ] = useState(null);

    const [
        loadingExploracionStatus,
        setLoadingExploracionStatus
    ] = useState(false);

    const [
        odontogramStatus,
        setOdontogramStatus
    ] = useState(null);

    const [
        loadingOdontogramStatus,
        setLoadingOdontogramStatus
    ] = useState(false);

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

    async function loadExploracionStatus(patientId) {

        if (!patientId) {

            setExploracionStatus(null);

            return;
        }

        try {

            setLoadingExploracionStatus(true);

            const data =
                await getExploracionStatus(patientId);

            setExploracionStatus(data);

        } catch (error) {

            console.error(
                "Error obteniendo estado de exploración:",
                error
            );

            setExploracionStatus(null);

        } finally {

            setLoadingExploracionStatus(false);

        }

    }

    async function loadOdontogramStatus(
        patientId
    ) {

        if (!patientId) {

            setOdontogramStatus(null);

            return;
        }

        try {

            setLoadingOdontogramStatus(true);

            const data =
                await getInitialEvaluationStatus(
                    patientId
                );

            setOdontogramStatus(data);

        } catch (error) {

            console.error(
                "Error obteniendo estado del odontograma:",
                error
            );

            setOdontogramStatus(null);

        } finally {

            setLoadingOdontogramStatus(false);

        }

    }

    useEffect(() => {

        if (!selectedPatient?.id) {
            return;
        }

        loadExploracionStatus(
            selectedPatient.id
        );

        loadOdontogramStatus(
            selectedPatient.id
        );

    }, [selectedPatient?.id]);

    useEffect(() => {

        loadExploracionStatus(
            selectedPatient?.id
        );

    }, [selectedPatient?.id]);

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
            onCancel={async () => {

                await loadOdontogramStatus(
                    selectedPatient.id
                );

                setPanelMode("profile");

            }}
        />
    );

}

function handleSelectPatient(patient) {

    setSelectedPatient(patient);

    setPanelMode("profile");

}

    return (
        <div className="patientsPage">

            <header className="patientsPageHeader">
                <div>
                    <h1>Pacientes</h1>

                    <p>
                        Gestiona la información y el historial de tus pacientes.
                    </p>
                </div>
            </header>

            <div className="patientsLayout">

                <main className="patientsMain">
                    <PatientTable
                        patients={patients}
                        onSelectPatient={handleSelectPatient}
                        selectedPatient={selectedPatient}
                        onCreatePatient={() =>
                            setPanelMode("create")
                        }
                    />

                </main>

                <aside className="patientsSidebar">

                    {panelMode === "profile" && (
                        <div className="patientSummaryCard">
                            <PatientProfile
                                patient={selectedPatient}

                                exploracion={exploracionStatus}
                                loadingExploracion={
                                    loadingExploracionStatus
                                }

                                odontogram={odontogramStatus}
                                loadingOdontogram={
                                    loadingOdontogramStatus
                                }

                                onEditPatient={() =>
                                    setPanelMode("edit")
                                }

                                onOpenExploracion={() =>
                                    setPanelMode("exploracion")
                                }

                                onOpenOdontogram={() =>
                                    setPanelMode("odontogram")
                                }
                            />
                            <History
                                patientId={selectedPatient?.id}
                            />

                           {/* <UpcomingAppointments />*/}

                        </div>
                    )}

                    {panelMode === "create" && (
                        <PatientForm
                            mode="create"
                            onCancel={() =>
                                setPanelMode("profile")
                            }
                            onSave={handleCreatePatient}
                        />
                    )}

                    {panelMode === "edit" && (
                        <PatientForm
                            mode="edit"
                            patient={selectedPatient}
                            onCancel={() =>
                                setPanelMode("profile")
                            }
                            onSave={handleUpdatePatient}
                        />
                    )}

                    {panelMode === "exploracion" && (
                        <ExploracionForm
                            patient={selectedPatient}
                            onCancel={() =>
                                setPanelMode("profile")
                            }
                            onSave={async () => {

                                await loadExploracionStatus(
                                    selectedPatient.id
                                );

                                setPanelMode("profile");

                            }}
                        />
                    )}

                </aside>

            </div>

        </div>
    );
}

export default Pacientes;