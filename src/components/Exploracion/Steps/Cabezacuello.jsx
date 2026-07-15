import "../Exploracion.css";
import { useState, useEffect } from "react";

function CabezaCuelloDataStep({
    formData,

    handleChange

}){


    return(
        <>
            <div className="formGroup">
            <h2>Exploración de Cabeza y Cuello</h2>

            <label>Trabajando....</label>

                <input
                type="number"
                name="trabajando"
                value={formData.trabajando}
                onChange={handleChange}
            />

            </div>
        </>

    )

}

export default CabezaCuelloDataStep;