const createFaces = () => ({

    top: {
        treatmentId: null,
        status: "healthy",
        selected: false
    },

    left: {
        treatmentId: null,
        status: "healthy",
        selected: false
    },

    center: {
        treatmentId: null,
        status: "healthy",
        selected: false
    },

    right: {
        treatmentId: null,
        status: "healthy",
        selected: false
    },

    bottom: {
        treatmentId: null,
        status: "healthy",
        selected: false
    }

});

import {

    UPPER_RIGHT,

    UPPER_LEFT,

    LOWER_LEFT,

    LOWER_RIGHT

} from "./teeth";

function getToothType(number){

    const lastDigit = number % 10;

    switch(lastDigit){

        case 1:
        case 2:
            return "incisor";

        case 3:
            return "canine";

        case 4:
        case 5:
            return "premolar";

        case 6:
        case 7:
        case 8:
            return "molar";

        default:
            return "unknown";

    }

}

export function createOdontogram(){

    const odontogram = {};

    const allTeeth = [

        ...UPPER_RIGHT,

        ...UPPER_LEFT,

        ...LOWER_LEFT,

        ...LOWER_RIGHT

    ];

    allTeeth.forEach(number => {

        odontogram[number] = {

            number,

            type: getToothType(number),

            faces: createFaces()

        };

    });

    return odontogram;

}