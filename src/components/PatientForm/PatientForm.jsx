import "./PatientForm.css";
import { useState, useEffect} from "react"; 

function PatientForm({ onCancel, onSave }) {

    const [formData, setFormData] = useState({

    nombre: "",

    apellido: "",

    telefono: "",

    direccion: ""

    });

    function handleChange(e){

    setFormData({

        ...formData,

        [e.target.name]: e.target.value

    });
        
    }

    return (

        <div className="patientFormCard">

            <h2>Nuevo Paciente</h2>

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
                    Guardar
                </button>

            </div>

        </div>

    );

}

export default PatientForm;