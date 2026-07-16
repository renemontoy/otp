import "../Exploracion.css";
import { useState, useEffect } from "react";


function CabezaCuelloDataStep({
    formData,
    handleChange,
    handleCheckboxChange
}){


    return(
        <>
        <div className="formGroup">
        <h2>Exploración de Cabeza y Cuello</h2>

        <div className="formGroup">
            <label>Cabeza</label>

        <div className="checkboxGroup">

        <label>

            <input
                type="checkbox"
                checked={formData.cabeza.exostosis}
                onChange={() =>
                    handleCheckboxChange("cabeza", "exostosis")
                }
            />

            Exostosis

        </label>

        <label>

            <input
                type="checkbox"
                checked={formData.cabeza.endostosis}
                onChange={() =>
                    handleCheckboxChange("cabeza", "endostosis")
                }
            />

            Endostosis

        </label>
        </div>

        </div>
        <div className="formGroup">
        <label>Craneo</label>

        <div className="checkboxGroup">

        <label>

            <input
                type="checkbox"
                checked={formData.craneo.dolicocefalo}
                onChange={() =>
                    handleCheckboxChange("craneo", "dolicocefalo")
                }
            />

            Dolicocéfalo

        </label>

        <label>

            <input
                type="checkbox"
                checked={formData.craneo.mesocefalo}
                onChange={() =>
                    handleCheckboxChange("craneo", "mesocefalo")
                }
            />

           Mesocéfalo

        </label>

        <label>

            <input
                type="checkbox"
                checked={formData.craneo.braquicefalo}
                onChange={() =>
                    handleCheckboxChange("craneo", "braquicefalo")
                }
            />

           Braquicéfalo

        </label>
        </div>

        </div>

        </div>
        </>

    )

}

export default CabezaCuelloDataStep;