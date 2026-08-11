import AppointmentCard from "./AppointmentCard";


const START_HOUR = 8;
const END_HOUR = 19;


function CalendarGrid({
    appointments,
    dentists
}) {

    const hours = [];

    for (
        let hour = START_HOUR;
        hour <= END_HOUR;
        hour++
    ) {

        hours.push(hour);

    }


    if (dentists.length === 0) {

        return (

            <div className="calendarEmpty">

                No hay odontólogos registrados.

            </div>

        );

    }


    return (

        <div className="calendarWrapper">

            <div
                className="calendarGrid"
                style={{
                    gridTemplateColumns:
                        `80px repeat(${dentists.length}, minmax(220px, 1fr))`
                }}
            >

                <div className="calendarHeaderCell timeHeader">

                    Hora

                </div>


                {dentists.map(
                    (dentist) => (

                        <div
                            key={dentist.id}
                            className="calendarHeaderCell dentistHeader"
                        >

                            <div className="dentistAvatar">

                                {getInitials(
                                    dentist.nombre
                                )}

                            </div>

                            <div className="dentistHeaderInfo">

                                <strong>

                                    {dentist.nombre}

                                </strong>

                                {dentist.especialidad && (

                                    <span>

                                        {dentist.especialidad}

                                    </span>

                                )}

                            </div>

                        </div>

                    )
                )}


                {hours.map(
                    (hour) => (

                        <CalendarRow

                            key={hour}

                            hour={hour}

                            dentists={dentists}

                            appointments={appointments}

                        />

                    )
                )}

            </div>

        </div>

    );

}


function CalendarRow({
    hour,
    dentists,
    appointments
}) {

    return (

        <>

            <div className="calendarTimeCell">

                {String(hour).padStart(
                    2,
                    "0"
                )}:00

            </div>


            {dentists.map(
                (dentist) => {

                    const appointmentsForHour =
                        appointments.filter(
                            (appointment) => {

                                const date =
                                    new Date(
                                        appointment.inicio
                                    );

                                return (
                                    appointment.odontologos?.id === dentist.id &&
                                    date.getHours() === hour
                                );

                            }
                        );


                    return (

                        <div
                            key={`${dentist.id}-${hour}`}
                            className="calendarCell"
                        >

                            {appointmentsForHour.map(
                                (appointment) => (

                                    <AppointmentCard

                                        key={appointment.id}

                                        appointment={appointment}

                                    />

                                )
                            )}

                        </div>

                    );

                }
            )}

        </>

    );

}


function getInitials(name = "") {

    const parts =
        name
            .trim()
            .split(" ")
            .filter(Boolean);

    if (parts.length === 0) {
        return "";
    }

    if (parts.length === 1) {

        return parts[0]
            .substring(0, 2)
            .toUpperCase();

    }

    return (
        parts[0][0] +
        parts[1][0]
    ).toUpperCase();

}


export default CalendarGrid;