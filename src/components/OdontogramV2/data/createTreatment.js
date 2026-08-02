export function createTreatment({

    recordId = null,

    groupId = null,

    treatmentId,

    treatmentName,

    treatmentColor = null,

    materialId = null,

    materialName = "",

    observations = "",

    status = "pendiente",

    date = null,

    completedAt = null,

    cost = null

}) {

    return {

        recordId,

        groupId,

        id: treatmentId,

        name: treatmentName,

        color: treatmentColor,

        material: {

            id: materialId,

            name: materialName

        },

        observations,

        status,

        date,

        completedAt,

        cost

    };

}