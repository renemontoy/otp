import "./Odontogram.css";
import { Odontogram } from "react-odontogram";
import "react-odontogram/style.css";

function Odontograma({onCancel}) {

  const handleChange = (selectedTeeth) => {
    console.log(selectedTeeth);
    /*
      Example output:
      [
        {
          "id": "teeth-21",
          "notations": {
            "fdi": "21",
            "universal": "9",
            "palmer": "1UL"
          },
          "type": "Central Incisor"
        },
        {
          "id": "teeth-12",
          "notations": {
            "fdi": "12",
            "universal": "7",
            "palmer": "2UR"
          },
          "type": "Lateral Incisor"
        }
      ]
    */
  };

  return( 
    <div className="patientFormCard">

        <Odontogram 
            onChange={handleChange}
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
        >
            Guardar
        </button>

    </div>

    </div>

  );
}


export default Odontograma;