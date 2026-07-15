import "../Exploracion.css";
import { useState, useEffect } from "react";

function SignosVitalesDataStep({
    formData,

    handleChange

}){


    return(
        <>
            <div className="formGroup">
            <h2>Signos Vitales</h2>
                <label>Peso</label>

                <input
                type="number"
                name="peso"
                value={formData.peso}
                onChange={handleChange}
            />


            </div>

            <div className="formGroup">

                <label>Talla</label>

                <input
                    type="text"
                    name="talla"
                    value={formData.talla}
                    onChange={handleChange}
                />

            </div>
            <div className="formGroup">
                <label>Complexion</label>

                <input
                type="text"
                name="complexion"
                value={formData.complexion}
                onChange={handleChange}
            />
            </div>
            <div className="formGroup">
                <label>Frecuencia cardiaca</label>

                <input
                type="text"
                name="frecuencia_cardiaca"
                value={formData.frecuencia_cardiaca}
                onChange={handleChange}
            />
            </div>
            <div className="formGroup">
                <label>Tensión arterial</label>

                <input
                type="text"
                name="tension_arterial"
                value={formData.tension_arterial}
                onChange={handleChange}
            />
            </div>
            <div className="formGroup">
                <label>Frecuencia respiratoria</label>

                <input
                type="text"
                name="frecuencia_respiratoria"
                value={formData.frecuencia_respiratoria}
                onChange={handleChange}
            />
            </div>
            <div className="formGroup">
                <label>Temperatura</label>

                <input
                type="number"
                name="temperatura"
                value={formData.temperatura}
                onChange={handleChange}
            />
            </div>
            <div className="formGroup">
                <label>Nivel de glucosa</label>

                <input
                type="text"
                name="glucosa"
                value={formData.glucosa}
                onChange={handleChange}
            />
            </div>
        </>

    )

}

export default SignosVitalesDataStep;