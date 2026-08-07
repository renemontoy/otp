import { createPortal } from "react-dom";

import "./InitialFindingTooltip.css";


const FACE_LABELS = {
    top: "Superior",
    right: "Derecha",
    bottom: "Inferior",
    left: "Izquierda",
    center: "Central"
};


function InitialFindingTooltip({
    tooltip
}) {

    if (
        !tooltip ||
        !tooltip.findings?.length
    ) {

        return null;

    }


    const {
        toothNumber,
        faceId,
        findings,
        x,
        y
    } = tooltip;


    const OFFSET = 14;

    const TOOLTIP_WIDTH = 240;
    const TOOLTIP_HEIGHT = 180;


    let left =
        x + OFFSET;

    let top =
        y + OFFSET;


    /*
        Evitamos que el tooltip salga
        de la pantalla por la derecha.
    */
    if (
        left + TOOLTIP_WIDTH >
        window.innerWidth
    ) {

        left =
            x -
            TOOLTIP_WIDTH -
            OFFSET;

    }


    /*
        Lo mismo en la parte inferior.
    */
    if (
        top + TOOLTIP_HEIGHT >
        window.innerHeight
    ) {

        top =
            y -
            TOOLTIP_HEIGHT -
            OFFSET;

    }


    return createPortal(

        <div
            className="initialFindingTooltip"
            style={{
                left,
                top
            }}
        >

            <div className="initialFindingTooltipHeader">

                <strong>
                    Pieza {toothNumber}
                </strong>

                {faceId && (

                    <span>
                        {FACE_LABELS[faceId] || faceId}
                    </span>

                )}

            </div>


            <div className="initialFindingTooltipContent">

                {findings.map(
                    (finding) => (

                        <div
                            key={finding.id}
                            className="initialFindingTooltipItem"
                        >

                            <div className="initialFindingTooltipCondition">

                                <span
                                    className="initialFindingTooltipColor"
                                    style={{
                                        backgroundColor:
                                            finding.condition?.color ||
                                            "#94a3b8"
                                    }}
                                />

                                <span>
                                    {finding.condition?.name}
                                </span>

                            </div>


                            {finding.faceId && (

                                <div className="initialFindingTooltipFace">

                                    Cara:{" "}

                                    {FACE_LABELS[
                                        finding.faceId
                                    ] ||
                                        finding.faceId}

                                </div>

                            )}


                            {finding.observations && (

                                <div className="initialFindingTooltipObservations">

                                    {finding.observations}

                                </div>

                            )}

                        </div>

                    )
                )}

            </div>

        </div>,

        document.body

    );

}


export default InitialFindingTooltip;