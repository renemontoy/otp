import FaceSector from "./FaceSector";
import CenterFace from "./CenterFace";
import ToothOutline from "./ToothOutline";
import InitialConditionOverlay from "./InitialConditionOverlay";

import {
    CLINICAL_TOOTH_GEOMETRY,
    FACE_SECTOR_PATHS
} from "./geometry";

import {
    getFaceColor
} from "../../utils/getFaceColor";


const FACE_ORDER = [
    "top",
    "right",
    "bottom",
    "left"
];


const FACE_LABELS = {
    top: "Cara superior",
    right: "Cara derecha",
    bottom: "Cara inferior",
    left: "Cara izquierda",
    center: "Cara central"
};


const DEFAULT_FACE = {
    selected: false,
    status: "healthy",
    treatment: null
};


function ClinicalTooth({

    tooth,

    onFaceClick,

    onToothClick,

    /*
        Tooltip original del
        plan de tratamiento.
    */
    onFaceHover,

    onFaceLeave,

    /*
        Tooltip nuevo del
        estado inicial.
    */
    onInitialFaceHover,

    onInitialFaceLeave,

    selectionScope = "cara",

    selectedFaceIds = null,

    toothSelected = false,

    faceFillOverrides = {},

    initialFindings = [],

    disabled = false

}) {

    if (!tooth) {
        return null;
    }


    const {
        centerX,
        centerY,
        outerRadius,
        innerRadius
    } = CLINICAL_TOOTH_GEOMETRY;


    /*
        Obtiene una cara del diente.
    */
    function getFace(
        faceId
    ) {

        return (
            tooth.faces?.[faceId] ??
            DEFAULT_FACE
        );

    }


    /*
        Determina si una cara debe
        aparecer seleccionada.
    */
    function isFaceSelected(
        faceId,
        face
    ) {

        /*
            Estado inicial:
            selección de pieza completa.
        */
        if (
            selectionScope === "pieza" &&
            toothSelected
        ) {

            return true;

        }


        /*
            Estado inicial:
            selección individual de caras.
        */
        if (
            Array.isArray(
                selectedFaceIds
            )
        ) {

            return selectedFaceIds.includes(
                faceId
            );

        }


        /*
            Plan de tratamiento:
            comportamiento original.
        */
        return Boolean(
            face.selected
        );

    }


    /*
        ==================================================
        CLICK
        ==================================================

        FaceSector y CenterFace ya envían
        su faceId al callback.

        Por eso NO debemos envolver aquí
        el evento con () => ...
    */
    function handleFaceClick(
        faceId
    ) {

        if (disabled) {
            return;
        }


        /*
            Condición aplicada a
            pieza completa.
        */
        if (
            selectionScope === "pieza"
        ) {

            onToothClick?.(
                tooth.number
            );

            return;

        }


        /*
            Condición aplicada
            por cara.
        */
        if (
            selectionScope === "cara"
        ) {

            onFaceClick?.(
                tooth.number,
                faceId
            );

        }

    }

    function handleCenterClick() {

        if (disabled) {
            return;
        }


        /*
            Selección de pieza completa
        */
        if (
            selectionScope === "pieza"
        ) {

            onToothClick?.(
                tooth.number
            );

            return;

        }


        /*
            Selección por cara
        */
        if (
            selectionScope === "cara"
        ) {

            onFaceClick?.(
                tooth.number,
                "center"
            );

        }

    }

    function handleCenterHover(
        event
    ) {

        const face =
            getFace(
                "center"
            );


        /*
            Tooltip del plan
            de tratamiento
        */
        onFaceHover?.({

            event,

            toothNumber:
                tooth.number,

            faceId:
                "center",

            face

        });


        /*
            Tooltip del
            estado inicial
        */
        onInitialFaceHover?.(

            tooth.number,

            "center",

            initialFindings,

            event

        );

    }

    function handleCenterLeave() {

        onFaceLeave?.();

        onInitialFaceLeave?.();

    }

    /*
        ==================================================
        HOVER
        ==================================================

        FaceSector / CenterFace llaman:

        onHover(event, id)

        Debemos conservar ese contrato.
    */
    function handleFaceHover(
        event,
        faceId
    ) {

        const face =
            getFace(
                faceId
            );


        /*
            TOOLTIP ORIGINAL
            PLAN DE TRATAMIENTO

            IMPORTANTE:

            El Odontogram original espera
            un solo objeto.
        */
        onFaceHover?.({

            event,

            toothNumber:
                tooth.number,

            faceId,

            face

        });


        /*
            TOOLTIP NUEVO
            ESTADO INICIAL

            Este callback solamente existirá
            cuando estemos en el modo
            Estado inicial.
        */
        onInitialFaceHover?.(

            tooth.number,

            faceId,

            initialFindings,

            event

        );

    }


    /*
        Cierra cualquiera de los
        dos tooltips.
    */
    function handleFaceLeave() {

        onFaceLeave?.();

        onInitialFaceLeave?.();

    }


    /*
        Texto accesible.
    */
    function getAriaLabel(
        faceId,
        face
    ) {

        const baseLabel =
            `${FACE_LABELS[faceId]} de la pieza ${tooth.number}`;


        if (!face.treatment) {

            return baseLabel;

        }


        return (
            `${baseLabel}, ` +
            `${face.treatment.name}, ` +
            `estado ${face.status}`
        );

    }


    return (

        <g

            className="clinicalTooth"

            aria-label={
                `Pieza dental ${tooth.number}`
            }

        >

            {/*
                =========================================
                CUATRO CARAS EXTERNAS
                =========================================
            */}

            {FACE_ORDER.map(
                (faceId) => {

                    const face =
                        getFace(
                            faceId
                        );


                    const selected =
                        isFaceSelected(
                            faceId,
                            face
                        );


                    /*
                        Esta copia solamente afecta
                        la representación visual.
                    */
                    const visualFace = {

                        ...face,

                        selected

                    };


                    const fill =

                        selected

                            ? getFaceColor(
                                visualFace
                            )

                            : (
                                faceFillOverrides[
                                    faceId
                                ] ||
                                getFaceColor(
                                    visualFace
                                )
                            );


                    return (

                        <FaceSector

                            key={
                                faceId
                            }

                            id={
                                faceId
                            }

                            path={
                                FACE_SECTOR_PATHS[
                                    faceId
                                ]
                            }

                            fill={
                                fill
                            }

                            selected={
                                selected
                            }

                            disabled={
                                disabled
                            }

                            ariaLabel={
                                getAriaLabel(
                                    faceId,
                                    face
                                )
                            }


                            /*
                                IMPORTANTE:

                                FaceSector ya envía
                                faceId.
                            */
                            onClick={
                                handleFaceClick
                            }


                            /*
                                FaceSector ya envía:

                                event,
                                faceId
                            */
                            onHover={
                                handleFaceHover
                            }


                            onLeave={
                                handleFaceLeave
                            }

                        />

                    );

                }
            )}


            {/*
                =========================================
                CARA CENTRAL
                =========================================
            */}

            {(() => {

                const face =
                    getFace(
                        "center"
                    );


                const selected =
                    isFaceSelected(
                        "center",
                        face
                    );


                const visualFace = {
                    ...face,
                    selected
                };


                const fill =

                    selected

                        ? getFaceColor(
                            visualFace
                        )

                        : (
                            faceFillOverrides.center ||
                            getFaceColor(
                                visualFace
                            )
                        );


                return (

                    <CenterFace

                        id="center"

                        centerX={
                            centerX
                        }

                        centerY={
                            centerY
                        }

                        radius={
                            innerRadius
                        }

                        fill={
                            fill
                        }

                        selected={
                            selected
                        }

                        disabled={
                            disabled
                        }

                        ariaLabel={
                            getAriaLabel(
                                "center",
                                face
                            )
                        }

                        onClick={
                            handleCenterClick
                        }

                        onHover={
                            handleCenterHover
                        }

                        onLeave={
                            handleCenterLeave
                        }

                    />

                );

            })()}

            {/*
                =========================================
                SÍMBOLOS DEL ESTADO INICIAL

                M1
                M2
                M3
                E
                PF
                PR
                X
                etc.
                =========================================
            */}

            <InitialConditionOverlay

                findings={
                    initialFindings
                }

                radius={
                    outerRadius
                }

            />


            {/*
                =========================================
                CONTORNO DEL DIENTE
                =========================================
            */}

            <ToothOutline

                centerX={
                    centerX
                }

                centerY={
                    centerY
                }

                radius={
                    outerRadius
                }

                selected={
                    toothSelected
                }

            />

        </g>

    );

}


export default ClinicalTooth;