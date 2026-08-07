import ClinicalTooth from
    "./ClinicalTooth/ClinicalTooth";


function ToothGroup({

    tooth,

    x,
    y,

    numberY,

    onFaceClick,

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


            <text

                className="toothNumber"

                x="0"

                y={
                    numberY
                }

                textAnchor="middle"

                dominantBaseline="middle"

            >

                {tooth.number}

            </text>

        </g>

    );

}


export default ToothGroup;