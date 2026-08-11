import "./Odontogram.css";

import {
    useEffect,
    useRef,
    useState
} from "react";

import ToothGroup from
    "./components/ToothGroup";

import TreatmentTooltip from
    "./components/Tooltip/TreatmentTooltip";

import {
    getToothPosition
} from "./utils/getToothPosition";

import {
    useOdontogramContext
} from "./context/OdontogramContext";

function Odontogram() {

    const {

        odontogram,

        toggleFaceSelection,

        toggleToothSelection

    } = useOdontogramContext();

    const [
        tooltip,
        setTooltip
    ] = useState(null);

    const touchTimerRef =
        useRef(null);

    function clearTouchTimer() {

        if (
            touchTimerRef.current
        ) {

            window.clearTimeout(
                touchTimerRef.current
            );

            touchTimerRef.current =
                null;

        }

    }

    useEffect(() => {

        return () => {

            clearTouchTimer();

        };

    }, []);

    function handleFaceHover({

        event,

        toothNumber,

        faceId,

        face

    }) {

        clearTouchTimer();

        /*
            Solo mostramos información cuando
            la cara tiene un tratamiento.
        */
        if (!face?.treatment) {

            setTooltip(null);

            return;

        }

        const pointerType =
            event.pointerType ||
            "mouse";

        setTooltip({

            x: event.clientX,

            y: event.clientY,

            pointerType,

            toothNumber,

            faceId,

            face

        });

        /*
            En dispositivos táctiles el tooltip
            desaparece automáticamente.
        */
        if (
            pointerType !== "mouse"
        ) {

            touchTimerRef.current =
                window.setTimeout(
                    () => {

                        setTooltip(null);

                    },
                    4000
                );

        }

    }

    function handleFaceLeave() {

        setTooltip((current) => {

            if (
                current?.pointerType ===
                "mouse"
            ) {

                return null;

            }

            return current;

        });

    }

    return (

        <>

            <svg
                className="odontogramSvg"
                viewBox="0 0 1200 400"
                preserveAspectRatio="xMidYMid meet"
                role="img"
                aria-label="Odontograma del paciente"
            >

                {Object.values(
                    odontogram
                ).map((tooth) => {

                    const {

                        x,

                        y,

                        numberY

                    } = getToothPosition(
                        tooth.number
                    );

                    return (

                        <ToothGroup
                            key={
                                tooth.number
                            }
                            tooth={tooth}
                            x={x}
                            y={y}
                            numberY={
                                numberY
                            }
                            onFaceClick={
                                toggleFaceSelection
                            }

                            onToothNumberClick ={
                                toggleToothSelection
                            }

                            onFaceHover={
                                handleFaceHover
                            }
                            onFaceLeave={
                                handleFaceLeave
                            }
                        />

                    );

                })}

            </svg>

            <TreatmentTooltip
                tooltip={tooltip}
            />

        </>

    );

}

export default Odontogram;