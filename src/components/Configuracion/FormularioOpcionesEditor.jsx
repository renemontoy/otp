import "./FormularioOpcionesEditor.css";

import {
    useEffect,
    useState
} from "react";

import {
    FaArrowDown,
    FaArrowUp,
    FaEdit,
    FaPlus,
    FaSave,
    FaTimes,
    FaTrash
} from "react-icons/fa";

import {
    guardarOpcionesCampo
} from "../../supabase/formularios";


let newOptionCounter = 0;


function createClientKey() {

    newOptionCounter += 1;

    return `new-option-${Date.now()}-${newOptionCounter}`;

}


function createDraft(opciones) {

    return [...(opciones || [])]
        .sort(
            (first, second) =>
                first.orden - second.orden
        )
        .map((opcion) => ({
            ...opcion,

            clientKey:
                opcion.id
                    ? `option-${opcion.id}`
                    : createClientKey()
        }));

}


function FormularioOpcionesEditor({
    campoId,
    campoLabel,
    opciones,
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
    ] = useState(
        () => createDraft(opciones)
    );

    const [
        saving,
        setSaving
    ] = useState(false);

    const [
        error,
        setError
    ] = useState("");


    useEffect(() => {

        if (!editing) {
            setDraft(createDraft(opciones));
        }

    }, [opciones, editing]);


    const handleStartEditing = () => {

        setDraft(createDraft(opciones));
        setError("");
        setEditing(true);

    };


    const handleCancel = () => {

        setDraft(createDraft(opciones));
        setError("");
        setEditing(false);

    };


    const handleAdd = () => {

        setDraft((current) => ([
            ...current,

            {
                id: null,
                etiqueta: "",
                activo: true,
                clientKey: createClientKey()
            }
        ]));

        setError("");

    };


    const handleChange = (
        index,
        property,
        value
    ) => {

        setDraft((current) =>
            current.map(
                (opcion, optionIndex) =>
                    optionIndex === index
                        ? {
                            ...opcion,
                            [property]: value
                        }
                        : opcion
            )
        );

    };


    const handleMove = (
        index,
        direction
    ) => {

        const targetIndex =
            index + direction;


        if (
            targetIndex < 0 ||
            targetIndex >= draft.length
        ) {
            return;
        }


        setDraft((current) => {

            const updated = [...current];

            [
                updated[index],
                updated[targetIndex]
            ] = [
                updated[targetIndex],
                updated[index]
            ];

            return updated;

        });

    };


    const handleRemoveNew = (index) => {

        setDraft((current) =>
            current.filter(
                (_, optionIndex) =>
                    optionIndex !== index
            )
        );

    };


    const handleSave = async () => {

        const etiquetas =
            draft.map(
                (opcion) =>
                    opcion.etiqueta.trim()
            );


        if (draft.length === 0) {

            setError(
                "Agrega por lo menos una opción."
            );

            return;

        }


        if (
            etiquetas.some(
                (etiqueta) => !etiqueta
            )
        ) {

            setError(
                "Todas las opciones deben tener un nombre."
            );

            return;

        }


        const normalizedLabels =
            etiquetas.map(
                (etiqueta) =>
                    etiqueta.toLocaleLowerCase(
                        "es-MX"
                    )
            );


        if (
            new Set(normalizedLabels).size !==
            normalizedLabels.length
        ) {

            setError(
                "No puede haber opciones con el mismo nombre."
            );

            return;

        }


        if (
            !draft.some(
                (opcion) => opcion.activo
            )
        ) {

            setError(
                "Debe existir por lo menos una opción activa."
            );

            return;

        }


        try {

            setSaving(true);
            setError("");

            const updatedOptions =
                await guardarOpcionesCampo(
                    campoId,
                    draft
                );

            onUpdated(updatedOptions);

            setEditing(false);

        } catch (requestError) {

            console.error(
                "Error guardando opciones:",
                requestError
            );

            setError(
                requestError.message ||
                "No fue posible guardar las opciones."
            );

        } finally {

            setSaving(false);

        }

    };


    if (!editing) {

        return (

            <div className="configOptions">

                <div className="configOptionsHeader">

                    <span>
                        Opciones
                    </span>

                    {editable && (

                        <button
                            type="button"
                            className="configOptionsEdit"
                            onClick={handleStartEditing}
                            title="Editar opciones"
                            aria-label={
                                `Editar opciones de ${campoLabel}`
                            }
                        >
                            <FaEdit />

                            Editar opciones
                        </button>

                    )}

                </div>


                <div className="configOptionsList">

                    {opciones.length > 0 ? (

                        opciones
                            .slice()
                            .sort(
                                (first, second) =>
                                    first.orden -
                                    second.orden
                            )
                            .map((opcion) => (

                                <span
                                    key={opcion.id}
                                    className={
                                        opcion.activo
                                            ? ""
                                            : "inactive"
                                    }
                                >
                                    {opcion.etiqueta}
                                </span>

                            ))

                    ) : (

                        <em>
                            Sin opciones configuradas
                        </em>

                    )}

                </div>

            </div>

        );

    }


    return (

        <div className="configOptions editor">

            <div className="configOptionsEditorHeader">

                <strong>
                    Editar opciones
                </strong>

                <span>
                    Usa las flechas para cambiar el orden.
                </span>

            </div>


            <div className="configOptionsRows">

                {draft.map(
                    (opcion, index) => (

                        <div
                            key={opcion.clientKey}
                            className={
                                opcion.activo
                                    ? "configOptionRow"
                                    : "configOptionRow inactive"
                            }
                        >

                            <span className="configOptionOrder">
                                {index + 1}
                            </span>


                            <input
                                type="text"
                                value={opcion.etiqueta}
                                placeholder="Nombre de la opción"
                                onChange={(event) =>
                                    handleChange(
                                        index,
                                        "etiqueta",
                                        event.target.value
                                    )
                                }
                                disabled={saving}
                            />


                            <label className="configOptionActive">

                                <input
                                    type="checkbox"
                                    checked={opcion.activo}
                                    onChange={(event) =>
                                        handleChange(
                                            index,
                                            "activo",
                                            event.target.checked
                                        )
                                    }
                                    disabled={saving}
                                />

                                Activa

                            </label>


                            <div className="configOptionMove">

                                <button
                                    type="button"
                                    onClick={() =>
                                        handleMove(index, -1)
                                    }
                                    disabled={
                                        saving ||
                                        index === 0
                                    }
                                    title="Subir opción"
                                >
                                    <FaArrowUp />
                                </button>

                                <button
                                    type="button"
                                    onClick={() =>
                                        handleMove(index, 1)
                                    }
                                    disabled={
                                        saving ||
                                        index ===
                                            draft.length - 1
                                    }
                                    title="Bajar opción"
                                >
                                    <FaArrowDown />
                                </button>


                                {!opcion.id && (

                                    <button
                                        type="button"
                                        className="remove"
                                        onClick={() =>
                                            handleRemoveNew(index)
                                        }
                                        disabled={saving}
                                        title="Quitar opción nueva"
                                    >
                                        <FaTrash />
                                    </button>

                                )}

                            </div>

                        </div>

                    )
                )}

            </div>


            <button
                type="button"
                className="configOptionsAdd"
                onClick={handleAdd}
                disabled={saving}
            >
                <FaPlus />
                Agregar opción
            </button>


            {error && (

                <div
                    className="configOptionsError"
                    role="alert"
                >
                    {error}
                </div>

            )}


            <div className="configOptionsActions">

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
                        : "Guardar opciones"}
                </button>

            </div>

        </div>

    );

}

export default FormularioOpcionesEditor;