import "../Exploracion.css";
import { useState, useEffect } from "react";
import RadioGroup from "../../Form/RadioGroup";

function TejidosBlandosDataStep({
    formData,

    handleChange

}){


    return(
        <>
            <div className="formGroup">
            <h2>Tejidos Blandos</h2>

            <div className="formGroup">
            <h3
            style={{marginBottom:5}}
            >Labios</h3>

            <RadioGroup
                label="Resequedad:"
                name="resequedad"
                value={formData.resequedad}
                options={[
                    { value: "si", label: "Si" },
                    { value: "no", label: "No" }
                ]}
                onChange={handleChange}
            />
            <label
            style={{marginTop:-10}}
            >Forma</label>
                <input
                type="text"
                name="labios_forma"
                value={formData.labios_forma}
                onChange={handleChange}
            />
            <label
            style={{marginTop:5}}
            >Color</label>
                <input
                type="text"
                name="labios_color"
                value={formData.labios_color}
                onChange={handleChange}
            />
            <label
            style={{marginTop:5}}
            >Defectos</label>
                <input
                type="text"
                name="labios_defectos"
                value={formData.labios_defectos}
                onChange={handleChange}
            />
            <label
            style={{marginTop:5}}
            >Especificar</label>
                <input
                type="text"
                name="labios_especificar"
                value={formData.labios_especificar}
                onChange={handleChange}
            />
            </div>
            <div className="formGroup">
            <h3
            style={{marginBottom:5}}
            >Lengua</h3>

            <RadioGroup
                label="Tipo:"
                name="lengua"
                value={formData.lengua}
                options={[
                    { value: "saburral", label: "Saburral" },
                    { value: "fisural", label: "Fisural" },
                    { value: "geografica", label: "Geográfica" },
                    { value: "descamacion", label: "Descamación" },
                    { value: "tamaño_aumentado", label: "Tamaño aumentado" },

                ]}
                onChange={handleChange}
            />
            <label
            style={{marginTop:-10}}
            >Especificar</label>
                <input
                type="text"
                name="lengua_especificar"
                value={formData.lengua_especificar}
                onChange={handleChange}
            />
            </div>
                    <div className="formGroup">
            <h3
            style={{marginBottom:5}}
            >Frenillos</h3>

            <RadioGroup
                label="Anomalías"
                name="frenillos_anomalias"
                value={formData.frenillos_anomalias}
                options={[
                    { value: "si", label: "Si" },
                    { value: "no", label: "No" },
                ]}
                onChange={handleChange}
            />
            <label
            style={{marginTop:-10}}
            >Especificar</label>
                <input
                type="text"
                name="frenillos_especificar"
                value={formData.frenillos_especificar}
                onChange={handleChange}
            />
            </div>
            </div>
        </>

    )

}

export default TejidosBlandosDataStep;