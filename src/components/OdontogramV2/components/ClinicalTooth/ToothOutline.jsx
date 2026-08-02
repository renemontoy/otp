function ToothOutline({
    centerX,
    centerY,
    radius
}) {
    return (
        <circle
            cx={centerX}
            cy={centerY}
            r={radius}
            fill="none"
            stroke="#334155"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
            pointerEvents="none"
        />
    );
}

export default ToothOutline;