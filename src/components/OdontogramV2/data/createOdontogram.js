import {
    UPPER_RIGHT,
    UPPER_LEFT,
    LOWER_LEFT,
    LOWER_RIGHT
} from "./teeth";

import { createTooth } from "./createTooth";

export function createOdontogram() {

    const odontogram = {};

    const allTeeth = [

        ...UPPER_RIGHT,
        ...UPPER_LEFT,
        ...LOWER_LEFT,
        ...LOWER_RIGHT

    ];

    allTeeth.forEach(number => {

        odontogram[number] = createTooth(number);

    });

    return odontogram;

}