import "./PatientForm.css";
import { useState, useEffect} from "react"; 
import PersonalDataStep from "./Steps/PersonalDataStep";
import FamilyDataStep from "./Steps/FamilyDataStep";
import MedicalDataStep from "./Steps/MedicalDataStep";

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

    const [step, setStep] = useState(1);


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


    return (

        <div className="patientFormCard">

            {/*<h2>

                {mode === "create"

                    ? "Nuevo Paciente"

                    : "Editar Paciente"}

            </h2>*/}

            {step === 1 && (

                    <PersonalDataStep

                        formData={formData}

                        handleChange={handleChange}

                    />

                )}

                {step === 2 && (

                    <MedicalDataStep

                        formData={formData}

                        handleChange={handleChange}

                    />

                )}

                {step === 3 && (

                    <FamilyDataStep

                        formData={formData}

                        handleChange={handleChange}

                    />

                )}

                <div className="formButtons">

                    {step == 1 ? (

                        <button

                            className="cancelButton"
                            onClick={() => onCancel()}

                        >

                            Cancelar

                        </button>

                    ) : (

                        <button

                            className="cancelButton"
                            onClick={() => setStep(step - 1)}

                        >

                            Anterior

                        </button>

                    )}

                   {/* {step > 1 && (

                        <button

                            className="cancelButton"
                            onClick={() => setStep(step - 1)}

                        >
                            
                            Anterior

                        </button>

                    )}*/}

                    {step < 3 ? (

                        <button
                            className="saveButton"
                            onClick={() => setStep(step + 1)}

                        >

                            Siguiente

                        </button>

                    ) : (

                        <button
                            className="saveButton"
                            onClick={() => onSave(formData)}

                        >

                            Guardar

                        </button>

                    )}

                </div>

        </div>

    );

}

export default PatientForm;