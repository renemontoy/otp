import "../Exploracion.css";
import { useState, useEffect } from "react";

function EstomagoDataStep({
    formData,

    handleChange

}){


    return(
        <>
            <div className="formGroup">
            <h2>Exploración del aparato etomatognático</h2>

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

export default EstomagoDataStep;