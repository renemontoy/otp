import "./Odontogram.css";
import { Odontogram } from "react-odontogram";
import "react-odontogram/style.css";
import { useState, useEffect } from "react";
import TreatmentPanel from "./TreatmentPanel";
import PendingTreatments from "./PendingTreatments";

function Odontograma({onCancel}) {

    const [odontogramKey, setOdontogramKey] = useState(0);

    const [selectedTeeth, setSelectedTeeth] = useState([]);
    const [treatmentData, setTreatmentData] = useState({

        treatmentId: "",
        treatmentName: "",

        materialId: "",
        materialName: "",

        observations: ""

    });
    const [pendingTreatments, setPendingTreatments] = useState([]);
    const [editingTreatmentId, setEditingTreatmentId] = useState(null);

    const handleChange = (teeth) => {

        const selected = teeth.map(tooth => tooth.notations.fdi);

        setSelectedTeeth(selected);
    };

    function addTreatment(){
        if(selectedTeeth.length === 0){

            alert("Seleccione un diente.");

            return;

        }

        if(!treatmentData.treatmentId){

            alert("Seleccione un tratamiento.");

            return;

        }
        const treatment = {

            id: editingTreatmentId ?? Date.now(),

            teeth: [...selectedTeeth],

            treatmentId: treatmentData.treatmentId,

            treatmentName: treatmentData.treatmentName,

            materialId: treatmentData.materialId,

            materialName: treatmentData.materialName,

            observations: treatmentData.observations,

            status: "Pendiente"

        };

        console.log(treatment);

        if (editingTreatmentId) {

            setPendingTreatments(prev =>

                prev.map(item =>

                    item.id === editingTreatmentId

                        ? treatment

                        : item

                )

            );

        } else {

            setPendingTreatments(prev => ([

                ...prev,

                treatment

            ]));

        }

        setEditingTreatmentId(null);

        setTreatmentData({

            treatmentId: "",

            treatmentName: "",

            materialId: "",

            materialName: "",

            observations: ""

        });
        setSelectedTeeth([]);

        setOdontogramKey(prev => prev + 1);
}

    function deleteTreatment(id){

        setPendingTreatments(prev =>

            prev.filter(item => item.id !== id)

        );

    }

    function editTreatment(treatment){

        setSelectedTeeth(treatment.teeth);

        setTreatmentData({

            treatmentId: treatment.treatmentId,
            treatmentName: treatment.treatmentName,

            materialId: treatment.materialId,
            materialName: treatment.materialName,

            observations: treatment.observations

        });

        setEditingTreatmentId(treatment.id);

    }

  return( 
    <div className="patientFormCard">
        <Odontogram 
            key={odontogramKey}
            onChange={handleChange}
        />
        <TreatmentPanel

            selectedTeeth={selectedTeeth}

            treatmentData={treatmentData}

            setTreatmentData={setTreatmentData}

        />
        <PendingTreatments 
            pendingTreatments={pendingTreatments}
            
            onDelete={deleteTreatment}

            onEdit={editTreatment}
        />
    
    <div className="formButtons">
        <button
            className="cancelButton"
            onClick={() => onCancel()}
        >
            Cancelar
        </button>
        <button
            className="saveButton"
            onClick={addTreatment}
        >
            {editingTreatmentId
                ? "Guardar Cambios"
                : "Agregar Tratamiento"}
        </button>

    </div>

    </div>

  );
}


export default Odontograma;