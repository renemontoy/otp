import "./Odontogram.css";

import Tooth from "./Tooth/Tooth";

import { createOdontogram } from "./data/createOdontogram";

import {

    UPPER_RIGHT,

    UPPER_LEFT

} from "./data/teeth";

const odontogram = createOdontogram();

function Odontogram() {

    return (

        <div className="upperArch">

            {UPPER_RIGHT.map(number => (

                <Tooth

                    key={number}

                    tooth={odontogram[number]}

                />

            ))}

            {UPPER_LEFT.map(number => (

                <Tooth

                    key={number}

                    tooth={odontogram[number]}

                />

            ))}

        </div>

    );

}

export default Odontogram;