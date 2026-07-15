import "./Exploracion.css";
import { useState, useEffect} from "react"; 
import SignosVitalesDataStep from "./Steps/Signosvitales";
import CabezaCuelloDataStep from "./Steps/Cabezacuello";
import TejidosBlandosDataStep from "./Steps/tejidosblandos";
import EstomagoDataStep from "./Steps/estomatogmatico";

function ExploracionForm({ mode, patient, onCancel, onSave }) {

    const [formData, setFormData] = useState({

    nombre: "",

    apellido: "",

    edad: "",



    });

    const [step, setStep] = useState(1);


    useEffect(() => {

        if (mode === "edit" && patient) {

            setFormData({

                nombre: patient.nombre || "",

                apellido: patient.apellido || "",

                edad: patient.edad || "",


                });

        }

        if (mode === "create") {

            setFormData({

    nombre: "",

            apellido: "",

            edad: "",

            fecha_nacimiento: "",

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

                    <SignosVitalesDataStep

                        formData={formData}

                        handleChange={handleChange}

                    />

                )}

                {step === 2 && (

                    <CabezaCuelloDataStep

                        formData={formData}

                        handleChange={handleChange}

                    />

                )}

                {step === 3 && (

                    <EstomagoDataStep

                        formData={formData}

                        handleChange={handleChange}

                    />

                )}

                {step === 4 && (

                    <TejidosBlandosDataStep

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

export default ExploracionForm;