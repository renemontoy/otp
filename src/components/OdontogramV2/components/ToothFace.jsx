function ToothFace({

    id,

    points,

    fill,

    stroke,

    selected,

    onClick

}){

    return(

        <polygon

            points={points}

            fill={fill}

            stroke={selected ? "#2563EB" : stroke}

            strokeWidth={selected ? 2 : 1}

            cursor="pointer"

            onClick={(e)=>{

                e.stopPropagation();

                onClick(id);

            }}

        />

    );

}

export default ToothFace;