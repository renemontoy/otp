import {
    useMemo,
    useState
} from "react";

import "./Odontogram.css";

import ToothGroup from "./components/ToothGroup";

import {
    createOdontogram
} from "./data/createOdontogram";

import {
    getToothPosition
} from "./utils/getToothPosition";

import {
    useInitialOdontogramContext
} from "./context/InitialOdontogramContext";

import {
    buildInitialToothVisuals
} from "./services/initialVisualMapper";

import InitialFindingTooltip
    from "./components/Tooltip/InitialFindingTooltip";


function InitialOdontogram() {

    const {

        findings,

        selectedCondition,

        selectionScope,

        selectedFaces,

        selectedTeeth,

        toggleFaceSelection,

        toggleToothSelection,

        isFinalized,

        isLoading

    } = useInitialOdontogramContext();


    /*
        Odontograma base vacío.

        Los colores y hallazgos del estado inicial
        se incorporan únicamente a nivel visual.
    */
    const odontogram =
        useMemo(
            () => createOdontogram(),
            []
        );


    /*
        Construye los colores visuales
        correspondientes a los hallazgos.

        Por ejemplo:
        caries -> cara roja
    */
    const toothVisuals =
        useMemo(() => {

            return buildInitialToothVisuals(
                findings
            );

        }, [
            findings
        ]);


    /*
        Estado del tooltip.
    */
    const [
        tooltip,
        setTooltip
    ] = useState(null);


    /*
        Agrupamos todos los hallazgos
        por número de pieza.

        Así evitamos hacer findings.filter()
        para cada uno de los 32 dientes
        en cada render.
    */
    const findingsByTooth =
        useMemo(() => {

            const map = {};


            findings.forEach(
                (finding) => {

                    const toothNumber =
                        String(
                            finding.toothNumber
                        );


                    if (
                        !map[toothNumber]
                    ) {

                        map[toothNumber] = [];

                    }


                    map[
                        toothNumber
                    ].push(
                        finding
                    );

                }
            );


            return map;

        }, [
            findings
        ]);


    /*
        HOVER DEL ESTADO INICIAL

        Al pasar por una cara mostramos:

        - condiciones aplicadas a toda la pieza
        - condiciones específicas de esa cara
    */
    function handleInitialFaceHover(
        toothNumber,
        faceId,
        toothFindings,
        event
    ) {

        if (!event) {
            return;
        }


        const relevantFindings =
            toothFindings.filter(
                (finding) => {

                    /*
                        Hallazgo de pieza completa.

                        Ejemplos:
                        - Movilidad
                        - Ausente
                        - Endodoncia
                        - Prótesis
                    */
                    if (!finding.faceId) {

                        return true;

                    }


                    /*
                        Hallazgo específico
                        de la cara actual.

                        Ejemplo:
                        Caries.
                    */
                    return (
                        finding.faceId ===
                        faceId
                    );

                }
            );


        /*
            Si no existen hallazgos relevantes,
            no mostramos tooltip.
        */
        if (
            relevantFindings.length === 0
        ) {

            setTooltip(null);

            return;

        }


        setTooltip({

            toothNumber:
                String(
                    toothNumber
                ),

            faceId,

            findings:
                relevantFindings,

            x:
                event.clientX,

            y:
                event.clientY

        });

    }


    /*
        Cerramos tooltip
        al salir de la cara.
    */
    function handleInitialFaceLeave() {

        setTooltip(null);

    }


    /*
        Devuelve las caras actualmente
        seleccionadas de una pieza.
    */
    function getSelectedFaceIds(
        toothNumber
    ) {

        return selectedFaces

            .filter(
                (item) =>
                    String(
                        item.toothNumber
                    ) ===
                    String(
                        toothNumber
                    )
            )

            .map(
                (item) =>
                    item.faceId
            );

    }


    /*
        Determina si una pieza completa
        está seleccionada.
    */
    function isToothSelected(
        toothNumber
    ) {

        return selectedTeeth.includes(
            String(
                toothNumber
            )
        );

    }


    if (isLoading) {

        return (

            <div className="odontogramLoading">

                Cargando odontograma inicial...

            </div>

        );

    }


    return (

        <>

            <svg

                className="odontogramSvg"

                viewBox="0 0 1200 400"

                preserveAspectRatio="xMidYMid meet"

                role="img"

                aria-label="Odontograma inicial del paciente"

            >

                {Object.values(
                    odontogram
                ).map(
                    (tooth) => {

                        /*
                            Posición visual
                            de esta pieza.
                        */
                        const {

                            x,

                            y,

                            numberY

                        } = getToothPosition(
                            tooth.number
                        );


                        /*
                            Información visual generada
                            por initialVisualMapper.

                            Principalmente usamos aquí
                            faceColors para pintar caries.
                        */
                        const toothVisual =

                            toothVisuals[
                                String(
                                    tooth.number
                                )
                            ] || {

                                faceColors: {},

                                wholeToothFindings: []

                            };


                        /*
                            AQUÍ ESTABA EL CAMBIO
                            QUE FALTABA.

                            Obtenemos TODOS los hallazgos
                            de esta pieza.

                            No solamente
                            wholeToothFindings.
                        */
                        const toothFindings =

                            findingsByTooth[
                                String(
                                    tooth.number
                                )
                            ] || [];


                        return (

                            <ToothGroup

                                key={
                                    tooth.number
                                }

                                tooth={
                                    tooth
                                }

                                x={
                                    x
                                }

                                y={
                                    y
                                }

                                numberY={
                                    numberY
                                }


                                /*
                                    En borrador:

                                    necesitamos una condición
                                    seleccionada para modificar.

                                    Finalizado:

                                    no permitimos modificar.
                                */
                                disabled={
                                    isFinalized ||
                                    !selectedCondition
                                }


                                selectionScope={
                                    selectionScope ||
                                    "cara"
                                }


                                selectedFaceIds={
                                    getSelectedFaceIds(
                                        tooth.number
                                    )
                                }


                                toothSelected={
                                    isToothSelected(
                                        tooth.number
                                    )
                                }


                                onFaceClick={
                                    toggleFaceSelection
                                }


                                onToothClick={
                                    toggleToothSelection
                                }


                                /*
                                    Colores por cara.

                                    Ejemplo:
                                    caries roja.
                                */
                                faceFillOverrides={
                                    toothVisual.faceColors
                                }


                                /*
                                    IMPORTANTE:

                                    Ahora ClinicalTooth recibe
                                    TODOS los hallazgos de la pieza.

                                    Esto permite al tooltip conocer
                                    tanto condiciones de pieza
                                    como condiciones de cara.
                                */
                                initialFindings={
                                    toothFindings
                                }


                                /*
                                    Eventos del tooltip inicial.
                                */
                                onInitialFaceHover={
                                    handleInitialFaceHover
                                }

                                onInitialFaceLeave={
                                    handleInitialFaceLeave
                                }

                            />

                        );

                    }
                )}

            </svg>


            {/*
                El tooltip se renderiza fuera del SVG.

                InitialFindingTooltip internamente
                utiliza createPortal(document.body).
            */}
            <InitialFindingTooltip
                tooltip={
                    tooltip
                }
            />

        </>

    );

}


export default InitialOdontogram;