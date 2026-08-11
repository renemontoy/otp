import ClinicalTooth from
    "./ClinicalTooth/ClinicalTooth";
import ToothNumber from "./ToothNumber";

function ToothGroup({

    tooth,

    x,
    y,

    numberY,

    onFaceClick,

    onToothNumberClick,

    onFaceHover,
    onFaceLeave,

    selectionScope,

    selectedFaceIds,

    toothSelected,

    onToothClick,

    faceFillOverrides,

    initialFindings,

    onInitialFaceHover,
    onInitialFaceLeave,

    disabled

}) {
    return (

        <g
            className="toothGroup"

            transform={
                `translate(${x}, ${y})`
            }
        >

        <ClinicalTooth

            tooth={
                tooth
            }

            onFaceClick={
                onFaceClick
            }

            onFaceHover={
                onFaceHover
            }

            onFaceLeave={
                onFaceLeave
            }

            selectionScope={
                selectionScope
            }

            selectedFaceIds={
                selectedFaceIds
            }

            toothSelected={
                toothSelected
            }

            onToothClick={
                onToothClick
            }

            faceFillOverrides={
                faceFillOverrides
            }

            initialFindings={
                initialFindings
            }

            onInitialFaceHover={
                onInitialFaceHover
            }

            onInitialFaceLeave={
                onInitialFaceLeave
            }

            disabled={
                disabled
            }

        />


        <ToothNumber

            number={
                tooth.number
            }

            x={
                0
            }

            y={
                numberY
            }

            onClick={
                onToothNumberClick
            }

        />
        </g>

    );

}


export default ToothGroup;