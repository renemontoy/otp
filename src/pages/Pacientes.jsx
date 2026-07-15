import StatsCards from "../components/StatsCards/StatsCards";
import PatientTable from "../components/PatientTable/PatientTable";
import PatientProfile from "../components/PatientProfile/PatientProfile";
import Odontogram from "../components/Odontogram/Odontogram";
import History from "../components/History/History";
import UpcomingAppointments from "../components/UpcomingAppointments/UpcomingAppointments";
import { useState, useEffect} from "react";    
import {getPatients, createPatient, updatePatient} from "../supabase/patients";
import PatientForm from "../components/PatientForm/PatientForm";
import Odontograma from "../components/Odontogram/Odontogram";


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
                />
                </div>

                <div className="rightColumn">

                    {panelMode === "profile" && (
                        <>
                            <PatientProfile patient={selectedPatient}/>
                            <History/>
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
                        <Odontograma
                        onCancel={() => setPanelMode("profile")}
                        />
                    )}

                </div>

            </div>

        </div>
    );
}

export default Pacientes;