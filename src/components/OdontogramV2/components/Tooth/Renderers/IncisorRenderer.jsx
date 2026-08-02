import ToothFace from "../../ToothFace";
import { FACE_ORDER } from "../../../geometry/faces";
import { getFaceColor } from "../../../utils/getFaceColor";
import { INCISOR_PATH } from "../../../geometry/incisorPath";

function IncisorRenderer({

    tooth,

    onFaceClick

}){

    return (

        <>

            {FACE_ORDER.map(faceId => (

                <ToothFace

                    key={faceId}

                    id={faceId}

                    points={INCISOR_PATH[faceId]}

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

export default IncisorRenderer;