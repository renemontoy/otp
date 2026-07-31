import {

    TOOTH_SIZE,

    TOOTH_GAP,

    MIDLINE_GAP,

    ARCH_SPACING,

    START_X,

    START_Y,

    ARCH_CURVE

} from "../config/layout";

const UPPER_RIGHT = [18,17,16,15,14,13,12,11];

const UPPER_LEFT = [21,22,23,24,25,26,27,28];

const LOWER_RIGHT = [48,47,46,45,44,43,42,41];

const LOWER_LEFT = [31,32,33,34,35,36,37,38];

export function getToothPosition(number){

    let row = 0;

    let index = 0;

    let side = "right";

    if(UPPER_RIGHT.includes(number)){

        row = 0;

        side = "right";

        index = UPPER_RIGHT.indexOf(number);

    }

    else if(UPPER_LEFT.includes(number)){

        row = 0;

        side = "left";

        index = UPPER_LEFT.indexOf(number);

    }

    else if(LOWER_RIGHT.includes(number)){

        row = 1;

        side = "right";

        index = LOWER_RIGHT.indexOf(number);

    }

    else{

        row = 1;

        side = "left";

        index = LOWER_LEFT.indexOf(number);

    }

    const x = side === "right"

        ? START_X + index * (TOOTH_SIZE + TOOTH_GAP)

        : START_X
            + 8 * (TOOTH_SIZE + TOOTH_GAP)
            + MIDLINE_GAP
            + index * (TOOTH_SIZE + TOOTH_GAP);

    const distanceFromCenter = Math.abs(index - 3.5);

    const curve = Math.pow(distanceFromCenter, 2) * ARCH_CURVE / 12;

    const y = row === 0

        ? START_Y + curve

        : START_Y + ARCH_SPACING - curve;

    return { x, y };

}