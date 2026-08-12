import "./FormularioDinamicoPreview.css";

import {
    useEffect,
    useState
} from "react";


function sortByOrder(items = []) {

    return [...items].sort(
        (first, second) =>
            (first.orden || 0) -
            (second.orden || 0)
    );

}


function CampoDinamico({
    campo,
    respuesta,
    onChange
}) {

    const valor =
        respuesta?.valor ??
        (
            campo.tipo_campo ===
            "seleccion_multiple"
                ? []
                : ""
        );

    const observaciones =
        respuesta?.observaciones || "";


    const updateRespuesta = (changes) => {

        onChange(
            campo.id,
            {
                valor,
                observaciones,
                ...changes
            }
        );

    };


    const opciones = sortByOrder(
        campo.opciones || []
    ).filter(
        (opcion) => opcion.activo !== false
    );


    const toggleMultipleOption = (
        optionValue
    ) => {

        const currentValues =
            Array.isArray(valor)
                ? valor
                : [];

        const updatedValues =
            currentValues.includes(optionValue)
                ? currentValues.filter(
                    (item) =>
                        item !== optionValue
                )
                : [
                    ...currentValues,
                    optionValue
                ];

        updateRespuesta({
            valor: updatedValues
        });

    };


    const renderControl = () => {

        switch (campo.tipo_campo) {

            case "texto":

                return (
                    <input
                        type="text"
                        value={valor}
                        placeholder={
                            campo.placeholder || ""
                        }
                        onChange={(event) =>
                            updateRespuesta({
                                valor:
                                    event.target.value
                            })
                        }
                    />
                );


            case "texto_largo":

                return (
                    <textarea
                        rows="3"
                        value={valor}
                        placeholder={
                            campo.placeholder || ""
                        }
                        onChange={(event) =>
                            updateRespuesta({
                                valor:
                                    event.target.value
                            })
                        }
                    />
                );


            case "numero":

                return (
                    <input
                        type="number"
                        value={valor}
                        placeholder={
                            campo.placeholder || ""
                        }
                        onChange={(event) =>
                            updateRespuesta({
                                valor:
                                    event.target.value
                            })
                        }
                    />
                );


            case "fecha":

                return (
                    <input
                        type="date"
                        value={valor}
                        onChange={(event) =>
                            updateRespuesta({
                                valor:
                                    event.target.value
                            })
                        }
                    />
                );


            case "seleccion_unica":

                return (

                    <div className="dynamicOptions">

                        {opciones.map((opcion) => (

                            <label key={opcion.id}>

                                <input
                                    type="radio"
                                    name={`campo-${campo.id}`}
                                    value={opcion.valor}
                                    checked={
                                        valor ===
                                        opcion.valor
                                    }
                                    onChange={() =>
                                        updateRespuesta({
                                            valor:
                                                opcion.valor
                                        })
                                    }
                                />

                                <span>
                                    {opcion.etiqueta}
                                </span>

                            </label>

                        ))}

                    </div>

                );


            case "seleccion_multiple":

                return (

                    <div className="dynamicOptions">

                        {opciones.map((opcion) => (

                            <label key={opcion.id}>

                                <input
                                    type="checkbox"
                                    checked={
                                        Array.isArray(valor) &&
                                        valor.includes(
                                            opcion.valor
                                        )
                                    }
                                    onChange={() =>
                                        toggleMultipleOption(
                                            opcion.valor
                                        )
                                    }
                                />

                                <span>
                                    {opcion.etiqueta}
                                </span>

                            </label>

                        ))}

                    </div>

                );


            case "booleano":

                return (

                    <div className="dynamicOptions">

                        <label>

                            <input
                                type="radio"
                                name={`campo-${campo.id}`}
                                checked={valor === true}
                                onChange={() =>
                                    updateRespuesta({
                                        valor: true
                                    })
                                }
                            />

                            <span>Sí</span>

                        </label>


                        <label>

                            <input
                                type="radio"
                                name={`campo-${campo.id}`}
                                checked={valor === false}
                                onChange={() =>
                                    updateRespuesta({
                                        valor: false
                                    })
                                }
                            />

                            <span>No</span>

                        </label>

                    </div>

                );


            default:

                return (

                    <div className="dynamicUnsupported">
                        Tipo de campo no compatible:
                        {" "}
                        {campo.tipo_campo}
                    </div>

                );

        }

    };


    return (

        <div className="dynamicField">

            <label className="dynamicFieldLabel">

                {campo.etiqueta}

                {campo.requerido && (
                    <span aria-label="Requerido">
                        *
                    </span>
                )}

            </label>


            {campo.texto_ayuda && (

                <p className="dynamicFieldHelp">
                    {campo.texto_ayuda}
                </p>

            )}


            {renderControl()}


            {campo.permite_observaciones && (

                <label className="dynamicObservations">

                    <span>Observaciones</span>

                    <textarea
                        rows="2"
                        value={observaciones}
                        placeholder={
                            `Observaciones sobre ${campo.etiqueta}`
                        }
                        onChange={(event) =>
                            updateRespuesta({
                                observaciones:
                                    event.target.value
                            })
                        }
                    />

                </label>

            )}

        </div>

    );

}


