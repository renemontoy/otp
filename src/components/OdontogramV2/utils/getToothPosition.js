const SPACING=80;

export function getToothPosition(number){

    const map={

        18:{x:0,y:0},
        17:{x:SPACING,y:0},
        16:{x:SPACING*2,y:0},
        15:{x:SPACING*3,y:0},
        14:{x:SPACING*4,y:0},
        13:{x:SPACING*5,y:0},
        12:{x:SPACING*6,y:0},
        11:{x:SPACING*7,y:0},

        21:{x:SPACING*9,y:0},
        22:{x:SPACING*10,y:0},
        23:{x:SPACING*11,y:0},
        24:{x:SPACING*12,y:0},
        25:{x:SPACING*13,y:0},
        26:{x:SPACING*14,y:0},
        27:{x:SPACING*15,y:0},
        28:{x:SPACING*16,y:0},

        48:{x:0,y:250},
        47:{x:SPACING,y:250},
        46:{x:SPACING*2,y:250},
        45:{x:SPACING*3,y:250},
        44:{x:SPACING*4,y:250},
        43:{x:SPACING*5,y:250},
        42:{x:SPACING*6,y:250},
        41:{x:SPACING*7,y:250},

        31:{x:SPACING*9,y:250},
        32:{x:SPACING*10,y:250},
        33:{x:SPACING*11,y:250},
        34:{x:SPACING*12,y:250},
        35:{x:SPACING*13,y:250},
        36:{x:SPACING*14,y:250},
        37:{x:SPACING*15,y:250},
        38:{x:SPACING*16,y:250}

    };

    return map[number];

}