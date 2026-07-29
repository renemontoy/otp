function ToothFace({

    name,

    points,

    color = "#FFFFFF",

    selected = false,

    onClick

}){

    return(

        <polygon

            points={points}

            fill={color}

            className="tooth-face"

            onClick={onClick}

        />

    );

}

export default ToothFace;