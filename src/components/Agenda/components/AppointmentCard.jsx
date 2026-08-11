function AppointmentCard({
    appointment
}) {

    const start = new Date(
        appointment.inicio
    );

    const end = new Date(
        appointment.fin
    );


    const startTime =
        start.toLocaleTimeString(
            "es-MX",
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        );


    const endTime =
        end.toLocaleTimeString(
            "es-MX",
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        );


    const patientName = appointment.pacientes
        ? `${appointment.pacientes.nombre} ${appointment.pacientes.apellido || ""}`
        : "Paciente";


    return (

        <div
            className={`
                appointmentCard
                appointment-${appointment.estado
                    ?.toLowerCase()
                    .replaceAll(" ", "-")}
            `}
        >

            <span className="appointmentTime">

                {startTime} - {endTime}

            </span>

            <strong>

                {patientName}

            </strong>

            {appointment.motivo && (

                <span className="appointmentReason">

                    {appointment.motivo}

                </span>

            )}

        </div>

    );

}

export default AppointmentCard;