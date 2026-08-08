import "./Exploracion.css";
import { useState, useEffect} from "react"; 
import SignosVitalesDataStep from "./Steps/Signosvitales";
import CabezaCuelloDataStep from "./Steps/Cabezacuello";
import TejidosBlandosDataStep from "./Steps/Tejidosblandos";
import EstomagoDataStep from "./Steps/Estomatogmatico";
import TejidosBlandosDataStep2 from "./Steps/Tejidosblandos2";
import TejidosBlandosDataStep3 from "./Steps/Tejidosblandos3";
import { getExploracionByPatient, createExploracion, updateExploracion } from "../../supabase/exploraciones";

function ExploracionForm({ mode, patient, onCancel, onSave }) {

    const initialFormData = {

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

        // Tejidos blandos - labios
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
        encias: "",
        encias_especificar: "",

        // Amígdalas
        amigdalas: "",
        amigdalas_inflamacion: "",
        amigdalas_infeccion: "",

        // Saliva
        saliva: "",
        saliva_especificar: ""
    };

    const [formData, setFormData] = useState(initialFormData);

    const [exploracionId, setExploracionId] =
        useState(null);

    const [loading, setLoading] =
        useState(true);

    const [saving, setSaving] =
        useState(false);

    const [step, setStep] = useState(1);


    useEffect(() => {

        async function loadExploracion() {

            if (!patient?.id) {
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

                    setFormData({
                        ...initialFormData,
                        ...data
                    });

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

    function handleChange(e){

    setFormData({

        ...formData,

        [e.target.name]: e.target.value

    });
        
    }

    async function handleSave() {

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