import "./PatientForm.css";
import { useState, useEffect} from "react"; 

function PatientForm({ mode, patient, onCancel, onSave }) {

    const [formData, setFormData] = useState({

    nombre: "",

    apellido: "",

    edad: "",

    telefono: "",

    direccion: ""

    });


    useEffect(() => {

        if (mode === "edit" && patient) {

            setFormData({

                nombre: patient.nombre || "",

                apellido: patient.apellido || "",

                fecha_nacimiento: patient.fecha_nacimiento || "",

                edad: patient.edad || "",

                telefono: patient.telefono || "",

                direccion: patient.direccion || ""

            });

        }

        if (mode === "create") {

            setFormData({

                nombre: "",

                apellido: "",

                fecha_nacimiento: "",

                edad: "",

                telefono: "",

                direccion: ""

            });

        }

    }, [mode, patient]);

    function handleChange(e){

    setFormData({

        ...formData,

        [e.target.name]: e.target.value

    });
        
    }

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

                <label>Fecha de Nacimiento</label>

                <input
                    type="date"
                    name="fecha_nacimiento"
                    value={formData.fecha_nacimiento}
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

                <label>Teléfono</label>

                <input
                    type="number"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                />

            </div>
            

            <div className="formGroup">

                <label>Dirección</label>

                <input
                    type="text"
                    name="direccion"
                    value={formData.direccion}
                    onChange={handleChange}
                />

            </div>

            <div className="formGroup">

                <label>Alergias</label>

                <input
                    type="text"
                    name="alergias"
                    value={formData.alergias}
                    onChange={handleChange}
                />

            </div>

            <div className="formGroup">

                <label>Enfermedades</label>

                <input
                    type="text"
                    name="enfermedades"
                    value={formData.enfermedades}
                    onChange={handleChange}
                />

            </div>

            <div className="formGroup">

                <label>Observaciones</label>

                <input
                    type="text"
                    name="observaciones"
                    value={formData.observaciones}
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