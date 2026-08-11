function AgendaToolbar({
    selectedDate,
    setSelectedDate
}) {

    function previousDay() {

        const date = new Date(
            selectedDate
        );

        date.setDate(
            date.getDate() - 1
        );

        setSelectedDate(date);

    }


    function nextDay() {

        const date = new Date(
            selectedDate
        );

        date.setDate(
            date.getDate() + 1
        );

        setSelectedDate(date);

    }


    function today() {

        setSelectedDate(
            new Date()
        );

    }


    const formattedDate =
        selectedDate.toLocaleDateString(
            "es-MX",
            {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"
            }
        );


    return (

        <div className="agendaToolbar">

            <div className="agendaNavigation">

                <button
                    type="button"
                    onClick={today}
                >

                    Hoy

                </button>

                <button
                    type="button"
                    onClick={previousDay}
                >

                    ‹

                </button>

                <button
                    type="button"
                    onClick={nextDay}
                >

                    ›

                </button>

                <span className="agendaCurrentDate">

                    {formattedDate}

                </span>

            </div>


            <div className="agendaViews">

                <button
                    type="button"
                    className="active"
                >

                    Día

                </button>

                <button
                    type="button"
                    disabled
                >

                    Semana

                </button>

                <button
                    type="button"
                    disabled
                >

                    Mes

                </button>

            </div>

        </div>

    );

}

export default AgendaToolbar;