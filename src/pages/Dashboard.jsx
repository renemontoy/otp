import StatsCards from "../components/StatsCards/StatsCards";
import PatientTable from "../components/PatientTable/PatientTable";
import PatientProfile from "../components/PatientProfile/PatientProfile";
import History from "../components/History/History";
import UpcomingAppointments from "../components/UpcomingAppointments/UpcomingAppointments";
import { useState, useEffect} from "react";    
import {getPatients} from "../supabase/patients";


function Dashboard() {

    const [patients, setPatients] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState(null);
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

    return (
        <div className="dashboard">

            <h2 className="dashboardTitle">Dashboard - Sigo pensando que ira aqui - ve a pacientes</h2>

            <div className="dashboardGrid">

                <div className="leftColumn">

                    <StatsCards />

                </div>



            </div>

        </div>
    );
}

export default Dashboard;