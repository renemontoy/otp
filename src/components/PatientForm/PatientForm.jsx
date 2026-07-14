import "./PatientForm.css";
import { useState, useEffect} from "react"; 
import PersonalDataStep from "./Steps/PersonalDataStep";
import FamilyDataStep from "./Steps/FamilyDataStep";
import MedicalDataStep from "./Steps/MedicalDataStep";
import AntecedentesStep from "./Steps/AntecedentesStep";

function PatientForm({ mode, patient, onCancel, onSave }) {

    const [formData, setFormData] = useState({

    nombre: "",

    apellido: "",

    edad: "",

    fecha_nacimiento: "",

    estado_nacimiento: "",

    municipio_nacimiento: "",

    ocupacion: "",

    escolaridad: "",

    estado_civil: "",

    domicilio: "",

    estado: "",

    municipio: "",

    telefono: "",

    correo: "",

    medico_familiar: "",

    telefono_medico_familiar: "",

    fecha_ultima_consulta: "",

    motivo_ultima_consulta: "",

    persona_emergencia: "",

    telefono_emergencia: "",

    antecedentes_padre: "",

    antecedentes_madre: "",

    antecedentes_abuelo_paterno: "",

    antecedentes_abuelo_materno: "",

    antecedentes_abuela_paterna: "",

    antecedentes_abuela_materna: "",

    antecedentes_hermanos: "",

    antecedentes_personales: "",

    });

    const [step, setStep] = useState(1);


    useEffect(() => {

        if (mode === "edit" && patient) {

            setFormData({

                nombre: patient.nombre || "",

                apellido: patient.apellido || "",

                edad: patient.edad || "",

                fecha_nacimiento: patient.fecha_nacimiento || "",

                estado_nacimiento: patient.estado_nacimiento || "",

                municipio_nacimiento: patient.municipio_nacimiento || "",

                ocupacion: patient.ocupacion || "",

                escolaridad: patient.escolaridad || "",

                estado_civil: patient.estado_civil || "",

                domicilio: patient.domicilio || "",

                estado: patient.estado || "",

                municipio: patient.municipio || "",

                telefono: patient.telefono || "",

                correo: patient.correo || "",

                medico_familiar: patient.medico_familiar || "",

                telefono_medico_familiar: patient.telefono_medico_familiar || "",

                fecha_ultima_consulta: patient.fecha_ultima_consulta || "",

                motivo_ultima_consulta: patient.motivo_ultima_consulta || "",

                persona_emergencia: patient.persona_emergencia || "",

                telefono_emergencia: patient.telefono_emergencia || "",

                antecedentes_padre: patient.antecedentes_padre || "",

                antecedentes_madre: patient.antecedentes_madre || "",

                antecedentes_abuelo_paterno: patient.antecedentes_abuelo_paterno || "",

                antecedentes_abuelo_materno: patient.antecedentes_abuelo_materno || "",

                antecedentes_abuela_paterna: patient.antecedentes_abuela_paterna || "",

                antecedentes_abuela_materna: patient.antecedentes_abuela_materna || "",

                antecedentes_hermanos: patient.antecedentes_hermanos || "",
                
                antecedentes_personales: patient.antecedentes_personales || "",
                });

        }

        if (mode === "create") {

            setFormData({

    nombre: "",

            apellido: "",

            edad: "",

            fecha_nacimiento: "",

            estado_nacimiento: "",

            municipio_nacimiento: "",

            ocupacion: "",

            escolaridad: "",

            estado_civil: "",

            domicilio: "",

            estado: "",

            municipio: "",

            telefono: "",

            correo: "",

            medico_familiar: "",

            telefono_medico_familiar: "",

            fecha_ultima_consulta: "",

            motivo_ultima_consulta: "",

            persona_emergencia: "",

            telefono_emergencia: "",

            antecedentes_padre: "",

            antecedentes_madre: "",

            antecedentes_abuelo_paterno: "",

            antecedentes_abuelo_materno: "",

            antecedentes_abuela_paterna: "",

            antecedentes_abuela_materna: "",

            antecedentes_hermanos: "",
        
            antecedentes_personales: "",
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

                {step === 4 && (

                    <AntecedentesStep

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

                    {step < 4 ? (

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