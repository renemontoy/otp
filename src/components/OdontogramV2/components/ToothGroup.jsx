import ToothOutline from "./ToothOutline";
import ToothFace from "./ToothFace";
import ToothNumber from "./ToothNumber";
import { FACE_GEOMETRY, FACE_ORDER } from "../geometry/faces";
import { useOdontogram } from "../hooks/useOdontogram";

function ToothGroup({

    tooth,

    x,

    y,

    onFaceClick

}) {
    return (

        <g transform={`translate(${x},${y})`}>

            <ToothNumber number={tooth.number} />

            <ToothOutline />
            {FACE_ORDER.map(faceId => (

                <ToothFace

                    key={faceId}

                    id={faceId}

                    points={FACE_GEOMETRY[faceId]}

                    fill="#FFFFFF"

                    stroke="#CBD5E1"

                    selected={tooth.faces[faceId].selected}

                    onClick={(faceId)=>onFaceClick(tooth.number, faceId)}

                />

            ))}

        </g>

    );

}

export default ToothGroup;