import "./Exploracion.css";
import { useState, useEffect} from "react"; 
import SignosVitalesDataStep from "./Steps/Signosvitales";
import CabezaCuelloDataStep from "./Steps/Cabezacuello";
import TejidosBlandosDataStep from "./Steps/Tejidosblandos";
import EstomagoDataStep from "./Steps/Estomatogmatico";
import TejidosBlandosDataStep2 from "./Steps/Tejidosblandos2";
import TejidosBlandosDataStep3 from "./Steps/Tejidosblandos3";

function ExploracionForm({ mode, patient, onCancel, onSave }) {

    const [formData, setFormData] = useState({

    nombre: "",

    apellido: "",

    edad: "",

    cabeza: "",

    craneo: "",

    cara : "",

    perfil: "",

    piel: "",

    musculos: "",

    cuello: "",

    otros_cabeza_cuello: ""

    });


    const [step, setStep] = useState(1);


    useEffect(() => {

        if (mode === "edit" && patient) {

            setFormData({

                nombre: patient.nombre || "",

                apellido: patient.apellido || "",

                edad: patient.edad || "",

                cabeza: patient.cabeza || "",

                craneo: patient.craneo || "",

                cara: patient.cara || "",

                perfil: patient.perfil || "",

                piel: patient.piel || "",

                musculos: patient.musculos || "",

                cuello: patient.cuello || "",

                otros_cabeza_cuello: patient.otros_cabeza_cuellos || ""

                });

        }

        if (mode === "create") {

            setFormData({

            nombre: "",

            apellido: "",

            edad: "",

            fecha_nacimiento: "",

            cabeza: "",
            
            craneo:"",

            cara:"",

            perfil: "",

            piel: "",

            musculos: "",

            cuello: "",

            otros_cabeza_cuello: ""
        });

        }

    }, [mode, patient]);

    function handleChange(e){

    setFormData({

        ...formData,

        [e.target.name]: e.target.value

    });
        
    }

    const explorationSteps = [
        {
            number: 1,
            title: "Signos vitales"
        },
        {
            number: 2,
            title: "Cabeza y cuello"
        },
        {
            number: 3,
            title: "Estomatognático"
        },
        {
            number: 4,
            title: "Tejidos blandos"
        },
        {
            number: 5,
            title: "Tejidos blandos"
        },
        {
            number: 6,
            title: "Tejidos blandos"
        }
    ];

    return (

        <div className="explorationCard">

            <div className="explorationHeader">

                <div>

                    <span className="explorationEyebrow">
                        Expediente clínico
                    </span>

                    <h2>
                        Exploración clínica
                    </h2>

                    <p>
                        {patient?.nombre}{" "}
                        {patient?.apellido}
                    </p>

                </div>


                <span className="explorationStepCounter">

                    {step} / {explorationSteps.length}

                </span>

            </div>


            <div className="explorationProgress">

                <div className="explorationProgressHeader">

                    <span>
                        Paso {step}
                    </span>

                    <strong>
                        {explorationSteps[step - 1].title}
                    </strong>

                </div>


                <div className="explorationProgressBar">

                    <div
                        className="explorationProgressValue"
                        style={{
                            width:
                                `${(step / explorationSteps.length) * 100}%`
                        }}
                    />

                </div>

            </div>


            <div className="explorationContent">

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


                {step === 5 && (

                    <TejidosBlandosDataStep2
                        formData={formData}
                        handleChange={handleChange}
                    />

                )}


                {step === 6 && (

                    <TejidosBlandosDataStep3
                        formData={formData}
                        handleChange={handleChange}
                    />

                )}

            </div>


            <div className="explorationFooter">

                {step === 1 ? (

                    <button
                        type="button"
                        className="explorationSecondaryButton"
                        onClick={onCancel}
                    >

                        Cancelar

                    </button>

                ) : (

                    <button
                        type="button"
                        className="explorationSecondaryButton"
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


                {step < explorationSteps.length ? (

                    <button
                        type="button"
                        className="explorationPrimaryButton"
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
                        className="explorationPrimaryButton"
                        onClick={() =>
                            onSave(formData)
                        }
                    >

                        Guardar exploración

                    </button>

                )}

            </div>

        </div>

    );

}

export default ExploracionForm;