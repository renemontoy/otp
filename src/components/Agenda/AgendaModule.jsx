import "./AgendaModule.css";

import {
    useState
} from "react";

import AgendaHeader from "./components/AgendaHeader";
import AgendaToolbar from "./components/AgendaToolbar";
import CalendarGrid from "./components/CalendarGrid";

import {
    useAppointments
} from "./hooks/useAppointments";

import {
    useDentists
} from "./hooks/useDentists";


function AgendaModule() {

    const [selectedDate, setSelectedDate] = useState(
        new Date()
    );


    const {
        appointments,
        loading,
        error
    } = useAppointments(selectedDate);


    const {
        dentists,
        loadingDentists,
        dentistsError
    } = useDentists();


    const isLoading =
        loading || loadingDentists;

    const hasError =
        error || dentistsError;


    return (

        <div className="agendaModule">

            <AgendaHeader />

            <AgendaToolbar

                selectedDate={selectedDate}

                setSelectedDate={setSelectedDate}

            />


            <div className="agendaContent">

                {isLoading ? (

                    <div className="agendaMessage">

                        Cargando agenda...

                    </div>

                ) : hasError ? (

                    <div className="agendaMessage error">

                        No fue posible cargar la agenda.

                    </div>

                ) : (

                    <CalendarGrid

                        appointments={appointments}

                        dentists={dentists}

                    />

                )}

            </div>

        </div>

    );

}

export default AgendaModule;