import {
    createTreatment
} from "../data/createTreatment";

export function applyTreatmentToFaces(

    odontogram,

    selectedFaces,

    treatmentData

) {

    const updated =
        structuredClone(odontogram);

    selectedFaces.forEach(({

        toothNumber,

        faceId

    }) => {

        const face =
            updated[toothNumber]
                ?.faces?.[faceId];

        if (!face) {

            return;

        }

        face.treatment = createTreatment({

            treatmentId:
                treatmentData.treatmentId,

            treatmentName:
                treatmentData.treatmentName,

            treatmentColor:
                treatmentData.treatmentColor,

            materialId:
                treatmentData.materialId,

            materialName:
                treatmentData.materialName,

            observations:
                treatmentData.observations,

            status: "pendiente"

        });

        face.status = "pendiente";

        face.notes =
            treatmentData.observations || "";

        face.updatedAt =
            new Date().toISOString();

        face.selected = false;

    });

    return updated;

}