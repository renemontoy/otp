import { createTreatment } from "../data/createTreatment";

export function applyTreatmentToFaces(

    odontogram,

    selectedFaces,

    treatmentData

){

    const updated = structuredClone(odontogram);

    selectedFaces.forEach(({ toothNumber, faceId }) => {

        const face = updated[toothNumber].faces[faceId];

        face.treatment = createTreatment({

            treatmentId: treatmentData.treatmentId,

            treatmentName: treatmentData.treatmentName,

            materialId: treatmentData.materialId,

            materialName: treatmentData.materialName,

            observations: treatmentData.observations

        });

        face.status = "pendiente";

        face.updatedAt = new Date().toISOString();

        face.selected = false;

    });

    return updated;

}