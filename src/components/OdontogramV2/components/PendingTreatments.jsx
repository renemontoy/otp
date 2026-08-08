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

        completePendingTreatment,

        cancelPendingTreatment,

        pendingAction,

        isLoading,

        loadError

    } = useOdontogramContext();

function handleComplete(item) {

    const confirmed = window.confirm(
        `¿Confirmas que el tratamiento "${item.treatmentName}" ya fue realizado?`
    );

    if (!confirmed) {
        return;
    }

    completePendingTreatment(item);

}

function handleCancel(item) {

    const confirmed = window.confirm(
        `¿Deseas cancelar el tratamiento "${item.treatmentName}"? El registro permanecerá en el historial.`
    );

    if (!confirmed) {
        return;
    }

    cancelPendingTreatment(item);

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
                    className="pendingTreatmentCard"
                >

                    <div className="pendingTreatmentHeader">

                        <div className="pendingTreatmentTitle">

                            <div className="pendingTreatmentTitleRow">

                                <h4>
                                    {item.treatmentName}
                                </h4>

                                <span className="pendingTreatmentStatus">

                                    {item.status}

                                </span>

                            </div>

                        </div>


                        {item.treatmentColor && (

                            <span
                                className="pendingTreatmentColor"
                                style={{
                                    backgroundColor:
                                        item.treatmentColor
                                }}
                            />

                        )}

                    </div>


                    <div className="pendingTreatmentDetails">

                        <div className="pendingTreatmentDetail pendingTreatmentDetailWide">

                            <span>
                                Piezas y caras
                            </span>

                            <strong>
                                {item.teeth.join(", ")}
                            </strong>

                        </div>


                        <div className="pendingTreatmentDetail">

                            <span>
                                Material
                            </span>

                            <strong>
                                {item.materialName || "—"}
                            </strong>

                        </div>


                        <div className="pendingTreatmentDetail pendingTreatmentDetailWide">

                            <span>
                                Observaciones
                            </span>

                            <p>
                                {item.observations || "—"}
                            </p>

                        </div>


                        <div className="pendingTreatmentDetail">

                            <span>
                                Fecha
                            </span>

                            <p>
                                {formatDate(item.date)}
                            </p>

                        </div>

                    </div>


                    <div className="pendingTreatmentActions">

                        <button
                            type="button"
                            className="completeButton"
                            disabled={Boolean(pendingAction)}
                            onClick={() =>
                                handleComplete(item)
                            }
                        >

                            {pendingAction?.id === item.id &&
                            pendingAction?.type === "complete"
                                ? "Completando..."
                                : "Completar"}

                        </button>


                        <button
                            type="button"
                            className="cancelTreatmentButton"
                            disabled={Boolean(pendingAction)}
                            onClick={() =>
                                handleCancel(item)
                            }
                        >

                            {pendingAction?.id === item.id &&
                            pendingAction?.type === "cancel"
                                ? "Cancelando..."
                                : "Cancelar"}

                        </button>

                    </div>

                </article>

            ))

            )}

        </div>

    );

}

export default PendingTreatments;