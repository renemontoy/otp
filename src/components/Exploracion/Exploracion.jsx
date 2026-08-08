import "./Exploracion.css";
import { useState, useEffect} from "react"; 
import SignosVitalesDataStep from "./Steps/Signosvitales";
import CabezaCuelloDataStep from "./Steps/Cabezacuello";
import TejidosBlandosDataStep from "./Steps/Tejidosblandos";
import EstomagoDataStep from "./Steps/Estomatogmatico";
import TejidosBlandosDataStep2 from "./Steps/Tejidosblandos2";
import TejidosBlandosDataStep3 from "./Steps/Tejidosblandos3";
import { getExploracionByPatient, createExploracion, updateExploracion } from "../../supabase/exploraciones";
const INITIAL_FORM_DATA = {

    // Signos vitales
    peso: "",
    talla: "",
    complexion: "",
    frecuencia_cardiaca: "",
    tension_arterial: "",
    frecuencia_respiratoria: "",
    temperatura: "",
    glucosa: "",

    // Cabeza y cuello
    cabeza: "",
    craneo: "",
    cara: "",
    perfil: "",
    piel: "",
    musculos: "",
    cuello: "",
    otros_cabeza_cuello: "",

    // Aparato estomatognático
    ruidos: "",
    chasquidos: "",
    crepitacion: "",
    dificultad_abrir_boca: "",
    dolor_abertura: "",
    fatiga_dolor_muscular: "",
    disminucion_abertura: "",
    desviacion_abertura: "",
    desgastes: "",
    bruxismo: "",
    oclusion: "",
    tipo_oclusion: "",
    plano_terminal_denticion_primaria: "",

    // Labios
    resequedad: "",
    labios_forma: "",
    labios_color: "",
    labios_defectos: "",
    labios_especificar: "",

    // Lengua
    lengua: "",
    lengua_especificar: "",

    // Frenillos
    frenillos_anomalias: "",
    frenillos_especificar: "",

    // Carrillos
    carrillos_color: "",
    carrillos: "",
    carrillos_especificar: "",

    // Piso de boca
    piso_boca_color: "",
    piso_boca: "",
    piso_boca_especificar: "",

    // Paladar
    paladar_color: "",
    paladar_forma_tamano: "",
    paladar: "",
    uvula: "",
    paladar_especificar: "",

    // Encías
    encias_color: "",
    encias_forma: "",
    encias_textura: "",
    encias_sangrado: false,
    encias_exudado: false,
    encias_especificar: "",

    // Amígdalas
    amigdalas: "",
    amigdalas_inflamacion: "",
    amigdalas_infeccion: "",

    // Saliva
    saliva: "",
    saliva_especificar: ""
};

function validateVitalSigns(data) {

    const errors = {};

    function validateRange(
        field,
        min,
        max,
        message
    ) {

        const value = data[field];

        if (
            value === "" ||
            value === null ||
            value === undefined
        ) {
            return;
        }

        const number =
            Number(value);

        if (
            Number.isNaN(number) ||
            number < min ||
            number > max
        ) {

            errors[field] =
                message;

        }

    }


    validateRange(
        "peso",
        1,
        500,
        "Ingresa un peso válido."
    );

    validateRange(
        "talla",
        30,
        300,
        "Ingresa una talla válida."
    );

    validateRange(
        "frecuencia_cardiaca",
        20,
        250,
        "Ingresa una frecuencia cardiaca válida."
    );

    validateRange(
        "frecuencia_respiratoria",
        5,
        80,
        "Ingresa una frecuencia respiratoria válida."
    );

    validateRange(
        "temperatura",
        30,
        45,
        "Ingresa una temperatura válida."
    );

    validateRange(
        "glucosa",
        20,
        1000,
        "Ingresa un nivel de glucosa válido."
    );


    return errors;
}

