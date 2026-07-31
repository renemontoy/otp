export function createTreatment({

    treatmentId,

    treatmentName,

    materialId,

    materialName

}){

    return{

        id: treatmentId,

        name: treatmentName,

        material:{

            id: materialId,

            name: materialName

        }

    };

}