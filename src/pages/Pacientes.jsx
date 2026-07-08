import StatsCards from "../components/StatsCards/StatsCards";
import PatientTable from "../components/PatientTable/PatientTable";
import PatientProfile from "../components/PatientProfile/PatientProfile";
import Odontogram from "../components/Odontogram/Odontogram";
import History from "../components/History/History";
import UpcomingAppointments from "../components/UpcomingAppointments/UpcomingAppointments";
import { useState, useEffect} from "react";    
import {getPatients, createPatient} from "../supabase/patients";
import PatientForm from "../components/PatientForm/PatientForm";


function Pacientes() {

    const [patients, setPatients] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [panelMode, setPanelMode] = useState("profile");
    useEffect(() => {

        async function loadPatients() {

            try {

                const data = await getPatients();

                if (!data || data.length === 0) return;

                setPatients(data);
                setSelectedPatient(data[0]);

            } catch (error) {

                console.error(error);

            }

        }

        loadPatients();

    }, []);


    useEffect(() => {
    console.log(panelMode);
}, [panelMode]);
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
    return (
        <div className="dashboard">


            <div className="dashboardGrid">

                <div className="leftColumn">

                <PatientTable
                    patients={patients}
                    onSelectPatient={setSelectedPatient}
                    selectedPatient={selectedPatient}
                    onCreatePatient={() => setPanelMode("create")}
                />
                </div>

                <div className="rightColumn">

                    {panelMode === "profile" ? (

                        <>

                            <PatientProfile patient={selectedPatient} />


                            <History />

                            <UpcomingAppointments />

                        </>

                    ) : (

                        <PatientForm
                            onCancel={() => setPanelMode("profile")}
                            onSave={handleCreatePatient}
                        />

                    )}

                </div>

            </div>

        </div>
    );
}

export default Pacientes;