import "./PatientForm.css";
import { useState, useEffect} from "react"; 
import { estados } from "../../supabase/estados";

function PatientForm({ mode, patient, onCancel, onSave }) {

    const [formData, setFormData] = useState({

    nombre: "",

    apellido: "",

    edad: "",

    telefono: "",

    direccion: "",

    alergias: "",

    enfermedades: "",

    observaciones: ""

    });


    useEffect(() => {

        if (mode === "edit" && patient) {

            setFormData({

                nombre: patient.nombre || "",

                apellido: patient.apellido || "",

                edad: patient.edad || "",

                fecha_nacimiento: patient.fecha_nacimiento || "",

                lugar_nacimiento: patient.lugar_nacimiento || "",

                ocupacion: patient.ocupacion || "",

                telefono: patient.telefono || "",

                direccion: patient.direccion || "",

                alergias: patient.alergias || "",

                enfermedades: patient.enfermedades || "",

                observaciones: patient.observaciones || ""
            });

        }

        if (mode === "create") {

            setFormData({

                nombre: "",

                apellido: "",

                edad: "",

                fecha_nacimiento: "",

                lugar_nacimiento: "",
                
                ocupacion: "",

                telefono: "",

                direccion: "",

                alergias: "",

                enfermedades: "",

                observaciones: ""

            });

        }

    }, [mode, patient]);

    function handleChange(e){

    setFormData({

        ...formData,

        [e.target.name]: e.target.value

    });
        
    }

    const estadoSeleccionado = estados.find(
        (e) => e.nombre === formData.estado
    );

    const estadoSeleccionado_nacimiento = estados.find(
        (e) => e.nombre === formData.estado_nacimiento
    );

    return (

        <div className="patientFormCard">

            <h2>

                {mode === "create"

                    ? "Nuevo Paciente"

                    : "Editar Paciente"}

            </h2>

            <div className="formGroup">

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
                    name="direccion"
                    value={formData.direccion}
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

                <label>Nombre del médico familiar</label>

                <input
                    type="text"
                    name="medico_familiar"
                    value={formData.medico_familiar}
                    onChange={handleChange}
                />

            </div>

            <div className="formGroup">

                <label>Teléfono del medico familiar</label>

                <input
                    type="number"
                    name="telefono_medico_familiar"
                    value={formData.telefono_medico_familiar}
                    onChange={handleChange}
                />

            </div>

            <div className="formGroup">

                <label>Fecha última consulta médica odontológica</label>

                <input
                    type="date"
                    name="fecha_ultima_consulta"
                    value={formData.fecha_ultima_consulta}
                    onChange={handleChange}
                />

            </div>

            <div className="formGroup">

                <label>Motivo última consulta odontológica</label>

                <input
                    type="text"
                    name="motivo_ultima_consulta"
                    value={formData.motivo_ultima_consulta}
                    onChange={handleChange}
                />

            </div>

            <div className="formGroup">

                <label>En caso de emergencia llamar</label>

                <input
                    type="text"
                    name="persona_emergencia"
                    value={formData.persona_emergencia}
                    onChange={handleChange}
                />

            </div>
           <div className="formGroup">

                <label>Teléfono</label>

                <input
                    type="number"
                    name="telefono_emergencia"
                    value={formData.telefono_emergencia}
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

            <div className="formGroup">

                <label>Motivo de consulta</label>

                <input
                    type="text"
                    name="motivo"
                    value={formData.motivo}
                    onChange={handleChange}
                />

            </div>

            <div className="formButtons">

                <button
                    className="cancelButton"
                    onClick={onCancel}
                >
                    Cancelar
                </button>

                <button className="saveButton"
                onClick={() => onSave(formData)}
                >
                   {mode === "create"

                    ? "Guardar"

                    : "Guardar Cambios"}
                </button>

            </div>

        </div>

    );

}

export default PatientForm;