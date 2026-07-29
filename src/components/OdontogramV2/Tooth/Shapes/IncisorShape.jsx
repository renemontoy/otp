import ToothFace from "../ToothFace";

import {

    INCISOR_OUTLINE,

    INCISOR_FACES

} from "../../geometry/incisors";

function IncisorShape({ tooth, onFaceClick }) {

    return (

        <svg

            width="72"

            height="72"

            viewBox="0 0 100 100"

        >

            {/* Fondo */}

            <path

                d={INCISOR_OUTLINE}

                fill="white"

            />

            {/* Caras */}

            {INCISOR_FACES.map(face => (

                <ToothFace

                    key={face.id}

                    name={face.id}

                    points={face.points}

                    color={tooth.faces[face.id].color}

                    selected={tooth.faces[face.id].selected}

                    onClick={() =>

                        onFaceClick(

                            tooth.number,

                            face.id

                        )

                    }

                />

            ))}

            {/* Contorno */}

            <path

                d={INCISOR_OUTLINE}

                fill="none"

                stroke="#334155"

                strokeWidth="1.5"

            />

        </svg>

    );

}

export default IncisorShape;