function InitialConditionOverlay({

    findings = [],

    radius = 26

}) {

    if (findings.length === 0) {
        return null;
    }


    function findCondition(code) {

        return findings.find(
            (finding) =>
                finding.condition.code === code
        );

    }


    const healthy =
        findCondition("sano");

    const absent =
        findCondition("ausente");

    const mobility =
        findings.find(
            (finding) =>
                finding.condition.code ===
                    "movilidad_1" ||
                finding.condition.code ===
                    "movilidad_2" ||
                finding.condition.code ===
                    "movilidad_3"
        );

    const endodontics =
        findCondition("endodoncia");

    const fixedProsthesis =
        findCondition("protesis_fija");

    const removableProsthesis =
        findCondition("protesis_removible");

    const other =
        findCondition("otro");


    function getMobilityLabel() {

        if (!mobility) {
            return null;
        }

        if (
            mobility.condition.code ===
            "movilidad_1"
        ) {
            return "M1";
        }

        if (
            mobility.condition.code ===
            "movilidad_2"
        ) {
            return "M2";
        }

        return "M3";

    }


    return (

        <g
            pointerEvents="none"
            aria-hidden="true"
        >

            {/* SANO */}

            {healthy && (

                <circle
                    cx="0"
                    cy="0"
                    r={radius + 3}

                    fill="none"

                    stroke="#16A34A"

                    strokeWidth="2"

                    vectorEffect="non-scaling-stroke"
                />

            )}


            {/* PRÓTESIS FIJA */}

            {fixedProsthesis && (

                <circle
                    cx="0"
                    cy="0"
                    r={radius - 2}

                    fill="none"

                    stroke="#475569"

                    strokeWidth="3"

                    vectorEffect="non-scaling-stroke"
                />

            )}


            {/* PRÓTESIS REMOVIBLE */}

            {removableProsthesis && (

                <circle
                    cx="0"
                    cy="0"
                    r={radius - 5}

                    fill="none"

                    stroke="#475569"

                    strokeWidth="2"

                    strokeDasharray="4 3"

                    vectorEffect="non-scaling-stroke"
                />

            )}


            {/* ENDODONCIA */}

            {endodontics && (

                <>

                    <circle
                        cx="0"
                        cy="0"
                        r="8"

                        fill="#FFFFFF"

                        stroke="#475569"

                        strokeWidth="1.5"

                        vectorEffect="non-scaling-stroke"
                    />

                    <text
                        x="0"
                        y="1"

                        textAnchor="middle"
                        dominantBaseline="middle"

                        fill="#334155"

                        fontSize="10"
                        fontWeight="700"
                    >

                        E

                    </text>

                </>

            )}


            {/* MOVILIDAD */}

            {mobility && (

                <>

                    <rect
                        x="-11"
                        y={-radius - 13}

                        width="22"
                        height="14"

                        rx="5"

                        fill="#FFFFFF"

                        stroke="#64748B"

                        strokeWidth="1"

                        vectorEffect="non-scaling-stroke"
                    />

                    <text
                        x="0"
                        y={-radius - 6}

                        textAnchor="middle"
                        dominantBaseline="middle"

                        fill="#334155"

                        fontSize="8"
                        fontWeight="700"
                    >

                        {getMobilityLabel()}

                    </text>

                </>

            )}


            {/* OTRO */}

            {other && (

                <circle
                    cx={radius - 5}
                    cy={-radius + 5}

                    r="3.5"

                    fill="#475569"
                />

            )}


            {/* AUSENTE */}

            {absent && (

                <>

                    <line
                        x1={-radius + 4}
                        y1={-radius + 4}

                        x2={radius - 4}
                        y2={radius - 4}

                        stroke="#64748B"

                        strokeWidth="3"

                        strokeLinecap="round"

                        vectorEffect="non-scaling-stroke"
                    />

                    <line
                        x1={radius - 4}
                        y1={-radius + 4}

                        x2={-radius + 4}
                        y2={radius - 4}

                        stroke="#64748B"

                        strokeWidth="3"

                        strokeLinecap="round"

                        vectorEffect="non-scaling-stroke"
                    />

                </>

            )}

        </g>

    );

}

export default InitialConditionOverlay;