function FormularioDinamicoPreview({
    formulario
}) {

    const [
        respuestas,
        setRespuestas
    ] = useState({});


    useEffect(() => {

        setRespuestas({});

    }, [formulario.id]);


    const handleChange = (
        campoId,
        respuesta
    ) => {

        setRespuestas((current) => ({
            ...current,
            [campoId]: respuesta
        }));

    };


    const handleReset = () => {
        setRespuestas({});
    };


    const secciones = sortByOrder(
        formulario.secciones || []
    ).filter(
        (seccion) => seccion.activo !== false
    );


    return (

        <div className="dynamicPreview">

            <div className="dynamicPreviewHeader">

                <div>

                    <span>
                        Vista previa
                    </span>

                    <h2>
                        {formulario.nombre}
                    </h2>

                    <p>
                        Versión {formulario.version}
                    </p>

                </div>


                <button
                    type="button"
                    onClick={handleReset}
                >
                    Limpiar respuestas
                </button>

            </div>


            <div className="dynamicPreviewBody">

                {secciones.map((seccion) => {

                    const grupos = sortByOrder(
                        seccion.grupos || []
                    ).filter(
                        (grupo) =>
                            grupo.activo !== false
                    );

                    return (

                        <section
                            key={seccion.id}
                            className="dynamicSection"
                        >

                            <div className="dynamicSectionHeader">

                                <span>
                                    Sección
                                </span>

                                <h3>
                                    {seccion.nombre}
                                </h3>

                                {seccion.descripcion && (
                                    <p>
                                        {seccion.descripcion}
                                    </p>
                                )}

                            </div>


                            {grupos.map((grupo) => {

                                const campos =
                                    sortByOrder(
                                        grupo.campos || []
                                    ).filter(
                                        (campo) =>
                                            campo.activo !==
                                            false
                                    );

                                if (campos.length === 0) {
                                    return null;
                                }


                                return (

                                    <div
                                        key={grupo.id}
                                        className="dynamicGroup"
                                    >

                                        <h4>
                                            {grupo.nombre}
                                        </h4>

                                        {grupo.descripcion && (
                                            <p>
                                                {
                                                    grupo.descripcion
                                                }
                                            </p>
                                        )}


                                        <div className="dynamicFields">

                                            {campos.map(
                                                (campo) => (

                                                    <CampoDinamico
                                                        key={
                                                            campo.id
                                                        }
                                                        campo={
                                                            campo
                                                        }
                                                        respuesta={
                                                            respuestas[
                                                                campo.id
                                                            ]
                                                        }
                                                        onChange={
                                                            handleChange
                                                        }
                                                    />

                                                )
                                            )}

                                        </div>

                                    </div>

                                );

                            })}

                        </section>

                    );

                })}

            </div>

        </div>

    );

}

export default FormularioDinamicoPreview;