function ExploracionForm({ patient, onCancel, onSave }) {

    const [formData, setFormData] =
    useState(INITIAL_FORM_DATA);

    const [exploracionId, setExploracionId] =
        useState(null);

    const [loading, setLoading] =
        useState(true);

    const [saving, setSaving] =
        useState(false);

    const [step, setStep] = useState(1);

    const [errors, setErrors] =
        useState({});

    const [saveError, setSaveError] =
        useState("");

    function mapExploracionToForm(data) {

        const form = {};

        Object.keys(INITIAL_FORM_DATA).forEach(
            (field) => {

                form[field] =
                    data?.[field] ?? "";

            }
        );

        return form;
    }
    useEffect(() => {

        async function loadExploracion() {

            if (!patient?.id) {

                setLoading(false);

                return;
            }

            try {

                setLoading(true);

                const data =
                    await getExploracionByPatient(
                        patient.id
                    );

                if (data) {

                    setExploracionId(data.id);

                    setFormData(
                        mapExploracionToForm(data)
                    );

                } else {

                    setExploracionId(null);

                    setFormData(initialFormData);

                }

            } catch (error) {

                console.error(
                    "Error cargando exploración:",
                    error
                );

            } finally {

                setLoading(false);

            }

        }

        loadExploracion();

    }, [patient?.id]);

    function handleChange(e) {

        const {
            name,
            value
        } = e.target;


        setFormData(
            (previous) => ({
                ...previous,
                [name]: value
            })
        );


        if (errors[name]) {

            setErrors(
                (previous) => ({
                    ...previous,
                    [name]: null
                })
            );

        }


        if (saveError) {
            setSaveError("");
        }

    }

    function handleCheckboxChange(e) {

        const {
            name,
            checked
        } = e.target;

        setFormData(
            (previous) => ({
                ...previous,
                [name]: checked
            })
        );

    }

    function handleNext() {

        if (step === 1) {

            const validationErrors =
                validateVitalSigns(
                    formData
                );

            if (
                Object.keys(
                    validationErrors
                ).length > 0
            ) {

                setErrors(
                    validationErrors
                );

                return;
            }

        }


        setErrors({});


        setStep(
            (current) =>
                Math.min(
                    explorationSteps.length,
                    current + 1
                )
        );

    }

    function handlePrevious() {

        setStep(
            (current) =>
                Math.max(
                    1,
                    current - 1
                )
        );

    }

    async function handleSave() {
        const validationErrors =
            validateVitalSigns(
                formData
            );

        if (
            Object.keys(
                validationErrors
            ).length > 0
        ) {

            setErrors(
                validationErrors
            );

            setStep(1);

            return;
        }
        if (!patient?.id) {
            return;
        }

        try {

            setSaving(true);

            const {
                id,
                paciente_id,
                fecha_exploracion,
                created_at,
                updated_at,
                ...exploracionData
            } = formData;


            const dataToSave = {
                ...exploracionData,

                peso:
                    exploracionData.peso === ""
                        ? null
                        : Number(exploracionData.peso),

                talla:
                    exploracionData.talla === ""
                        ? null
                        : Number(exploracionData.talla),

                frecuencia_cardiaca:
                    exploracionData.frecuencia_cardiaca === ""
                        ? null
                        : Number(exploracionData.frecuencia_cardiaca),

                frecuencia_respiratoria:
                    exploracionData.frecuencia_respiratoria === ""
                        ? null
                        : Number(exploracionData.frecuencia_respiratoria),

                temperatura:
                    exploracionData.temperatura === ""
                        ? null
                        : Number(exploracionData.temperatura),

                glucosa:
                    exploracionData.glucosa === ""
                        ? null
                        : Number(exploracionData.glucosa)
            };


            if (exploracionId) {

                await updateExploracion(
                    exploracionId,
                    dataToSave
                );

            } else {

                const nuevaExploracion =
                    await createExploracion(
                        patient.id,
                        dataToSave
                    );

                setExploracionId(
                    nuevaExploracion.id
                );

            }

            if (onSave) {
                onSave();
            }

        } catch (error) {

            console.error(
                "Error guardando exploración:",
                error
            );

            setSaveError(
                "No fue posible guardar la exploración. Intenta nuevamente."
            );

        } finally {

            setSaving(false);

        }

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

    if (loading) {

        return (
            <div className="explorationCard">
                Cargando exploración...
            </div>
        );

    }

    const currentStep =
        explorationSteps[step - 1] ??
        explorationSteps[0];

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
                        {currentStep.title}
                    </strong>

                </div>


                <div className="explorationProgressBar">

                    <div
                        className="explorationProgressValue"
                        style={{
                            width: `${
                                (
                                    Math.min(
                                        Math.max(step, 1),
                                        explorationSteps.length
                                    ) /
                                    explorationSteps.length
                                ) * 100
                            }%`
                        }}
                    />

                </div>

            </div>


            <div className="explorationContent">

                {step === 1 && (

                    <SignosVitalesDataStep
                        formData={formData}
                        handleChange={handleChange}
                        errors={errors}
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
                        handleCheckboxChange={
                            handleCheckboxChange
                        }
                    />

                )}

            </div>
            {saveError && (

                <div className="explorationSaveError">

                    {saveError}

                </div>

            )}

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
                        onClick={handlePrevious}
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
                    onClick={handleSave}
                    disabled={saving}
                >
                    {saving
                        ? "Guardando..."
                        : "Guardar exploración"}
                </button>

                )}

            </div>

        </div>

    );

}

export default ExploracionForm;