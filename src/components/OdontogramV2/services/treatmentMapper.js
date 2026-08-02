export function mapFacesToDatabase(
    patientId,
    selectedFaces,
    treatmentData
) {

    return selectedFaces.map(({ toothNumber, faceId }) => ({

        paciente_id: patientId,

        tratamiento_id: Number(treatmentData.treatmentId),

        material_id: treatmentData.materialId
            ? Number(treatmentData.materialId)
            : null,

        numero_pieza: String(toothNumber),

        cara: faceId,

        observaciones: treatmentData.observations || "",

        estado: "Pendiente",

        fecha: new Date().toISOString()

    }));

}