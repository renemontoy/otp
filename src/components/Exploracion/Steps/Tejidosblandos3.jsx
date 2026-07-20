import "../Exploracion.css";
import { useState, useEffect } from "react";
import RadioGroup from "../../Form/RadioGroup";

function TejidosBlandosDataStep3({
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
            >Encías</h3>
            <label
            >Color</label>
                <input
                type="text"
                name="encias_color"
                value={formData.encias_color}
                onChange={handleChange}
            />
            <label
            style={{marginTop:10}}
            >Forma</label>
                <input
                type="text"
                name="encias_forma"
                value={formData.encias_forma}
                onChange={handleChange}
            />
            <label
            style={{marginTop:10}}
            >Textura</label>
                <input
                type="text"
                name="encias_textura"
                value={formData.encias_textura}
                onChange={handleChange}
            />
            <RadioGroup
                label=""
                name="encias"
                value={formData.encias}
                options={[
                    { value: "sangrado", label: "Sangrado" },
                    { value: "exudado", label: "Exudado" }
                ]}
                onChange={handleChange}
            />
            <label
            >Otros (especificar):</label>
                <input
                type="text"
                name="carrilos_especificar"
                value={formData.carrillos_especificar}
                onChange={handleChange}
            />
            </div>

            <div className="formGroup">
            <h3
            style={{marginBottom:5}}
            >Amigdalas</h3>
            <RadioGroup
                label=""
                name="amigdalas"
                value={formData.amigdalas}
                options={[
                    { value: "si", label: "Si" },
                    { value: "no", label: "No" },
                ]}
                onChange={handleChange}
            />
            <RadioGroup
                label="Inflamación"
                name="amigdalas_inflamacion"
                value={formData.amigdalas_inflamacion}
                options={[
                    { value: "si", label: "Si" },
                    { value: "no", label: "No" },
                ]}
                onChange={handleChange}
            />
            <RadioGroup
                label="Infección Hipertróficas"
                name="amigdalas_infeccion"
                value={formData.amigdalas_infeccion}
                options={[
                    { value: "si", label: "Si" },
                    { value: "no", label: "No" },
                ]}
                onChange={handleChange}
            />
            </div>
            
            <div className="formGroup">
            <h3
            style={{marginBottom:5}}
            >Saliva</h3>
            <RadioGroup
                label=""
                name="saliva"
                value={formData.saliva}
                options={[
                    { value: "normal", label: "Normal" },
                    { value: "disminuida", label: "Disminuida" },
                ]}
                onChange={handleChange}
            />
            <label
            >Otros (especificar):</label>
                <input
                type="text"
                name="saliva_especificar"
                value={formData.saliva_especificar}
                onChange={handleChange}
            />
            </div>

            </div>
        </>

    )

}

export default TejidosBlandosDataStep3;