import "./InitialConditionPanel.css";

import {
    useState
} from "react";

import {
    useInitialOdontogramContext
} from "../../context/InitialOdontogramContext";


function InitialConditionPanel() {

    const {

        evaluation,

        conditions,

        selectedCondition,

        selectionScope,

        conditionData,

        setConditionData,

        selectedFaces,

        selectedTeeth,

        clearSelection,

        saveSelectedCondition,

        getHealthyConflicts,

        getConditionConflicts,

        editingFinding,

        cancelEditingFinding,

        saveEditedFinding,

        isFinalized,

        isFinalizing,

        finalizeEvaluation,

        isLoading,

        isSaving,

        loadError

    } = useInitialOdontogramContext();


    const [
        saveError,
        setSaveError
    ] = useState(null);


    function handleConditionChange(
        event
    ) {

        const conditionId =
            event.target.value;

        setConditionData(
            (previous) => ({

                ...previous,

                conditionId

            })
        );

        setSaveError(null);

    }


    function handleObservationsChange(
        event
    ) {

        setConditionData(
            (previous) => ({

                ...previous,

                observations:
                    event.target.value

            })
        );

    }

    async function handleFinalize() {

        const confirmed =
            window.confirm(
                "¿Deseas finalizar la evaluación inicial?\n\n" +
                "Una vez finalizada quedará en modo solo lectura y ya no podrán agregarse, editarse o eliminarse hallazgos."
            );


        if (!confirmed) {
            return;
        }


        try {

            await finalizeEvaluation();

        } catch (error) {

            console.error(
                "Error finalizando evaluación:",
                error
            );

            alert(
                error.message ||
                "No fue posible finalizar la evaluación."
            );

        }

    }

    async function handleSave() {

        setSaveError(null);


        try {

            /*
                Regla especial:
                SANO
            */
            if (
                selectedCondition?.codigo ===
                "sano"
            ) {

                const conflicts =
                    getHealthyConflicts();


                if (
                    conflicts.length > 0
                ) {

                    const affectedTeeth = [
                        ...new Set(
                            conflicts.map(
                                (finding) =>
                                    finding.toothNumber
                            )
                        )
                    ];


                    const confirmed =
                        window.confirm(

                            `Las piezas ${affectedTeeth.join(", ")} tienen hallazgos registrados.\n\n` +

                            "¿Deseas eliminarlos y marcarlas como sanas?"

                        );


                    if (!confirmed) {
                        return;
                    }


                    await saveSelectedCondition({
                        replaceExisting: true
                    });


                    return;

                }

            }


            /*
                Resto de incompatibilidades
            */
            const conditionConflicts =
                getConditionConflicts();


            if (
                conditionConflicts.confirmation.length >
                0
            ) {

                const conflictsByTooth =
                    new Map();


                conditionConflicts.confirmation.forEach(
                    (finding) => {

                        const tooth =
                            String(
                                finding.toothNumber
                            );


                        if (
                            !conflictsByTooth.has(
                                tooth
                            )
                        ) {

                            conflictsByTooth.set(
                                tooth,
                                new Set()
                            );

                        }


                        conflictsByTooth
                            .get(tooth)
                            .add(
                                finding.condition.name
                            );

                    }
                );


                const conflictDescription =
                    Array.from(
                        conflictsByTooth.entries()
                    )

                        .map(
                            ([
                                tooth,
                                conditionNames
                            ]) => {

                                return (
                                    `Pieza ${tooth}: ` +
                                    Array.from(
                                        conditionNames
                                    ).join(", ")
                                );

                            }
                        )

                        .join("\n");


                const confirmed =
                    window.confirm(

                        `La condición "${selectedCondition.nombre}" es incompatible con los siguientes hallazgos:\n\n` +

                        `${conflictDescription}\n\n` +

                        "¿Deseas reemplazar los hallazgos incompatibles?"

                    );


                if (!confirmed) {
                    return;
                }


                await saveSelectedCondition({
                    replaceConflicts: true
                });


                return;

            }


            await saveSelectedCondition();


        } catch (error) {

            console.error(
                "Error guardando condición inicial:",
                error
            );


            if (
                error.message ===
                "HEALTHY_CONFLICT"
            ) {

                setSaveError(
                    "La pieza tiene hallazgos registrados."
                );

                return;

            }


            if (
                error.message ===
                "CONDITION_CONFLICT"
            ) {

                setSaveError(
                    "La condición seleccionada es incompatible con otro hallazgo."
                );

                return;

            }


            setSaveError(
                error.message ||
                "No fue posible guardar la condición."
            );

        }

    }


    const selectedCount =
        selectionScope === "cara"
            ? selectedFaces.length
            : selectedTeeth.length;


    if (isLoading) {

        return (

            <div className="initialConditionPanel">

                <p className="initialPanelMessage">

                    Cargando estado inicial...

                </p>

            </div>

        );

    }


    if (loadError) {

        return (

            <div className="initialConditionPanel">

                <p className="initialPanelError">

                    {loadError}

                </p>

            </div>

        );

    }

    const availableConditions =
        editingFinding
            ? conditions.filter(
                (condition) =>
                    condition.alcance ===
                    editingFinding.condition.scope
            )
            : conditions;

    return (

        <div className="initialConditionPanel">

            <div className="initialPanelHeader">

                <div>

                    <h3>

                        {editingFinding
                            ? "Editar hallazgo"
                            : "Estado inicial"}

                    </h3>
                    {isFinalized && (

                        <div className="initialFinalizedMessage">

                            <strong>
                                Evaluación finalizada
                            </strong>

                            <p>
                                El odontograma inicial está en
                                modo de solo lectura.
                            </p>

                        </div>

                    )}
                    <p>

                        {editingFinding
                            ? (
                                editingFinding.faceId
                                    ? `Pieza ${editingFinding.toothNumber} · Cara ${editingFinding.faceId}`
                                    : `Pieza ${editingFinding.toothNumber}`
                            )
                            : "Registra las condiciones actuales de la dentadura."}

                    </p>

                </div>

                {evaluation && (

                    <span
                        className={
                            `initialEvaluationStatus ${
                                evaluation.estado ===
                                "Finalizado"
                                    ? "finalized"
                                    : "draft"
                            }`
                        }
                    >

                        {evaluation.estado}

                    </span>

                )}

            </div>


            <div className="initialFormGroup">

                <label htmlFor="initialCondition">

                    Condición

                </label>

                <select
                    id="initialCondition"
                    value={
                        conditionData.conditionId
                    }
                    onChange={
                        handleConditionChange
                    }
                    disabled={
                    isSaving ||
                    isFinalized
                }
                >

                    <option value="">

                        Seleccionar condición

                    </option>

                    {availableConditions.map(
                        (condition) => (

                            <option
                                key={condition.id}
                                value={condition.id}
                            >

                                {condition.nombre}

                            </option>

                        )
                    )}

                </select>

            </div>


            {selectedCondition && (

                <div className="initialConditionInfo">

                    <div className="initialConditionIdentity">

                        {selectedCondition.color && (

                            <span
                                className="initialConditionColor"
                                style={{
                                    backgroundColor:
                                        selectedCondition.color
                                }}
                            />

                        )}

                        <strong>

                            {selectedCondition.nombre}

                        </strong>

                    </div>

                    <span className="initialScopeBadge">

                        {selectionScope === "cara"
                            ? "Por cara"
                            : "Pieza completa"}

                    </span>

                </div>

            )}


            {selectedCondition &&
            !editingFinding &&
            selectedCount === 0 && (

                <div className="initialSelectionHelp">

                    {selectionScope === "cara"
                        ? "Selecciona una o más caras en el odontograma."
                        : "Selecciona una o más piezas dentales."}

                </div>

            )}


            {!editingFinding &&
            selectedCount > 0 && (

                <div className="initialSelectionSummary">

                    <span>

                        {selectionScope === "cara"
                            ? "Caras seleccionadas"
                            : "Piezas seleccionadas"}

                    </span>

                    <strong>

                        {selectedCount}

                    </strong>

                    <button
                        type="button"
                        onClick={clearSelection}
                        disabled={isSaving}
                    >

                        Limpiar

                    </button>

                </div>

            )}


            <div className="initialFormGroup">

                <label htmlFor="initialObservations">

                    Observaciones

                </label>

                <textarea
                    id="initialObservations"
                    rows="4"
                    placeholder="Observaciones clínicas..."
                    value={
                        conditionData.observations
                    }
                    onChange={
                        handleObservationsChange
                    }
                    disabled={
                        isSaving ||
                        isFinalized
                    }
                />

            </div>


            {saveError && (

                <p className="initialPanelError">

                    {saveError}

                </p>

            )}
{!isFinalized && (

    <div className="initialPanelActions">

        {editingFinding ? (

            <>
                <button
                    type="button"
                    className="cancelInitialEditButton"
                    disabled={isSaving}
                    onClick={
                        cancelEditingFinding
                    }
                >
                    Cancelar edición
                </button>

                <button
                    type="button"
                    className="saveInitialConditionButton"
                    disabled={
                        isSaving ||
                        !selectedCondition
                    }
                    onClick={
                        saveEditedFinding
                    }
                >
                    {isSaving
                        ? "Guardando..."
                        : "Guardar cambios"}
                </button>
            </>

        ) : (

            <>
                <button
                    type="button"
                    className="saveInitialConditionButton"
                    disabled={
                        isSaving ||
                        !selectedCondition ||
                        selectedCount === 0
                    }
                    onClick={
                        handleSave
                    }
                >
                    {isSaving
                        ? "Guardando..."
                        : "Guardar condición"}
                </button>

                <button
                    type="button"
                    className="finalizeInitialEvaluationButton"
                    disabled={
                        isSaving ||
                        isFinalizing
                    }
                    onClick={
                        handleFinalize
                    }
                >
                    {isFinalizing
                        ? "Finalizando..."
                        : "Finalizar evaluación inicial"}
                </button>
            </>

        )}

    </div>

)}
        </div>

    );

}


export default InitialConditionPanel;