import "../Exploracion.css";
import { useState, useEffect } from "react";

function SignosVitalesDataStep({
    formData,
    handleChange,
    errors

}){


    return(
        <>
            <div className="formGroup">
            <h2>Signos Vitales</h2>
                <label>
                    Peso (kg)
                </label>

                <input
                    type="number"
                    step="0.01"
                    name="peso"
                    value={formData.peso}
                    onChange={handleChange}
                    className={
                        errors?.peso
                            ? "explorationInputError"
                            : ""
                    }
                />

                {errors?.peso && (

                    <span className="explorationFieldError">

                        {errors.peso}

                    </span>

                )}

            </div>

            <div className="formGroup">

                <label>Talla</label>

                <input
                    type="number"
                    step="0.01"
                    name="talla"
                    value={formData.talla}
                    onChange={handleChange}
                    className={
                        errors?.talla
                            ? "explorationInputError"
                            : ""
                    }
                />

                {errors?.talla && (

                    <span className="explorationFieldError">

                        {errors.talla}

                    </span>

                )}

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
                step="0.01"
                name="frecuencia_cardiaca"
                value={formData.frecuencia_cardiaca}
                onChange={handleChange}
                    className={
                        errors?.frecuencia_cardiaca
                            ? "explorationInputError"
                            : ""
                    }
                />

                {errors?.frecuencia_cardiaca && (

                    <span className="explorationFieldError">

                        {errors.frecuencia_cardiaca}

                    </span>

                )}
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
                step="0.01"
                name="frecuencia_respiratoria"
                value={formData.frecuencia_respiratoria}
                onChange={handleChange}
                    className={
                        errors?.frecuencia_respiratoria
                            ? "explorationInputError"
                            : ""
                    }
                />

                {errors?.frecuencia_respiratoria && (

                    <span className="explorationFieldError">

                        {errors.frecuencia_respiratoria}

                    </span>

                )}
            </div>
            <div className="formGroup">
                <label>Temperatura</label>

                <input
                type="number"
                step="0.01"
                name="temperatura"
                value={formData.temperatura}
                onChange={handleChange}
                    className={
                        errors?.temperatura
                            ? "explorationInputError"
                            : ""
                    }
                />

                {errors?.temperatura && (

                    <span className="explorationFieldError">

                        {errors.temperatura}

                    </span>

                )}
            </div>
            <div className="formGroup">
                <label>Nivel de glucosa</label>

                <input
                type="text"
                step="0.01"
                name="glucosa"
                value={formData.glucosa}
                onChange={handleChange}
                    className={
                        errors?.glucosa
                            ? "explorationInputError"
                            : ""
                    }
                />

                {errors?.glucosa && (

                    <span className="explorationFieldError">

                        {errors.glucosa}

                    </span>

                )}
            </div>
        </>

    )

}

export default SignosVitalesDataStep;