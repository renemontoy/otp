import "../Exploracion.css";
import { useState, useEffect } from "react";
import RadioGroup from "../../Form/RadioGroup";

function CabezaCuelloDataStep({
    formData,
    handleChange,
    handleCheckboxChange
}){


    return(
        <>
        <div className="formGroup">
        <h2>Exploración de Cabeza y Cuello</h2>

        <RadioGroup
            label="Cabeza"
            name="cabeza"
            value={formData.cabeza}
            options={[
                { value: "exostosis", label: "Exostosis" },
                { value: "endostosis", label: "Endostosis" }
            ]}
            onChange={handleChange}
        />

        <RadioGroup
            label="Cráneo"
            name="craneo"
            value={formData.craneo}
            options={[
                { value: "dolicocefalico", label: "Dolicocefálico" },
                { value: "mesocefalico", label: "Mesocefálico" },
                { value: "braquicefalico", label: "Braquicefálico" },
            ]}
            onChange={handleChange}
        />

        <RadioGroup
            label="Cara"
            name="cara"
            value={formData.cara}
            options={[
                { value: "asimetrias_transversales", label: "Asimetrías Transversales" },
                { value: "asimetrias_longitudinales", label: "Asimetrías Longitudinales" },

            ]}
            onChange={handleChange}
        />

        <RadioGroup
            label="Perfil"
            name="perfil"
            value={formData.perfil}
            options={[
                { value: "concavo", label: "Cóncavo" },
                { value: "convexo", label: "Convexo" },
                { value: "recto", label: "Recto" },

            ]}
            onChange={handleChange}
        />
        <RadioGroup
            label="Piel"
            name="piel"
            value={formData.piel}
            options={[
                { value: "normal", label: "Normal" },
                { value: "palida", label: "Pálida" },
                { value: "cianotica", label: "Cianótica" },
                { value: "enrojecida", label: "Enrojecida" },
            ]}
            onChange={handleChange}
        />
        <RadioGroup
            label="Músculos"
            name="musculos"
            value={formData.musculos}
            options={[
                { value: "hipotonicos", label: "Hipotónicos" },
                { value: "hipertonicos", label: "Hipertónicos" },
                { value: "epasticos", label: "Epásticos" },
            ]}
            onChange={handleChange}
        />
        <RadioGroup
            label="Cuello: Se palpa la cadena ganglionar"
            name="cuello"
            value={formData.cuello}
            options={[
                { value: "si", label: "Si" },
                { value: "no", label: "No" },
            ]}
            onChange={handleChange}
        />
        <div className="formGroup">
                <label>Otros</label>
                <input
                type="text"
                name="otros_cabeza_cuello"
                value={formData.otros_cabeza_cuello}
                onChange={handleChange}
            />
        </div>
        </div>
        </>

    )

}

export default CabezaCuelloDataStep;