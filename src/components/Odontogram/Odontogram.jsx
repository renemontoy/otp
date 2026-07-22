import "./Odontogram.css";
import { Odontogram } from "react-odontogram";
import "react-odontogram/style.css";
import { useState, useEffect } from "react";
import TreatmentPanel from "./TreatmentPanel";
import PendingTreatments from "./PendingTratments";

function Odontograma({onCancel}) {

    const [odontogramKey, setOdontogramKey] = useState(0);

    const [selectedTeeth, setSelectedTeeth] = useState([]);
    const [treatmentData, setTreatmentData] = useState({

        treatment: "",

        material: "",

        observations: ""

    });

    const [pendingTreatments, setPendingTreatments] = useState([]);

    const handleChange = (teeth) => {

        const selected = teeth.map(tooth => tooth.notations.fdi);

        setSelectedTeeth(selected);
    };

    function addTreatment(){
        if(selectedTeeth.length === 0){

            alert("Seleccione un diente.");

            return;

        }

        if(!treatmentData.treatment){

            alert("Seleccione un tratamiento.");

            return;

        }
        const treatment = {

            id: Date.now(),

            teeth: [...selectedTeeth],

            treatment: treatmentData.treatment,

            material: treatmentData.material,

            observations: treatmentData.observations

        };

        console.log(treatment);

        setPendingTreatments((prev)=>([

            ...prev,

            treatment

        ]));

        setTreatmentData({

            treatment: "",

            material: "",

            observations: ""

        });

        setSelectedTeeth([]);

        setOdontogramKey(prev => prev + 1);
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
        onClick={() => addTreatment()}
        >
            Agregar Tratamiento
        </button>

    </div>

    </div>

  );
}


export default Odontograma;