import "./ConfiguracionFormularioDetalle.css";

import {
    useCallback,
    useEffect,
    useMemo,
    useState
} from "react";

import {
    useNavigate,
    useParams
} from "react-router-dom";

import {
    FaArrowLeft,
    FaLock,
    FaCopy,
    FaNotesMedical
} from "react-icons/fa";

import {
    getFormularioClinicoDetalle,
    crearBorradorFormulario
} from "../supabase/formularios";

import FormularioCampoEditor from "../components/Configuracion/FormularioCampoEditor";
import FormularioDinamicoPreview from "../components/Configuracion/FormularioDinamicoPreview";

function formatDate(value) {

    if (!value) {
        return "Sin publicar";
    }

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
        return "—";
    }

    return new Intl.DateTimeFormat(
        "es-MX",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    ).format(date);

}


function ConfiguracionFormularioDetalle() {

    const { formularioId } = useParams();

    const navigate = useNavigate();

    const [
        formulario,
        setFormulario
    ] = useState(null);

    const [
        loading,
        setLoading
    ] = useState(true);

    const [
        error,
        setError
    ] = useState("");

    const [
        creatingVersion,
        setCreatingVersion
    ] = useState(false);

    const [
        versionError,
        setVersionError
    ] = useState("");

    const [
        showPreview,
        setShowPreview
    ] = useState(false);

    const loadFormulario = useCallback(async () => {

        try {

            setLoading(true);
            setError("");

            const data =
                await getFormularioClinicoDetalle(
                    formularioId
                );

            setFormulario(data);

        } catch (requestError) {

            console.error(
                "Error cargando formulario:",
                requestError
            );

            setError(
                requestError.message ||
                "No fue posible cargar el formulario."
            );

        } finally {

            setLoading(false);

        }

    }, [formularioId]);


    useEffect(() => {

        loadFormulario();

    }, [loadFormulario]);


    const totals = useMemo(() => {

        if (!formulario) {
            return {
                secciones: 0,
                grupos: 0,
                campos: 0
            };
        }

        let grupos = 0;
        let campos = 0;

        formulario.secciones.forEach(
            (seccion) => {

                grupos += seccion.grupos.length;

                seccion.grupos.forEach(
                    (grupo) => {

                        campos += grupo.campos.length;

                    }
                );

            }
        );

        return {
            secciones: formulario.secciones.length,
            grupos,
            campos
        };

    }, [formulario]);

    const handleCreateVersion = async () => {

        try {

            setCreatingVersion(true);
            setVersionError("");

            const result =
                await crearBorradorFormulario(
                    formularioId
                );

            navigate(
                `/configuracion/formularios/${result.id}`
            );

        } catch (requestError) {

            console.error(
                "Error creando versión:",
                requestError
            );

            setVersionError(
                requestError.message ||
                "No fue posible crear la nueva versión."
            );

        } finally {

            setCreatingVersion(false);

        }

    };

    if (loading) {

        return (

            <div className="formDetailState">

                <div className="formDetailLoader" />

                <span>
                    Cargando estructura...
                </span>

            </div>

        );

    }


    if (error) {

        return (

            <div className="formDetailState error">

                <strong>
                    No pudimos cargar el formulario
                </strong>

                <span>
                    {error}
                </span>

                <button
                    type="button"
                    onClick={loadFormulario}
                >
                    Reintentar
                </button>

            </div>

        );

    }


    if (!formulario) {
        return null;
    }


    const isPublished =
        formulario.estado === "publicado";


    const isDraft =
        formulario.estado === "borrador";


    const handleCampoUpdated = (
        updatedCampo
    ) => {

        setFormulario((current) => {

            if (!current) {
                return current;
            }

            return {
                ...current,

                secciones: current.secciones.map(
                    (seccion) => ({
                        ...seccion,

                        grupos: seccion.grupos.map(
                            (grupo) => ({
                                ...grupo,

                                campos: grupo.campos.map(
                                    (campo) =>
                                        campo.id ===
                                        updatedCampo.id
                                            ? {
                                                ...campo,
                                                ...updatedCampo
                                            }
                                            : campo
                                )
                            })
                        )
                    })
                )
            };

        });

    };

    return (

        <section className="formDetailPage">

            <button
                type="button"
                className="formDetailBack"
                onClick={() =>
                    navigate(
                        "/configuracion/formularios"
                    )
                }
            >

                <FaArrowLeft />

                Volver a formularios

            </button>

            <header className="formDetailHeader">

                <div className="formDetailTitle">

                    <span className="formDetailIcon">
                        <FaNotesMedical />
                    </span>

                    <div>

                        <span className="formDetailEyebrow">
                            Configuración · Formularios clínicos
                        </span>

                        <h1>
                            {formulario.nombre ||
                                formulario.codigo}
                        </h1>

                        <p>
                            {formulario.descripcion ||
                                "Consulta la estructura de esta versión."}
                        </p>

                    </div>

                </div>

                <div className="formDetailHeaderStatus">

                    <span className="formDetailVersion">
                        V{formulario.version}
                    </span>

                    <span
                        className={
                            isPublished
                                ? "formDetailStatus published"
                                : "formDetailStatus draft"
                        }
                    >
                        {isPublished
                            ? "Publicado"
                            : "Borrador"}
                    </span>
                    {isPublished && (

                        <button
                            type="button"
                            className="formDetailCloneButton"
                            onClick={handleCreateVersion}
                            disabled={creatingVersion}
                        >

                            <FaCopy />

                            {creatingVersion
                                ? "Creando versión..."
                                : "Crear nueva versión"}

                        </button>

                    )}
                </div>

            </header>

            {versionError && (

                <div
                    className="formDetailActionError"
                    role="alert"
                >
                    {versionError}
                </div>

            )}

            {isPublished && (

                <div className="formDetailLockNotice">

                    <FaLock />

                    <div>

                        <strong>
                            Versión protegida
                        </strong>

                        <span>
                            Esta versión está publicada y
                            únicamente puede consultarse.
                        </span>

                    </div>

                </div>

            )}


            <div className="formDetailSummary">

                <div>
                    <strong>
                        {totals.secciones}
                    </strong>

                    <span>
                        Secciones
                    </span>
                </div>

                <div>
                    <strong>
                        {totals.grupos}
                    </strong>

                    <span>
                        Grupos
                    </span>
                </div>

                <div>
                    <strong>
                        {totals.campos}
                    </strong>

                    <span>
                        Campos
                    </span>
                </div>

                <div>
                    <strong>
                        {formatDate(
                            formulario.publicado_at
                        )}
                    </strong>

                    <span>
                        Publicación
                    </span>
                </div>

            </div>

            <button
                type="button"
                className="formDetailPreviewButton"
                onClick={() =>
                    setShowPreview((current) => !current)
                }
            >
                {showPreview
                    ? "Cerrar vista previa"
                    : "Vista previa"}
            </button>

            {showPreview && (

                <FormularioDinamicoPreview
                    formulario={formulario}
                />

            )}

            {!showPreview && (
            <div className="formDetailSections">

                {formulario.secciones.map(
                    (seccion, sectionIndex) => (

                        <article
                            key={seccion.id}
                            className="formDetailSection"
                        >

                            <header className="formDetailSectionHeader">

                                <span>
                                    {sectionIndex + 1}
                                </span>

                                <div>

                                    <h2>
                                        {seccion.titulo}
                                    </h2>

                                    {seccion.descripcion && (
                                        <p>
                                            {seccion.descripcion}
                                        </p>
                                    )}

                                </div>

                                {!seccion.activo && (
                                    <em>
                                        Inactiva
                                    </em>
                                )}

                            </header>


                            <div className="formDetailGroups">

                                {seccion.grupos.map(
                                    (grupo) => (

                                        <div
                                            key={grupo.id}
                                            className="formDetailGroup"
                                        >

                                            <div className="formDetailGroupHeader">

                                                <div>

                                                    <h3>
                                                        {grupo.titulo ||
                                                            "Grupo sin título"}
                                                    </h3>

                                                    {!grupo.mostrar_titulo && (
                                                        <span>
                                                            Título oculto en
                                                            el formulario
                                                        </span>
                                                    )}

                                                </div>

                                                {!grupo.activo && (
                                                    <em>
                                                        Inactivo
                                                    </em>
                                                )}

                                            </div>


                                        <div className="formDetailFields">

                                            {grupo.campos.map((campo) => (

                                                <FormularioCampoEditor
                                                    key={campo.id}
                                                    campo={campo}
                                                    editable={isDraft}
                                                    onUpdated={handleCampoUpdated}
                                                />

                                            ))}

                                        </div>

                                        </div>

                                    )
                                )}

                            </div>

                        </article>

                    )
                )}

            </div>
            )}
        </section>

    );

}

export default ConfiguracionFormularioDetalle;