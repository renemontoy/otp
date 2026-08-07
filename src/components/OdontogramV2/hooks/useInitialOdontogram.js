import {
    useCallback,
    useEffect,
    useMemo,
    useState
} from "react";

import {

    getInitialConditions,
    getOrCreateInitialEvaluation,
    getInitialFindings,
    saveInitialFindings,
    deleteInitialFindingsByTeeth,
    deleteInitialConditionByTeeth,
    deleteInitialFinding,
    deleteInitialFindingsByIds,
    updateInitialFinding,
    finalizeInitialEvaluation

} from "../../../supabase/initialOdontogram";

import {

    mapDatabaseToInitialFindings

} from "../services/initialFindingMapper";

import {
    findInitialConditionConflicts
} from "../services/initialConditionRules";

const INITIAL_FORM = {

    conditionId: "",

    observations: ""

};

export function useInitialOdontogram(
    patient
) {

    const [
        evaluation,
        setEvaluation
    ] = useState(null);


    const [
        conditions,
        setConditions
    ] = useState([]);


    const [
        findings,
        setFindings
    ] = useState([]);


    const [
        selectedFaces,
        setSelectedFaces
    ] = useState([]);


    const [
        selectedTeeth,
        setSelectedTeeth
    ] = useState([]);


    const [
        conditionData,
        setConditionData
    ] = useState(
        INITIAL_FORM
    );


    const [
        isLoading,
        setIsLoading
    ] = useState(false);


    const [
        isSaving,
        setIsSaving
    ] = useState(false);


    const [
        loadError,
        setLoadError
    ] = useState(null);

    const [
        deletingFindingId,
        setDeletingFindingId
    ] = useState(null);

    const [
        editingFinding,
        setEditingFinding
    ] = useState(null);

    const isFinalized =
        evaluation?.estado ===
        "Finalizado";  

    const [
        isFinalizing,
        setIsFinalizing
    ] = useState(false);

    const selectedCondition =
        useMemo(() => {

            return conditions.find(
                (condition) =>
                    String(condition.id) ===
                    String(
                        conditionData.conditionId
                    )
            ) || null;

        }, [
            conditions,
            conditionData.conditionId
        ]);


    const selectionScope =
        selectedCondition?.alcance ||
        null;

    const selectedToothNumbers =
        useMemo(() => {

            if (
                selectionScope === "cara"
            ) {

                return [
                    ...new Set(
                        selectedFaces.map(
                            (face) =>
                                String(
                                    face.toothNumber
                                )
                        )
                    )
                ];

            }

            if (
                selectionScope === "pieza"
            ) {

                return selectedTeeth.map(
                    (toothNumber) =>
                        String(
                            toothNumber
                        )
                );

            }

            return [];

        }, [
            selectionScope,
            selectedFaces,
            selectedTeeth
        ]);
    const getHealthyConflicts =
        useCallback(() => {

            if (
                selectedCondition?.codigo !==
                "sano"
            ) {

                return [];

            }

            const selectedSet =
                new Set(
                    selectedToothNumbers
                );

            return findings.filter(
                (finding) => {

                    return (
                        selectedSet.has(
                            String(
                                finding.toothNumber
                            )
                        ) &&
                        finding.condition.code !==
                            "sano"
                    );

                }
            );

        }, [
            findings,
            selectedCondition?.codigo,
            selectedToothNumbers
        ]);
    const clearSelection =
        useCallback(() => {

            setSelectedFaces([]);

            setSelectedTeeth([]);

        }, []);

    const getConditionConflicts =
        useCallback(() => {

            return findInitialConditionConflicts({

                findings,

                selectedCondition,

                toothNumbers:
                    selectedToothNumbers

            });

        }, [

            findings,

            selectedCondition,

            selectedToothNumbers

        ]);

    const reloadInitialOdontogram =
        useCallback(async () => {

            if (!patient?.id) {

                setEvaluation(null);

                setFindings([]);

                return;

            }

            try {

                const currentEvaluation =
                    await getOrCreateInitialEvaluation(
                        patient.id
                    );

                const rows =
                    await getInitialFindings(
                        currentEvaluation.id
                    );

                setEvaluation(
                    currentEvaluation
                );

                setFindings(
                    mapDatabaseToInitialFindings(
                        rows
                    )
                );

            } catch (error) {

                console.error(
                    "Error cargando odontograma inicial:",
                    error
                );

                throw error;

            }

        }, [
            patient?.id
        ]);

        async function removeInitialFinding(
            finding
        ) {
            if (isFinalized) {

                throw new Error(
                    "No se pueden eliminar hallazgos de una evaluación finalizada."
                );

            }
            if (!finding?.id) {
                return;
            }

            setDeletingFindingId(
                finding.id
            );

            try {

                await deleteInitialFinding(
                    finding.id
                );

                await reloadInitialOdontogram();

            } catch (error) {

                console.error(
                    "Error eliminando hallazgo:",
                    error
                );

                throw error;

            } finally {

                setDeletingFindingId(null);

            }

        }

    async function finalizeEvaluation() {

        if (!evaluation?.id) {

            throw new Error(
                "No existe una evaluación inicial."
            );

        }


        if (isFinalized) {

            return;

        }


        setIsFinalizing(true);


        try {

            await finalizeInitialEvaluation(
                evaluation.id
            );


            await reloadInitialOdontogram();


            setEditingFinding(null);

            setConditionData(
                INITIAL_FORM
            );

            clearSelection();


        } catch (error) {

            console.error(
                "Error finalizando evaluación:",
                error
            );

            throw error;


        } finally {

            setIsFinalizing(false);

        }

    }
    function startEditingFinding(
        finding
    ) {

        if (isFinalized) {
            return;
        }

        if (!finding) {
            return;
        }

        clearSelection();

        setEditingFinding(
            finding
        );

        setConditionData({

            conditionId:
                String(
                    finding.condition.id
                ),

            observations:
                finding.observations || ""

        });

    }

    function cancelEditingFinding() {

        setEditingFinding(null);

        setConditionData(
            INITIAL_FORM
        );

        clearSelection();

    }

    async function saveEditedFinding() {

        if (isFinalized) {

            throw new Error(
                "No se puede modificar una evaluación finalizada."
            );

        }

        if (!editingFinding?.id) {

            throw new Error(
                "No existe un hallazgo en edición."
            );

        }

        if (!selectedCondition) {

            throw new Error(
                "Selecciona una condición."
            );

        }

        /*
            No permitimos cambiar de una condición
            por cara a una condición por pieza,
            ni viceversa.
        */
        if (
            selectedCondition.alcance !==
            editingFinding.condition.scope
        ) {

            throw new Error(
                "La nueva condición debe corresponder al mismo tipo de selección."
            );

        }

        setIsSaving(true);

        try {

            await updateInitialFinding(
                editingFinding.id,
                {
                    conditionId:
                        selectedCondition.id,

                    observations:
                        conditionData.observations
                }
            );

            await reloadInitialOdontogram();

            setEditingFinding(null);

            setConditionData(
                INITIAL_FORM
            );

            clearSelection();

        } finally {

            setIsSaving(false);

        }

    }

    useEffect(() => {

        let active = true;


        async function load() {

            if (!patient?.id) {

                setEvaluation(null);

                setConditions([]);

                setFindings([]);

                return;

            }


            setIsLoading(true);

            setLoadError(null);

            clearSelection();

            setConditionData(
                INITIAL_FORM
            );


            try {

                const [

                    loadedConditions,

                    currentEvaluation

                ] = await Promise.all([

                    getInitialConditions(),

                    getOrCreateInitialEvaluation(
                        patient.id
                    )

                ]);


                const rows =
                    await getInitialFindings(
                        currentEvaluation.id
                    );


                if (!active) {
                    return;
                }


                setConditions(
                    loadedConditions
                );


                setEvaluation(
                    currentEvaluation
                );


                setFindings(
                    mapDatabaseToInitialFindings(
                        rows
                    )
                );


            } catch (error) {

                console.error(
                    "Error cargando estado inicial:",
                    error
                );


                if (active) {

                    setLoadError(
                        "No fue posible cargar el odontograma inicial."
                    );

                }


            } finally {

                if (active) {

                    setIsLoading(false);

                }

            }

        }


        void load();


        return () => {

            active = false;

        };


    }, [
        patient?.id,
        clearSelection
    ]);


    useEffect(() => {

        /*
            Cuando cambia la condición,
            eliminamos cualquier selección
            anterior.

            Así evitamos por ejemplo:

            Caries → caras seleccionadas

            cambiar a:

            Ausente → guardar accidentalmente
            las selecciones anteriores.
        */

        clearSelection();

    }, [
        conditionData.conditionId,
        clearSelection
    ]);


    function toggleFaceSelection(
        toothNumber,
        faceId
    ) {

        if (isFinalized) {
            return;
        }

        if (
            selectionScope !== "cara"
        ) {

            return;

        }


        const key =
            `${toothNumber}:${faceId}`;


        setSelectedFaces(
            (previous) => {

                const exists =
                    previous.some(
                        (item) =>
                            item.key === key
                    );


                if (exists) {

                    return previous.filter(
                        (item) =>
                            item.key !== key
                    );

                }


                return [

                    ...previous,

                    {
                        key,

                        toothNumber:
                            String(
                                toothNumber
                            ),

                        faceId

                    }

                ];

            }
        );

    }


    function toggleToothSelection(
        toothNumber
    ) {

        if (isFinalized) {
            return;
        }

        if (
            selectionScope !== "pieza"
        ) {

            return;

        }


        const value =
            String(
                toothNumber
            );


        setSelectedTeeth(
            (previous) => {

                if (
                    previous.includes(
                        value
                    )
                ) {

                    return previous.filter(
                        (item) =>
                            item !== value
                    );

                }


                return [
                    ...previous,
                    value
                ];

            }
        );

    }


async function saveSelectedCondition({
    replaceExisting = false,
    replaceConflicts = false
} = {}) {

    if (isFinalized) {

        throw new Error(
            "La evaluación inicial ya fue finalizada."
        );

    }

    if (!evaluation?.id) {
        //...
    }

    /*
        1. VALIDACIONES
    */

    if (!evaluation?.id) {

        throw new Error(
            "No existe una evaluación inicial."
        );

    }


    if (!selectedCondition) {

        throw new Error(
            "Selecciona una condición."
        );

    }


    if (
        selectionScope === "cara" &&
        selectedFaces.length === 0
    ) {

        throw new Error(
            "Selecciona al menos una cara."
        );

    }


    if (
        selectionScope === "pieza" &&
        selectedTeeth.length === 0
    ) {

        throw new Error(
            "Selecciona al menos una pieza."
        );

    }


    const conditionCode =
        selectedCondition.codigo;


    /*
        2. REGLA ESPECIAL DE SANO

        Esto se revisa antes de activar
        isSaving porque todavía no hemos
        modificado nada.
    */

    if (
        conditionCode === "sano"
    ) {

        const healthyConflicts =
            getHealthyConflicts();


        if (
            healthyConflicts.length > 0 &&
            !replaceExisting
        ) {

            throw new Error(
                "HEALTHY_CONFLICT"
            );

        }

    }


    /*
        3. REVISAR INCOMPATIBILIDADES

        Ejemplo:

        Ausente + Endodoncia
        Ausente + Movilidad
        etc.

        Los cambios de movilidad:
        M1 → M2
        M2 → M3

        aparecerán en conflicts.automatic.
    */

    const conflicts =
        getConditionConflicts();


    if (
        conflicts.confirmation.length > 0 &&
        !replaceConflicts
    ) {

        throw new Error(
            "CONDITION_CONFLICT"
        );

    }


    /*
        A partir de aquí sí comenzaremos
        a modificar datos.
    */

    setIsSaving(true);


    try {

        /*
            4. REEMPLAZOS AUTOMÁTICOS

            Ejemplo:

            Movilidad 1
                ↓
            Movilidad 2

            Eliminamos M1 automáticamente.
        */

        if (
            conflicts.automatic.length > 0
        ) {

            await deleteInitialFindingsByIds(

                conflicts.automatic.map(
                    (finding) =>
                        finding.id
                )

            );

        }


        /*
            5. ELIMINAR CONFLICTOS CONFIRMADOS

            Ejemplo:

            Endodoncia
                ↓
            usuario registra Ausente
                ↓
            confirma reemplazo
                ↓
            eliminamos Endodoncia
        */

        if (
            replaceConflicts &&
            conflicts.confirmation.length > 0
        ) {

            await deleteInitialFindingsByIds(

                conflicts.confirmation.map(
                    (finding) =>
                        finding.id
                )

            );

        }


        /*
            6. SI REGISTRAMOS ALGO DIFERENTE
            DE SANO, ELIMINAMOS SANO.

            Ejemplo:

            Sano
                ↓
            Caries
                ↓
            Sano desaparece.
        */

        if (
            conditionCode !== "sano"
        ) {

            const healthyCondition =
                conditions.find(
                    (condition) =>
                        condition.codigo ===
                        "sano"
                );


            if (healthyCondition) {

                await deleteInitialConditionByTeeth(

                    evaluation.id,

                    healthyCondition.id,

                    selectedToothNumbers

                );

            }

        }


        /*
            7. SI EL USUARIO CONFIRMÓ
            MARCAR COMO SANO:

            eliminamos todos los hallazgos
            existentes de las piezas.
        */

        if (
            conditionCode === "sano" &&
            replaceExisting
        ) {

            await deleteInitialFindingsByTeeth(

                evaluation.id,

                selectedToothNumbers

            );

        }


        /*
            8. SI LA PIEZA YA ESTABA SANA
            Y VOLVEMOS A GUARDAR SANO,

            eliminamos el registro anterior
            para no duplicarlo.
        */

        if (
            conditionCode === "sano" &&
            !replaceExisting
        ) {

            const healthyCondition =
                conditions.find(
                    (condition) =>
                        condition.codigo ===
                        "sano"
                );


            if (healthyCondition) {

                await deleteInitialConditionByTeeth(

                    evaluation.id,

                    healthyCondition.id,

                    selectedToothNumbers

                );

            }

        }


        /*
            9. CREAR LOS NUEVOS REGISTROS
        */

        const groupId =
            crypto.randomUUID();


        let rows = [];


        /*
            CONDICIONES POR CARA

            Actualmente principalmente:
            Caries
        */

        if (
            selectionScope === "cara"
        ) {

            rows =
                selectedFaces.map(
                    (face) => ({

                        evaluacion_id:
                            evaluation.id,

                        condicion_id:
                            selectedCondition.id,

                        numero_pieza:
                            face.toothNumber,

                        cara:
                            face.faceId,

                        observaciones:
                            conditionData.observations ||
                            null,

                        grupo_id:
                            groupId

                    })
                );

        }


        /*
            CONDICIONES POR PIEZA

            Sano
            Ausente
            Movilidad
            Endodoncia
            Prótesis
            etc.
        */

        if (
            selectionScope === "pieza"
        ) {

            rows =
                selectedTeeth.map(
                    (toothNumber) => ({

                        evaluacion_id:
                            evaluation.id,

                        condicion_id:
                            selectedCondition.id,

                        numero_pieza:
                            toothNumber,

                        cara: null,

                        observaciones:
                            conditionData.observations ||
                            null,

                        grupo_id:
                            groupId

                    })
                );

        }


        /*
            10. GUARDAR
        */

        await saveInitialFindings(
            rows
        );


        /*
            11. RECARGAR DESDE SUPABASE
        */

        await reloadInitialOdontogram();


        /*
            12. LIMPIAR FORMULARIO
        */

        clearSelection();


        setConditionData(
            INITIAL_FORM
        );


    } finally {

        /*
            Pase lo que pase:
            éxito o error,
            reactivamos el formulario.
        */

        setIsSaving(false);

    }

}


    return {

        evaluation,

        conditions,

        findings,

        selectedCondition,

        selectionScope,

        conditionData,

        setConditionData,

        selectedFaces,

        selectedTeeth,

        toggleFaceSelection,

        toggleToothSelection,

        clearSelection,

        saveSelectedCondition,

        getHealthyConflicts,

        getConditionConflicts,

        removeInitialFinding,

        deletingFindingId,

        editingFinding,

        startEditingFinding,

        cancelEditingFinding,

        saveEditedFinding,

        finalizeEvaluation,

        isFinalized,

        isFinalizing,

        reloadInitialOdontogram,

        isLoading,

        isSaving,

        loadError

    };
}