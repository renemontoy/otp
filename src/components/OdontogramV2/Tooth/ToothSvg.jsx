import { OUTLINES } from "../geometry/outlines";
import { BASE_FACES } from "../geometry/faces";
import ToothFace from "./ToothFace";

function ToothSvg({ tooth, onFaceClick }) {

    const outline = OUTLINES[tooth.type];

    return (

        <svg
            width="72"
            height="72"
            viewBox="0 0 100 100"
        >

            <path
                d={outline}
                fill="#FFFFFF"
            />

            {BASE_FACES.map(face => (

                <ToothFace

                    key={face.id}

                    points={face.points}

                    face={tooth.faces[face.id]}

                    onClick={() =>
                        onFaceClick?.(
                            tooth.number,
                            face.id
                        )
                    }

                />

            ))}

            <path
                d={outline}
                fill="none"
                stroke="#334155"
                strokeWidth="1.5"
            />

        </svg>

    );

}

export default ToothSvg;