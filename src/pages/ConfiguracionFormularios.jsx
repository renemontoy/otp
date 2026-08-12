import "./ConfiguracionFormularios.css";

import {
    useCallback,
    useEffect,
    useState
} from "react";

import {
    FaLock,
    FaNotesMedical
} from "react-icons/fa";

import {
    getFormulariosClinicos
} from "../supabase/formularios";


function formatCode(codigo) {

    if (!codigo) {
        return "Formulario clínico";
    }

    return codigo
        .split("_")
        .map((word) =>
            word.charAt(0).toUpperCase() +
            word.slice(1)
        )
        .join(" ");

}

import { Link } from "react-router-dom";


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


function ConfiguracionFormularios() {

    const [
        formularios,
        setFormularios
    ] = useState([]);

    const [
        loading,
        setLoading
    ] = useState(true);

    const [
        error,
        setError
    ] = useState("");


    const loadFormularios = useCallback(async () => {

        try {

            setLoading(true);
            setError("");

            const data =
                await getFormulariosClinicos();

            setFormularios(data);

        } catch (requestError) {

            console.error(
                "Error cargando formularios:",
                requestError
            );

            setError(
                requestError.message ||
                "No fue posible cargar los formularios."
            );

        } finally {

            setLoading(false);

        }

    }, []);


    useEffect(() => {

        loadFormularios();

    }, [loadFormularios]);


    return (

        <section className="configFormsPage">

            <header className="configFormsHeader">

                <div>

                    <span className="configFormsEyebrow">
                        Configuración
                    </span>

                    <h1>
                        Formularios clínicos
                    </h1>

                    <p>
                        Administra las versiones de los
                        formularios utilizados por la clínica.
                    </p>

                </div>

            </header>


            <div className="configFormsNotice">

                <FaLock />

                <div>

                    <strong>
                        Versiones protegidas
                    </strong>

                    <span>
                        Los formularios publicados no pueden
                        modificarse. Cualquier cambio deberá
                        realizarse creando una nueva versión.
                    </span>

                </div>

            </div>


            {loading && (

                <div className="configFormsState">

                    <div className="configFormsLoader" />

                    <span>
                        Cargando formularios...
                    </span>

                </div>

            )}


            {!loading && error && (

                <div
                    className="configFormsError"
                    role="alert"
                >

                    <strong>
                        No pudimos cargar los formularios
                    </strong>

                    <span>
                        {error}
                    </span>

                    <button
                        type="button"
                        onClick={loadFormularios}
                    >
                        Reintentar
                    </button>

                </div>

            )}


            {!loading &&
                !error &&
                formularios.length === 0 && (

                <div className="configFormsEmpty">

                    <FaNotesMedical />

                    <h2>
                        No hay formularios disponibles
                    </h2>

                    <p>
                        No se encontraron formularios
                        clínicos para esta clínica.
                    </p>

                </div>

            )}


            {!loading &&
                !error &&
                formularios.length > 0 && (

                <div className="configFormsTableContainer">

                    <table className="configFormsTable">

                        <thead>

                            <tr>

                                <th>
                                    Formulario
                                </th>

                                <th>
                                    Versión
                                </th>

                                <th>
                                    Estado
                                </th>

                                <th>
                                    Fecha de publicación
                                </th>

                                <th>
                                    Disponibilidad
                                </th>
                                <th>
                                    Acciones
                                </th>
                            </tr>

                        </thead>

                        <tbody>

                            {formularios.map(
                                (formulario) => {

                                    const isPublished =
                                        formulario.estado ===
                                        "publicado";

                                    return (

                                        <tr key={formulario.id}>

                                            <td>

                                                <div className="configFormsName">

                                                    <span className="configFormsIcon">

                                                        <FaNotesMedical />

                                                    </span>

                                                    <div>

                                                        <strong>

                                                            {formulario.nombre ||
                                                                formatCode(
                                                                    formulario.codigo
                                                                )}

                                                        </strong>

                                                        <span>

                                                            {formulario.codigo}

                                                        </span>

                                                    </div>

                                                </div>

                                            </td>

                                            <td>

                                                <span className="configFormsVersion">

                                                    V{formulario.version}

                                                </span>

                                            </td>

                                            <td>

                                                <span
                                                    className={
                                                        isPublished
                                                            ? "configFormsBadge published"
                                                            : "configFormsBadge draft"
                                                    }
                                                >

                                                    {isPublished
                                                        ? "Publicado"
                                                        : "Borrador"}

                                                </span>

                                            </td>

                                            <td>

                                                {formatDate(
                                                    formulario.publicado_at
                                                )}

                                            </td>

                                            <td>

                                                <span
                                                    className={
                                                        isPublished
                                                            ? "configFormsAvailability locked"
                                                            : "configFormsAvailability editable"
                                                    }
                                                >

                                                    {isPublished && (
                                                        <FaLock />
                                                    )}

                                                    {isPublished
                                                        ? "Solo consulta"
                                                        : "En configuración"}

                                                </span>

                                            </td>
                                            
                                            <td>

                                                <Link
                                                    className="configFormsDetailLink"
                                                    to={`/configuracion/formularios/${formulario.id}`}
                                                >
                                                    Ver detalle
                                                </Link>

                                            </td>
                                        </tr>

                                    );

                                }
                            )}

                        </tbody>

                    </table>

                </div>

            )}

        </section>

    );

}

export default ConfiguracionFormularios;