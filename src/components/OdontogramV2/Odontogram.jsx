import "./Odontogram.css";
import ToothGroup from "./components/ToothGroup";
import { createOdontogram } from "./data/createOdontogram";
import { getToothPosition } from "./utils/getToothPosition";
import { useOdontogram } from "./hooks/useOdontogram";


function Odontogram(){
    const {odontogram, toggleFaceSelection, getSelectedFaces} = useOdontogram();
    return(
        <div>
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

                        onFaceClick={toggleFaceSelection}

                    />

                );

            })}
        </svg>
 <p>
    Caras seleccionadas: {getSelectedFaces().length}
</p>           
            </div>
    );

}

export default Odontogram;