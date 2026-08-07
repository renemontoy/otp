function ToothOutline({

    centerX,

    centerY,

    radius,

    selected = false

}) {

    return (

        <circle

            cx={centerX}

            cy={centerY}

            r={radius}

            fill="none"

            stroke={
                selected
                    ? "#2563EB"
                    : "#334155"
            }

            strokeWidth={
                selected
                    ? 3
                    : 1.4
            }

            vectorEffect="non-scaling-stroke"

            pointerEvents="none"

        />

    );

}


export default ToothOutline;