import "./PatientForm.css";
import { useState, useEffect} from "react"; 
import PersonalDataStep from "./Steps/PersonalDataStep";
import FamilyDataStep from "./Steps/FamilyDataStep";
import AntecedentesStep from "./Steps/AntecedentesStep";
const patientFormSteps = [
    {
        number: 1,
        title: "Datos personales"
    },
    {
        number: 2,
        title: "Antecedentes"
    },
    {
        number: 3,
        title: "Datos familiares"
    }
];
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

    /*medico_familiar: "",

    telefono_medico_familiar: "",

    fecha_ultima_consulta: "",

    motivo_ultima_consulta: "",

    persona_emergencia: "",

    telefono_emergencia: "",*/

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

                /*medico_familiar: patient.medico_familiar || "",

                telefono_medico_familiar: patient.telefono_medico_familiar || "",

                fecha_ultima_consulta: patient.fecha_ultima_consulta || "",

                motivo_ultima_consulta: patient.motivo_ultima_consulta || "",

                persona_emergencia: patient.persona_emergencia || "",

                telefono_emergencia: patient.telefono_emergencia || "",*/

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

            /*medico_familiar: "",

            telefono_medico_familiar: "",

            fecha_ultima_consulta: "",

            motivo_ultima_consulta: "",

            persona_emergencia: "",

            telefono_emergencia: "",*/

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

            <div className="patientFormHeader">

                <div>

                    <span className="patientFormEyebrow">
                        Expediente clínico
                    </span>

                    <h2>

                        {mode === "create"
                            ? "Nuevo paciente"
                            : "Editar paciente"}

                    </h2>

                    {mode === "edit" && patient && (

                        <p>
                            {patient.nombre} {patient.apellido}
                        </p>

                    )}

                </div>


                <span className="patientFormStepCounter">

                    {step} / {patientFormSteps.length}

                </span>

            </div>


            <div className="patientFormProgress">

                <div className="patientFormProgressHeader">

                    <span>
                        Paso {step}
                    </span>

                    <strong>
                        {patientFormSteps[step - 1].title}
                    </strong>

                </div>


                <div className="patientFormProgressBar">

                    <div
                        className="patientFormProgressValue"
                        style={{
                            width:
                                `${(step / patientFormSteps.length) * 100}%`
                        }}
                    />

                </div>

            </div>


            <div className="patientFormContent">

                {step === 1 && (

                    <PersonalDataStep
                        formData={formData}
                        handleChange={handleChange}
                    />

                )}


                {step === 2 && (

                    <AntecedentesStep
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

            </div>


            <div className="patientFormFooter">

                {step === 1 ? (

                    <button
                        type="button"
                        className="patientFormSecondaryButton"
                        onClick={onCancel}
                    >

                        Cancelar

                    </button>

                ) : (

                    <button
                        type="button"
                        className="patientFormSecondaryButton"
                        onClick={() =>
                            setStep(
                                (current) =>
                                    current - 1
                            )
                        }
                    >

                        ← Anterior

                    </button>

                )}


                {step < patientFormSteps.length ? (

                    <button
                        type="button"
                        className="patientFormPrimaryButton"
                        onClick={() =>
                            setStep(
                                (current) =>
                                    current + 1
                            )
                        }
                    >

                        Siguiente →

                    </button>

                ) : (

                    <button
                        type="button"
                        className="patientFormPrimaryButton"
                        onClick={() =>
                            onSave(formData)
                        }
                    >

                        {mode === "create"
                            ? "Guardar paciente"
                            : "Guardar cambios"}

                    </button>

                )}

            </div>

        </div>

    );

}

export default PatientForm;