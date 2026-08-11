function AgendaHeader() {

    return (

        <div className="agendaHeader">

            <div>

                <h1>

                    Agenda

                </h1>

                <p>

                    Gestiona las citas de la clínica

                </p>

            </div>

            <button
                className="newAppointmentButton"
                type="button"
            >

                + Nueva cita

            </button>

        </div>

    );

}

export default AgendaHeader;