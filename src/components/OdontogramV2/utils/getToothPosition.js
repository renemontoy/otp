const UPPER_TEETH = [
    "18",
    "17",
    "16",
    "15",
    "14",
    "13",
    "12",
    "11",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28"
];

const LOWER_TEETH = [
    "48",
    "47",
    "46",
    "45",
    "44",
    "43",
    "42",
    "41",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38"
];

const START_X = 100;

const TOOTH_SPACING = 64;

const MIDLINE_GAP = 38;

const UPPER_ROW_Y = 110;

const LOWER_ROW_Y = 290;

function calculateX(index) {

    const centerGap =
        index >= 8
            ? MIDLINE_GAP
            : 0;

    return (
        START_X +
        index * TOOTH_SPACING +
        centerGap
    );

}

export function getToothPosition(toothNumber) {

    const toothId = String(toothNumber);

    const upperIndex =
        UPPER_TEETH.indexOf(toothId);

    if (upperIndex !== -1) {

        return {

            x: calculateX(upperIndex),

            y: UPPER_ROW_Y,

            numberY: 43,

            row: "upper"

        };

    }

    const lowerIndex =
        LOWER_TEETH.indexOf(toothId);

    if (lowerIndex !== -1) {

        return {

            x: calculateX(lowerIndex),

            y: LOWER_ROW_Y,

            numberY: -43,

            row: "lower"

        };

    }

    console.warn(
        `No se encontró la posición de la pieza ${toothNumber}`
    );

    return {

        x: 0,

        y: 0,

        numberY: 0,

        row: null

    };

}