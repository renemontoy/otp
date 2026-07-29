import "./Odontogram.css";

import ToothGroup from "./components/ToothGroup";

import { createOdontogram } from "./data/createOdontogram";
import { getToothPosition } from "./utils/getToothPosition";

const odontogram = createOdontogram();

function Odontogram(){

    return(

        <svg

            className="odontogram"

            viewBox="0 0 1500 600"

        >

            {Object.values(odontogram).map(tooth => {

                const {x,y}=getToothPosition(tooth.number);

                return(

                    <ToothGroup

                        key={tooth.number}

                        tooth={tooth}

                        x={x}

                        y={y}

                    />

                );

            })}

        </svg>

    );

}

export default Odontogram;