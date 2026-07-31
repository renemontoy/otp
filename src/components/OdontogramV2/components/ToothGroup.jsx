import ToothRenderer from "./Tooth/ToothRenderer";
import ToothNumber from "./ToothNumber";

function ToothGroup({

    tooth,

    x,

    y,

    onFaceClick

}) {

    return (

        <g transform={`translate(${x}, ${y})`}>

            <ToothNumber number={tooth.number} />

            <ToothRenderer

                tooth={tooth}

                onFaceClick={onFaceClick}

            />

        </g>

    );

}

export default ToothGroup;