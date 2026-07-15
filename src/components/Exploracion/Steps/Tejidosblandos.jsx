import "../Exploracion.css";
import { useState, useEffect } from "react";

function TejidosBlandosDataStep({
    formData,

    handleChange

}){


    return(
        <>
            <div className="formGroup">
            <h2>Tejidos Blandos</h2>

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

export default TejidosBlandosDataStep;