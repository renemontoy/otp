import "./InitialFindings.css";

import {
    useInitialOdontogramContext
} from "../../context/InitialOdontogramContext";


const FACE_LABELS = {

    top: "Superior",

    right: "Derecha",

    bottom: "Inferior",

    left: "Izquierda",

    center: "Central"

};


function InitialFindings() {

    const {

        findings,

        removeInitialFinding,

        deletingFindingId,

        startEditingFinding,

        editingFinding,

        isFinalized,

        isLoading


    } = useInitialOdontogramContext();


    async function handleDelete(
        finding
    ) {

        const faceDescription =
            finding.faceId
                ? `, cara ${
                    FACE_LABELS[
                        finding.faceId
                    ] ||
                    finding.faceId
                }`
                : "";


        const confirmed =
            window.confirm(
                `¿Deseas eliminar "${finding.condition.name}" de la pieza ${finding.toothNumber}${faceDescription}?`
            );


        if (!confirmed) {
            return;
        }


        try {

            await removeInitialFinding(
                finding
            );

        } catch (error) {

            console.error(
                "Error eliminando hallazgo:",
                error
            );

            alert(
                "No fue posible eliminar el hallazgo."
            );

        }

    }


    if (isLoading) {

        return (

            <div className="initialFindings">

                <h3>
                    Hallazgos iniciales
                </h3>

                <p className="initialFindingsMessage">
                    Cargando...
                </p>

            </div>

        );

    }


    return (

        <div className="initialFindings">

            <div className="initialFindingsHeader">

                <h3>
                    Hallazgos iniciales
                </h3>

                <span>
                    {findings.length}
                </span>

            </div>


            {findings.length === 0 ? (

                <div className="initialFindingsEmpty">

                    <strong>
                        Sin hallazgos
                    </strong>

                    <p>
                        Las condiciones registradas
                        aparecerán aquí.
                    </p>

                </div>

            ) : (

                <div className="initialFindingsList">

                    {findings.map(
                        (finding) => (

                            <div
                                key={finding.id}
                                className="initialFindingItem"
                            >

                                <div className="initialFindingTop">

                                    <div>

                                        <strong>

                                            Pieza{" "}
                                            {finding.toothNumber}

                                        </strong>

                                        <span>

                                            {
                                                finding
                                                    .condition
                                                    .name
                                            }

                                        </span>

                                    </div>


                                    {finding.condition.color && (

                                        <span
                                            className="initialFindingColor"
                                            style={{
                                                backgroundColor:
                                                    finding
                                                        .condition
                                                        .color
                                            }}
                                        />

                                    )}

                                </div>


                                {finding.faceId && (

                                    <p>

                                        Cara:{" "}

                                        <strong>

                                            {
                                                FACE_LABELS[
                                                    finding
                                                        .faceId
                                                ] ||
                                                finding.faceId
                                            }

                                        </strong>

                                    </p>

                                )}


                                {finding.observations && (

                                    <p className="initialFindingObservations">

                                        {
                                            finding
                                                .observations
                                        }

                                    </p>

                                )}

                            {!isFinalized && (

                                <div className="initialFindingActions">
                                    <button
                                        type="button"
                                        className="editInitialFindingButton"
                                        disabled={
                                            deletingFindingId === finding.id
                                        }
                                        onClick={() =>
                                            startEditingFinding(
                                                finding
                                            )
                                        }
                                    >

                                        {editingFinding?.id === finding.id
                                            ? "Editando"
                                            : "Editar"}

                                    </button>
                                    <button
                                        type="button"
                                        className="deleteInitialFindingButton"
                                        disabled={
                                            deletingFindingId ===
                                            finding.id
                                        }
                                        onClick={() =>
                                            handleDelete(
                                                finding
                                            )
                                        }
                                    >

                                        {deletingFindingId === finding.id
                                            ? "Eliminando..."
                                            : "Eliminar"}

                                    </button>

                                </div>
                            )}
                            </div>

                        )
                    )}

                </div>

            )}

        </div>

    );

}


export default InitialFindings;