import { useState, useMemo } from "react";
import { createTreatment } from "../data/createTreatment";
import { createOdontogram } from "../data/createOdontogram";
import { applyTreatmentToFaces } from "../services/treatmentEngine";

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

    const selectedFaces = useMemo(() => {

        const faces = [];

        Object.values(odontogram).forEach(tooth => {

            Object.entries(tooth.faces).forEach(([faceId, face]) => {

                if(face.selected){

                    faces.push({

                        toothNumber: tooth.number,

                        faceId

                    });

                }

            });

        });

        return faces;

    }, [odontogram]);

    function applyTreatment(){

        if(selectedFaces.length === 0){

            return;

        }

        if(!treatmentData.treatmentId){

            return;

        }

        const updated = applyTreatmentToFaces(

            odontogram,

            selectedFaces,

            treatmentData

        );

        setOdontogram(updated);

        setTreatmentData({

            treatmentId: "",

            treatmentName: "",

            materialId: "",

            materialName: "",

            observations: ""

        });

    }
    const [treatmentData, setTreatmentData] = useState({

        treatmentId: "",

        treatmentName: "",

        materialId: "",

        materialName: "",

        observations: ""

    });
    return{

        odontogram,

        toggleFaceSelection,

        selectedFaces,

        applyTreatment,

        treatmentData,

        setTreatmentData
    };

}