import ToothFace from "../../ToothFace";

import { FACE_ORDER } from "../../../geometry/faces";
import { PREMOLAR_GEOMETRY } from "../../../geometry/premolars";
import { getFaceColor } from "../../../utils/getFaceColor";

function PremolarRenderer({

    tooth,

    onFaceClick

}){

    return (

        <>

            {FACE_ORDER.map(faceId => (

                <ToothFace

                    key={faceId}

                    id={faceId}

                    points={PREMOLAR_GEOMETRY[faceId]}

                    fill={getFaceColor(

                        tooth.faces[faceId]

                    )}

                    stroke="#CBD5E1"

                    selected={

                        tooth.faces[faceId].selected

                    }

                    onClick={()=>

                        onFaceClick(

                            tooth.number,

                            faceId

                        )

                    }

                />

            ))}

        </>

    );

}

export default PremolarRenderer;