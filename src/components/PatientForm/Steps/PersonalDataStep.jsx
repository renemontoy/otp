import "../PatientForm.css";
import { useState, useEffect } from "react";
import { estados } from "../../../supabase/estados";


function PersonalDataStep({
    formData,

    handleChange

}){

    const estadoSeleccionado = estados.find(
        (e) => e.nombre === formData.estado
    );

    const estadoSeleccionado_nacimiento = estados.find(
        (e) => e.nombre === formData.estado_nacimiento
    );

    return(
        <>
            <div className="formGroup">
            <h2>Datos Personales</h2>
                <label>Nombre</label>

                <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
            />


            </div>

            <div className="formGroup">

                <label>Apellido</label>

                <input
                    type="text"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                />

            </div>
            <div className="formGroup">
                <label>Edad</label>

                <input
                type="number"
                name="edad"
                value={formData.edad}
                onChange={handleChange}
            />
            </div>
            <div className="formGroup">

                <label>Fecha de Nacimiento</label>

                <input
                    type="date"
                    name="fecha_nacimiento"
                    value={formData.fecha_nacimiento}
                    onChange={handleChange}
                />

            </div>
            <div className="formGroup">
                <label>Estado de nacimiento</label>

                <select
                    name="estado_nacimiento"
                    value={formData.estado_nacimiento}
                    onChange={(e) => {
                        handleChange(e);

                        // Reinicia el municipio al cambiar de estado
                        setFormData((prev) => ({
                            ...prev,
                            municipio_nacimiento: "",
                        }));
                    }}
                >
                    <option value="">Seleccione un estado</option>

                    {estados.map((estado) => (
                        <option key={estado.id} value={estado.nombre}>
                            {estado.nombre}
                        </option>
                    ))}
                </select>
            </div>
            <div className="formGroup">
                <label>Municipio de nacimiento</label>

                <select
                    name="municipio_nacimiento"
                    value={formData.municipio_nacimiento}
                    onChange={handleChange}
                    disabled={!formData.estado_nacimiento}
                >
                    <option value="">Seleccione un municipio</option>

                    {estadoSeleccionado_nacimiento?.municipios.map((municipio) => (
                        <option key={municipio} value={municipio}>
                            {municipio}
                        </option>
                    ))}
                </select>
            </div>
            <div className="formGroup">

                <label>Ocupación</label>

                <input
                    type="text"
                    name="ocupacion"
                    value={formData.ocupacion}
                    onChange={handleChange}
                />

            </div>
            <div className="formGroup">

                <label>Escolaridad</label>

                <input
                    type="text"
                    name="escolaridad"
                    value={formData.escolaridad}
                    onChange={handleChange}
                />

            </div>
            <div className="formGroup">

                <label>Estado civil</label>

                <input
                    type="text"
                    name="estado_civil"
                    value={formData.estado_civil}
                    onChange={handleChange}
                />

            </div>
            <div className="formGroup">

                <label>Domicilio</label>

                <input
                    type="text"
                    name="domicilio"
                    value={formData.domicilio}
                    onChange={handleChange}
                />

            </div>
            <div className="formGroup">
                <label>Estado</label>

                <select
                    name="estado"
                    value={formData.estado}
                    onChange={(e) => {
                        handleChange(e);

                        // Reinicia el municipio al cambiar de estado
                        setFormData((prev) => ({
                            ...prev,
                            municipio: "",
                        }));
                    }}
                >
                    <option value="">Seleccione un estado</option>

                    {estados.map((estado) => (
                        <option key={estado.id} value={estado.nombre}>
                            {estado.nombre}
                        </option>
                    ))}
                </select>
            </div>
            <div className="formGroup">
                <label>Municipio</label>

                <select
                    name="municipio"
                    value={formData.municipio}
                    onChange={handleChange}
                    disabled={!formData.estado}
                >
                    <option value="">Seleccione un municipio</option>

                    {estadoSeleccionado?.municipios.map((municipio) => (
                        <option key={municipio} value={municipio}>
                            {municipio}
                        </option>
                    ))}
                </select>
            </div>
            <div className="formGroup">

                <label>Teléfono</label>

                <input
                    type="number"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                />

            </div>


            <div className="formGroup">

                <label>Correo electrónico</label>

                <input
                    type="text"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                />

            </div>

        </>

    )

}

export default PersonalDataStep;