import { createFaces } from "./createFace";

function getToothType(number) {

    const lastDigit = number % 10;

    switch (lastDigit) {

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

export function createTooth(number) {

    return {

        number,

        type: getToothType(number),

        faces: createFaces()

    };

}