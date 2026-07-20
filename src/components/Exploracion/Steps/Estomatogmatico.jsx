import "../Exploracion.css";
import { useState, useEffect } from "react";
import RadioGroup from "../../Form/RadioGroup";
function EstomagoDataStep({
    formData,

    handleChange

}){
    return(
        <>
        <div className="formGroup">
        <h2>Exploración del aparato etomatognático</h2>

        <RadioGroup
            label="Ruidos:"
            name="ruidos"
            value={formData.ruidos}
            options={[
                { value: "si", label: "Si" },
                { value: "no", label: "No" }
            ]}
            onChange={handleChange}
        />
        <RadioGroup
            label="Chasquidos:"
            name="chasquidos"
            value={formData.chasquidos}
            options={[
                { value: "si", label: "Si" },
                { value: "no", label: "No" }
            ]}
            onChange={handleChange}
        />
        <RadioGroup
            label="Crepitación:"
            name="crepitacion"
            value={formData.crepitacion}
            options={[
                { value: "si", label: "Si" },
                { value: "no", label: "No" }
            ]}
            onChange={handleChange}
        />
        <RadioGroup
            label="Dificultad para abrir la boca:"
            name="dificultad_abrir_boca"
            value={formData.dificultad_abrir_boca}
            options={[
                { value: "si", label: "Si" },
                { value: "no", label: "No" }
            ]}
            onChange={handleChange}
        />
        <RadioGroup
            label="Dolor a la abertura o movimientos de lateralidad:"
            name="dolor_abertura"
            value={formData.dolor_abertura}
            options={[
                { value: "si", label: "Si" },
                { value: "no", label: "No" }
            ]}
            onChange={handleChange}
        />
        <RadioGroup
            label="Fatiga o dolor muscular:"
            name="fatiga_dolor_muscular"
            value={formData.fatiga_dolor_muscular}
            options={[
                { value: "si", label: "Si" },
                { value: "no", label: "No" }
            ]}
            onChange={handleChange}
        />
        <RadioGroup
            label="Disminución de la abertura:"
            name="disminucion_abertura"
            value={formData.disminucion_abertura}
            options={[
                { value: "si", label: "Si" },
                { value: "no", label: "No" }
            ]}
            onChange={handleChange}
        />
        <RadioGroup
            label="Desviación a la abertura cierre:"
            name="desviacion_abertura"
            value={formData.desviacion_abertura}
            options={[
                { value: "si", label: "Si" },
                { value: "no", label: "No" }
            ]}
            onChange={handleChange}
        />
        <RadioGroup
            label="Desgastes:"
            name="desgastes"
            value={formData.desgastes}
            options={[
                { value: "si", label: "Si" },
                { value: "no", label: "No" }
            ]}
            onChange={handleChange}
        />
        <RadioGroup
            label="Bruxismo:"
            name="bruxismo"
            value={formData.bruxismo}
            options={[
                { value: "si", label: "Si" },
                { value: "no", label: "No" }
            ]}
            onChange={handleChange}
        />
        <RadioGroup
            label="Oclusión borde a borde:"
            name="oclusion"
            value={formData.oclusion}
            options={[
                { value: "si", label: "Si" },
                { value: "no", label: "No" }
            ]}
            onChange={handleChange}
        />
        <RadioGroup
            label="Tipo de oclusión (Según la clasificación de Angle):"
            name="tipo_oclusion"
            value={formData.tipo_oclusion}
            options={[
                { value: "clase1", label: "Clase I" },
                { value: "clase2", label: "Clase II" },
                { value: "clase3", label: "Clase III" },
                { value: "na", label: "No Aplica" },
            ]}
            onChange={handleChange}
        />
        <RadioGroup
            label="Plano terminal en dentición primaria:"
            name="plano_terminal_denticion_primaria"
            value={formData.plano_terminal_denticion_primaria}
            options={[
                { value: "denticion_primaria", label: "Plano terminal en dentición primaria" },
                { value: "escalon_mesial", label: "Escalón mesial" },
                { value: "escalon_distal", label: "Escalón distal" },
                { value: "plano_terminal_recto", label: "Plano terminal recto" },
            ]}
            onChange={handleChange}
        />
            </div>
        </>

    )

}

export default EstomagoDataStep;