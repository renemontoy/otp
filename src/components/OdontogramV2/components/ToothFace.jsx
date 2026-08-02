function ToothFace({

    id,

    points,

    fill,

    stroke,

    selected,

    onClick

}) {

    return (

        <polygon

            points={points}

            fill={fill}

            stroke={selected ? "#2563EB" : stroke}

            strokeWidth={selected ? 2.5 : 1}

            style={{

                cursor: "pointer",

                transition: "all .18s ease"

            }}

            onClick={() => onClick(id)}

        />

    );

}

export default ToothFace;