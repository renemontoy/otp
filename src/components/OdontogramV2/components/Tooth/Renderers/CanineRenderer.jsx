import ToothFace from "../../ToothFace";

import { getFaceColor } from "../../../utils/getFaceColor";
import { FACE_ORDER } from "../../../geometry/faces";
import { CANINE_GEOMETRY } from "../../../geometry/canines";
function CanineRenderer({

    tooth,

    onFaceClick

}){

    return (

        <>

            {FACE_ORDER.map(faceId => (

                <ToothFace

                    key={faceId}

                    id={faceId}

                    points={CANINE_GEOMETRY[faceId]}

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

export default CanineRenderer;