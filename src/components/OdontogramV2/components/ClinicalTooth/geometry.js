const CENTER_X = 0;
const CENTER_Y = 0;

export const CLINICAL_TOOTH_GEOMETRY = {
    centerX: CENTER_X,
    centerY: CENTER_Y,
    outerRadius: 26,
    innerRadius: 10
};

export const CLINICAL_TOOTH_VIEWBOX = "-32 -32 64 64";

function polarToCartesian(
    centerX,
    centerY,
    radius,
    angleInDegrees
) {
    const angleInRadians =
        ((angleInDegrees - 90) * Math.PI) / 180;

    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
    };
}

function createAnnularSectorPath(
    startAngle,
    endAngle,
    outerRadius,
    innerRadius
) {
    const outerStart = polarToCartesian(
        CENTER_X,
        CENTER_Y,
        outerRadius,
        startAngle
    );

    const outerEnd = polarToCartesian(
        CENTER_X,
        CENTER_Y,
        outerRadius,
        endAngle
    );

    const innerEnd = polarToCartesian(
        CENTER_X,
        CENTER_Y,
        innerRadius,
        endAngle
    );

    const innerStart = polarToCartesian(
        CENTER_X,
        CENTER_Y,
        innerRadius,
        startAngle
    );

    const angleDifference = endAngle - startAngle;

    const largeArcFlag = angleDifference > 180 ? 1 : 0;

    return [
        `M ${outerStart.x} ${outerStart.y}`,

        `A ${outerRadius} ${outerRadius}`,
        `0 ${largeArcFlag} 1`,
        `${outerEnd.x} ${outerEnd.y}`,

        `L ${innerEnd.x} ${innerEnd.y}`,

        `A ${innerRadius} ${innerRadius}`,
        `0 ${largeArcFlag} 0`,
        `${innerStart.x} ${innerStart.y}`,

        "Z"
    ].join(" ");
}

const {
    outerRadius,
    innerRadius
} = CLINICAL_TOOTH_GEOMETRY;

export const FACE_SECTOR_PATHS = {
    top: createAnnularSectorPath(
        -45,
        45,
        outerRadius,
        innerRadius
    ),

    right: createAnnularSectorPath(
        45,
        135,
        outerRadius,
        innerRadius
    ),

    bottom: createAnnularSectorPath(
        135,
        225,
        outerRadius,
        innerRadius
    ),

    left: createAnnularSectorPath(
        225,
        315,
        outerRadius,
        innerRadius
    )
};