import "../Exploracion.css";
import { useState, useEffect } from "react";
import RadioGroup from "../../Form/RadioGroup";

function TejidosBlandosDataStep2({
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
            >Carrillos</h3>
            <label
            >Color</label>
                <input
                type="text"
                name="carrillos_color"
                value={formData.carrillos_color}
                onChange={handleChange}
            />
            <RadioGroup
                label=""
                name="carrillos"
                value={formData.carrillos}
                options={[
                    { value: "normal", label: "Sin alteraciones" },
                    { value: "linea_alba", label: "Línea alba o clusat" },
                    { value: "mordisqueo", label: "Mordisqueo" }
                ]}
                onChange={handleChange}
            />
            <label
            >Otros (especificar):</label>
                <input
                type="text"
                name="carrillos_especificar"
                value={formData.carrillos_especificar}
                onChange={handleChange}
            />
            </div>

            <div className="formGroup">
            <h3
            style={{marginBottom:5}}
            >Piso de la Boca</h3>
            <label
            >Color</label>
                <input
                type="text"
                name="piso_boca_color"
                value={formData.piso_boca_color}
                onChange={handleChange}
            />
            <RadioGroup
                label=""
                name="piso_boca"
                value={formData.piso_boca}
                options={[
                    { value: "normal", label: "Sin alteraciones" },
                    { value: "agrandamientos", label: "Agrandamientos" },
                    { value: "torus", label: "Torus" },
                    { value: "unilateral", label: "Unilateral" },
                    { value: "bilateral", label: "Bilateral" },
                ]}
                onChange={handleChange}
            />
            <label
            >Otros (especificar):</label>
                <input
                type="text"
                name="piso_boca_especificar"
                value={formData.piso_boca_especificar}
                onChange={handleChange}
            />
            </div>
            
            <div className="formGroup">
            <h3
            style={{marginBottom:5}}
            >Paladar duro y blando</h3>
            <label
            >Color</label>
                <input
                type="text"
                name="paladar_color"
                value={formData.paladar_color}
                onChange={handleChange}
            />
            <label
            style={{marginTop:10}}
            >Forma y Tamaño</label>
                <input
                type="text"
                name="paladar_forma_tamano"
                value={formData.paladar_forma_tamano}
                onChange={handleChange}
            />
            <RadioGroup
                label=""
                name="paladar"
                value={formData.paladar}
                options={[
                    { value: "tonus", label: "Tonus" },
                    { value: "irritaciones", label: "Irritaciones" },
                ]}
                onChange={handleChange}
            />
            <label
            >Úvula</label>
                <input
                type="text"
                name="uvula"
                value={formData.uvula}
                onChange={handleChange}
            />
            <label
            style={{marginTop:10}}
            >Otros (especificar):</label>
                <input
                    type="text"
                    name="paladar_especificar"
                    value={formData.paladar_especificar}
                    onChange={handleChange}
                />
            </div>

            </div>
        </>

    )

}

export default TejidosBlandosDataStep2;