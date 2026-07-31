import "./Odontogram.css";
import ToothGroup from "./components/ToothGroup";
import { getToothPosition } from "./utils/getToothPosition";
import { useOdontogramContext } from "./context/OdontogramContext";

function Odontogram(){
    const {

        odontogram,

        toggleFaceSelection,

        selectedFaces

    } = useOdontogramContext();
    return(
        <svg
            className="odontogramSvg"
            viewBox="0 0 1800 900"
            preserveAspectRatio="xMidYMid meet"
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
    );

}

export default Odontogram;