import ToothOutline from "./ToothOutline";
import ToothFace from "./ToothFace";
import ToothNumber from "./ToothNumber";
import { FACE_GEOMETRY, FACE_ORDER } from "../geometry/faces";

function ToothGroup({

    tooth,

    x,

    y

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

                    selected={false}

                    onClick={(id) => console.log(tooth.number, id)}

                />

            ))}

        </g>

    );

}

export default ToothGroup;