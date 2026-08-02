import {

    useCallback,

    useEffect,

    useMemo,

    useState

} from "react";

import {
    createOdontogram
} from "../data/createOdontogram";

import {
    applyTreatmentToFaces
} from "../services/treatmentEngine";

import {

    mapDatabaseToOdontogram,

    mapDatabaseToPendingTreatments,

    mapFacesToDatabase

} from "../services/treatmentMapper";

import {

    deleteTreatmentGroup,

    deleteTreatmentsByIds,

    loadOdontogram,

    saveTreatment

} from "../../../supabase/odontogram";

const EMPTY_TREATMENT_DATA = {

    treatmentId: "",

    treatmentName: "",

    treatmentColor: "",

    materialId: "",

    materialName: "",

    observations: ""

};

export function useOdontogram(patient) {

    const [odontogram, setOdontogram] =
        useState(() => createOdontogram());

    const [

        treatmentData,

        setTreatmentData

    ] = useState({

        ...EMPTY_TREATMENT_DATA

    });

    const [

        pendingTreatments,

        setPendingTreatments

    ] = useState([]);

    const [isLoading, setIsLoading] =
        useState(false);

    const [isSaving, setIsSaving] =
        useState(false);

    const [

        pendingActionId,

        setPendingActionId

    ] = useState(null);

    const [loadError, setLoadError] =
        useState(null);

    function toggleFaceSelection(
        toothNumber,
        faceId
    ) {

        setOdontogram((previous) => {

            const updated =
                structuredClone(previous);

            const tooth =
                updated[toothNumber];

            if (!tooth?.faces?.[faceId]) {

                return previous;

            }

            tooth.faces[faceId].selected =
                !tooth.faces[faceId].selected;

            return updated;

        });

    }

    const selectedFaces = useMemo(() => {

        const faces = [];

        Object.values(odontogram)
            .forEach((tooth) => {

                Object.entries(tooth.faces)
                    .forEach(([
                        faceId,
                        face
                    ]) => {

                        if (face.selected) {

                            faces.push({

                                toothNumber:
                                    tooth.number,

                                faceId

                            });

                        }

                    });

            });

        return faces;

    }, [odontogram]);

    const reloadOdontogram =
        useCallback(async () => {

            if (!patient?.id) {

                setOdontogram(
                    createOdontogram()
                );

                setPendingTreatments([]);

                return [];

            }

            setIsLoading(true);

            setLoadError(null);

            try {

                const rows =
                    await loadOdontogram(
                        patient.id
                    );

                setOdontogram(
                    mapDatabaseToOdontogram(
                        rows
                    )
                );

                setPendingTreatments(
                    mapDatabaseToPendingTreatments(
                        rows
                    )
                );

                return rows;

            } catch (error) {

                console.error(
                    "Error al cargar el odontograma:",
                    error
                );

                setLoadError(
                    "No fue posible cargar el odontograma."
                );

                throw error;

            } finally {

                setIsLoading(false);

            }

        }, [patient?.id]);

    useEffect(() => {

        void reloadOdontogram();

    }, [reloadOdontogram]);

    function applyTreatment(

        faces = selectedFaces,

        data = treatmentData

    ) {

        if (faces.length === 0) {

            return;

        }

        if (!data.treatmentId) {

            return;

        }

        setOdontogram((previous) =>

            applyTreatmentToFaces(

                previous,

                faces,

                data

            )

        );

    }

    async function saveSelectedTreatment() {

        if (!patient?.id) {

            return;

        }

        if (selectedFaces.length === 0) {

            return;

        }

        if (!treatmentData.treatmentId) {

            return;

        }

        const facesToSave =
            selectedFaces.map((face) => ({

                ...face

            }));

        const treatmentToSave = {

            ...treatmentData

        };

        setIsSaving(true);

        try {

            const rows =
                mapFacesToDatabase(

                    patient.id,

                    facesToSave,

                    treatmentToSave

                );

            await saveTreatment(rows);

            /*
                En lugar de pintar manualmente,
                volvemos a leer Supabase para
                obtener IDs, colores y estado real.
            */
            await reloadOdontogram();

            setTreatmentData({

                ...EMPTY_TREATMENT_DATA

            });

        } catch (error) {

            console.error(
                "Error al guardar tratamiento:",
                error
            );

            alert(
                "No fue posible guardar el tratamiento."
            );

        } finally {

            setIsSaving(false);

        }

    }

    async function deletePendingTreatment(
        item
    ) {

        if (!item) {

            return;

        }

        setPendingActionId(item.id);

        try {

            if (item.groupId) {

                await deleteTreatmentGroup(
                    item.groupId
                );

            } else {

                await deleteTreatmentsByIds(
                    item.recordIds
                );

            }

            /*
                Si existía un tratamiento anterior
                en esa cara, reaparecerá al recargar.
            */
            await reloadOdontogram();

        } catch (error) {

            console.error(
                "Error al eliminar tratamiento:",
                error
            );

            alert(
                "No fue posible eliminar el tratamiento."
            );

        } finally {

            setPendingActionId(null);

        }

    }

    return {

        patient,

        odontogram,

        toggleFaceSelection,

        selectedFaces,

        applyTreatment,

        treatmentData,

        setTreatmentData,

        saveSelectedTreatment,

        pendingTreatments,

        deletePendingTreatment,

        reloadOdontogram,

        isLoading,

        isSaving,

        pendingActionId,

        loadError

    };

}