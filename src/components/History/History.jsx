import "./History.css";

import {
    useEffect,
    useState
} from "react";

import {
    getPatientTreatmentHistory
} from "../../supabase/history";

import {
    mapDatabaseToHistory
} from "../../services/historyMapper";

function formatDate(date) {

    if (!date) {

        return "Sin fecha";

    }

    return new Intl.DateTimeFormat(
        "es-MX",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    ).format(new Date(date));

}

function History({
    patientId,
}) {

    const [history, setHistory] =
        useState([]);

    const [isLoading, setIsLoading] =
        useState(false);

    const [error, setError] =
        useState(null);

    useEffect(() => {

        let isActive = true;

        async function loadHistory() {

            if (!patientId) {

                setHistory([]);

                return;

            }

            setIsLoading(true);

            setError(null);

            try {

                const rows =
                    await getPatientTreatmentHistory(
                        patientId
                    );

                const mappedHistory =
                    mapDatabaseToHistory(rows);

                if (isActive) {

                    setHistory(mappedHistory);

                }

            } catch (loadError) {

                console.error(
                    "Error al cargar el historial:",
                    loadError
                );

                if (isActive) {

                    setError(
                        "No fue posible cargar el historial."
                    );

                }

            } finally {

                if (isActive) {

                    setIsLoading(false);

                }

            }

        }

        void loadHistory();

        return () => {

            isActive = false;

        };

    }, [patientId]);

    return (

        <section className="historyCard">

            <div className="historyHeader">

                <div>

                    <h3>
                        Cronología reciente
                    </h3>

                </div>


                {!isLoading && (

                    <span className="historyCount">

                        {history.length}

                    </span>

                )}

            </div>


            {isLoading && (

                <p className="historyMessage">

                    Cargando historial...

                </p>

            )}


            {!isLoading && error && (

                <p className="historyError">

                    {error}

                </p>

            )}


            {!isLoading &&
            !error &&
            history.length === 0 && (

                <div className="historyEmpty">

                    <strong>
                        Sin historial clínico
                    </strong>

                    <p>

                        Los tratamientos registrados
                        aparecerán aquí.

                    </p>

                </div>

            )}


            {!isLoading &&
            !error &&
            history.length > 0 && (

                <div className="historyList">

                    {history.map((item) => (

                        <article
                            key={item.id}
                            className="historyItem"
                        >

                            <div className="historyDate">

                                {formatDate(item.date)}

                            </div>


                            <div className="historyTimelineMarker">

                                <span
                                    className="historyTimelineDot"
                                    style={{
                                        backgroundColor:
                                            item.treatmentColor ||
                                            "#3b82f6"
                                    }}
                                />

                            </div>


                            <div className="historyContent">

                                <div className="historyItemHeader">

                                    <strong>

                                        {item.treatmentName}

                                    </strong>


                                    <span
                                        className={
                                            `historyStatus historyStatus--${item.status.toLowerCase()}`
                                        }
                                    >

                                        {item.status}

                                    </span>

                                </div>


                                <p className="historyTeeth">

                                    Pieza(s):{" "}

                                    {item.teeth.join(", ")}

                                </p>


                                {item.materialName && (

                                    <p>

                                        Material:{" "}

                                        {item.materialName}

                                    </p>

                                )}


                                {item.observations && (

                                    <p className="historyObservations">

                                        {item.observations}

                                    </p>

                                )}

                            </div>

                        </article>

                    ))}

                </div>

            )}

        </section>

    );

}

export default History;