import "./PendingTreatments.css";

import {
    useOdontogramContext
} from "../context/OdontogramContext";

function formatDate(date) {

    if (!date) {

        return "-";

    }

    return new Intl.DateTimeFormat(
        "es-MX",
        {

            dateStyle: "medium",

            timeStyle: "short"

        }
    ).format(new Date(date));

}

function PendingTreatments() {

    const {

        pendingTreatments,

        deletePendingTreatment,

        pendingActionId,

        isLoading,

        loadError

    } = useOdontogramContext();

    function handleDelete(item) {

        const confirmed = window.confirm(

            "¿Deseas eliminar este tratamiento pendiente?"

        );

        if (!confirmed) {

            return;

        }

        deletePendingTreatment(item);

    }

    if (isLoading) {

        return (

            <div className="pendingTreatments">

                <h3>
                    Tratamientos pendientes
                </h3>

                <p className="pendingMessage">

                    Cargando tratamientos...

                </p>

            </div>

        );

    }

    if (loadError) {

        return (

            <div className="pendingTreatments">

                <h3>
                    Tratamientos pendientes
                </h3>

                <p className="pendingError">

                    {loadError}

                </p>

            </div>

        );

    }

    return (

        <div className="pendingTreatments">

            <div className="pendingHeader">

                <h3>
                    Tratamientos pendientes
                </h3>

                <span className="pendingCount">

                    {pendingTreatments.length}

                </span>

            </div>

            {pendingTreatments.length === 0 ? (

                <div className="pendingEmpty">

                    <strong>
                        Sin tratamientos pendientes
                    </strong>

                    <p>

                        Los tratamientos aplicados
                        aparecerán en este panel.

                    </p>

                </div>

            ) : (

                pendingTreatments.map((item) => (

                    <article

                        key={item.id}

                        className="treatmentCard"

                    >

                        <div className="treatmentCardHeader">

                            <div>

                                <span className="treatmentStatus">

                                    {item.status}

                                </span>

                                <h4>

                                    {item.treatmentName}

                                </h4>

                            </div>

                            {item.treatmentColor && (

                                <span

                                    className="treatmentColor"

                                    style={{

                                        backgroundColor:
                                            item.treatmentColor

                                    }}

                                />

                            )}

                        </div>

                        <div className="treatmentDetail">

                            <span>
                                Piezas y caras
                            </span>

                            <strong>

                                {item.teeth.join(", ")}

                            </strong>

                        </div>

                        <div className="treatmentDetail">

                            <span>
                                Material
                            </span>

                            <strong>

                                {item.materialName || "-"}

                            </strong>

                        </div>

                        <div className="treatmentDetail">

                            <span>
                                Observaciones
                            </span>

                            <p>

                                {item.observations || "-"}

                            </p>

                        </div>

                        <div className="treatmentDetail">

                            <span>
                                Fecha
                            </span>

                            <p>

                                {formatDate(item.date)}

                            </p>

                        </div>

                        <div className="treatmentActions">

                            <button

                                type="button"

                                className="deleteButton"

                                disabled={

                                    pendingActionId ===
                                    item.id

                                }

                                onClick={() =>
                                    handleDelete(item)
                                }

                            >

                                {pendingActionId === item.id
                                    ? "Eliminando..."
                                    : "Eliminar"}

                            </button>

                        </div>

                    </article>

                ))

            )}

        </div>

    );

}

export default PendingTreatments;