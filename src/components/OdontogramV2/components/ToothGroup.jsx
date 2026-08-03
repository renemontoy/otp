import ClinicalTooth from
    "./ClinicalTooth/ClinicalTooth";

function ToothGroup({

    tooth,

    x,

    y,

    numberY,

    onFaceClick,

    onFaceHover,

    onFaceLeave

}) {

    return (

        <g
            className="toothGroup"
            transform={
                `translate(${x}, ${y})`
            }
        >

            <ClinicalTooth
                tooth={tooth}
                onFaceClick={
                    onFaceClick
                }
                onFaceHover={
                    onFaceHover
                }
                onFaceLeave={
                    onFaceLeave
                }
            />

            <text
                className="toothNumber"
                x="0"
                y={numberY}
                textAnchor="middle"
                dominantBaseline="middle"
            >

                {tooth.number}

            </text>

        </g>

    );

}

export default ToothGroup;