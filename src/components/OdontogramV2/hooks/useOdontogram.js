import { useState } from "react";

import { createOdontogram } from "../data/createOdontogram";

export function useOdontogram() {

    const [odontogram, setOdontogram] = useState(
        createOdontogram()
    );

    function toggleFaceSelection(toothNumber, faceId){

        setOdontogram(prev => {

            const updated = structuredClone(prev);

            updated[toothNumber].faces[faceId].selected =
                !updated[toothNumber].faces[faceId].selected;

            return updated;

        });

    }

    function getSelectedFaces() {

        const selected = [];

        Object.values(odontogram).forEach(tooth => {

            Object.entries(tooth.faces).forEach(([faceId, face]) => {

                if (face.selected) {

                    selected.push({

                        toothNumber: tooth.number,

                        faceId

                    });

                }

            });

        });

        return selected;

    }  

    return{

        odontogram,

        toggleFaceSelection,

        getSelectedFaces
    };

}