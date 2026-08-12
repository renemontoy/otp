import "./FormularioCampoEditor.css";

import {
    useEffect,
    useState
} from "react";

import {
    FaEdit,
    FaSave,
    FaTimes
} from "react-icons/fa";

import {
    actualizarCampoFormulario
} from "../../supabase/formularios";

import FormularioOpcionesEditor from "./FormularioOpcionesEditor";


const FIELD_TYPE_LABELS = {
    texto: "Texto",
    texto_largo: "Texto largo",
    numero: "Número",
    seleccion_unica: "Selección única",
    seleccion_multiple: "Selección múltiple",
    fecha: "Fecha",
    booleano: "Sí / No"
};


function createDraft(campo) {

    return {
        etiqueta: campo.etiqueta || "",
        requerido: Boolean(campo.requerido),
        permite_observaciones: Boolean(
            campo.permite_observaciones
        ),
        activo: Boolean(campo.activo)
    };

}


function FormularioCampoEditor({
    campo,
    editable,
    onUpdated
}) {

    const [
        editing,
        setEditing
    ] = useState(false);

    const [
        draft,
        setDraft
    ] = useState(() => createDraft(campo));

    const [
        saving,
        setSaving
    ] = useState(false);

    const [
        error,
        setError
    ] = useState("");

    const isSelectionField = [
        "seleccion_unica",
        "seleccion_multiple"
    ].includes(campo.tipo_campo);


    useEffect(() => {

        if (!editing) {
            setDraft(createDraft(campo));
        }

    }, [campo, editing]);


    const handleStartEditing = () => {

        setDraft(createDraft(campo));
        setError("");
        setEditing(true);

    };


    const handleCancel = () => {

        setDraft(createDraft(campo));
        setError("");
        setEditing(false);

    };


    const handleChange = (event) => {

        const {
            name,
            value,
            checked,
            type
        } = event.target;

        setDraft((current) => ({
            ...current,

            [name]:
                type === "checkbox"
                    ? checked
                    : value
        }));

    };


    const handleSave = async () => {

        if (!draft.etiqueta.trim()) {

            setError(
                "La etiqueta del campo es obligatoria."
            );

            return;

        }


        try {

            setSaving(true);
            setError("");

            const updated =
                await actualizarCampoFormulario(
                    campo.id,
                    draft
                );

            onUpdated(updated);

            setEditing(false);

        } catch (requestError) {

            console.error(
                "Error actualizando campo:",
                requestError
            );

            setError(
                requestError.message ||
                "No fue posible guardar el campo."
            );

        } finally {

            setSaving(false);

        }

    };

    const handleOptionsUpdated = (
        updatedOptions
    ) => {

        onUpdated({
            ...campo,
            opciones: updatedOptions
        });

    };

    return (

        <div
            className={
                campo.activo
                    ? "configFieldCard"
                    : "configFieldCard inactive"
            }
        >

            <div className="configFieldHeader">

                <div className="configFieldIdentity">

                    {editing ? (

                        <label className="configFieldLabelInput">

                            <span>
                                Etiqueta
                            </span>

                            <input
                                autoFocus
                                name="etiqueta"
                                value={draft.etiqueta}
                                onChange={handleChange}
                                disabled={saving}
                            />

                        </label>

                    ) : (

                        <>

                            <strong>
                                {campo.etiqueta}
                            </strong>

                            <span>
                                {campo.clave}
                            </span>

                        </>

                    )}

                </div>


                <span className="configFieldHeaderActions">

                    <span className="configFieldType">

                        {FIELD_TYPE_LABELS[
                            campo.tipo_campo
                        ] || campo.tipo_campo}

                    </span>

                    {editable && !editing && (

                        <button
                            type="button"
                            className="configFieldEditButton"
                            onClick={handleStartEditing}
                            aria-label={`Editar ${campo.etiqueta}`}
                            title="Editar campo"
                        >
                            <FaEdit />
                        </button>

                    )}

                </span>

            </div>


            {editing ? (

                <>

                    <div className="configFieldChecks">

                        <label>

                            <input
                                type="checkbox"
                                name="requerido"
                                checked={draft.requerido}
                                onChange={handleChange}
                                disabled={saving}
                            />

                            <span>
                                Requerido
                            </span>

                        </label>


                        <label>

                            <input
                                type="checkbox"
                                name="permite_observaciones"
                                checked={
                                    draft.permite_observaciones
                                }
                                onChange={handleChange}
                                disabled={saving}
                            />

                            <span>
                                Permite observaciones
                            </span>

                        </label>


                        <label>

                            <input
                                type="checkbox"
                                name="activo"
                                checked={draft.activo}
                                onChange={handleChange}
                                disabled={saving}
                            />

                            <span>
                                Campo activo
                            </span>

                        </label>

                    </div>


                    {error && (

                        <div
                            className="configFieldError"
                            role="alert"
                        >
                            {error}
                        </div>

                    )}


                    <div className="configFieldEditorActions">

                        <button
                            type="button"
                            className="secondary"
                            onClick={handleCancel}
                            disabled={saving}
                        >
                            <FaTimes />
                            Cancelar
                        </button>

                        <button
                            type="button"
                            className="primary"
                            onClick={handleSave}
                            disabled={saving}
                        >
                            <FaSave />

                            {saving
                                ? "Guardando..."
                                : "Guardar"}
                        </button>

                    </div>

                </>

            ) : (

                <div className="configFieldFlags">

                    {campo.requerido && (
                        <span>
                            Requerido
                        </span>
                    )}

                    {campo.permite_observaciones && (
                        <span>
                            Permite observaciones
                        </span>
                    )}

                    {!campo.activo && (
                        <span className="inactive">
                            Inactivo
                        </span>
                    )}

                </div>

            )}


            {campo.placeholder && (

                <p className="configFieldText">
                    Placeholder: {campo.placeholder}
                </p>

            )}


            {campo.texto_ayuda && (

                <p className="configFieldText">
                    Ayuda: {campo.texto_ayuda}
                </p>

            )}


            {isSelectionField && (

                <FormularioOpcionesEditor
                    campoId={campo.id}
                    campoLabel={campo.etiqueta}
                    opciones={campo.opciones || []}
                    editable={editable && !editing}
                    onUpdated={handleOptionsUpdated}
                />

            )}

        </div>

    );

}

export default FormularioCampoEditor;