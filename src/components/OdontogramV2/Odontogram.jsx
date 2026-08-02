import "./Odontogram.css";
import ToothGroup from "./components/ToothGroup";
import { getToothPosition } from "./utils/getToothPosition";
import { useOdontogramContext } from "./context/OdontogramContext";

function Odontogram() {

    const {

        odontogram,

        toggleFaceSelection

    } = useOdontogramContext();

    return (

        <svg
            className="odontogramSvg"
            viewBox="0 0 1200 400"
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label="Odontograma del paciente"
        >

            {Object.values(odontogram).map(tooth => {

                const {
                    x,
                    y,
                    numberY
                } = getToothPosition(tooth.number);

                return (

                    <ToothGroup
                        key={tooth.number}
                        tooth={tooth}
                        x={x}
                        y={y}
                        numberY={numberY}
                        onFaceClick={toggleFaceSelection}
                    />

                );

            })}

        </svg>

    );

}

export default Odontogram;