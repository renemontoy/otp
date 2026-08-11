function ToothNumber({

    number,

    x,

    y,

    onClick

}) {

    function handleClick(
        event
    ) {

        event.stopPropagation();

        onClick?.(
            number
        );

    }


    function handleKeyDown(
        event
    ) {

        if (
            event.key !== "Enter" &&
            event.key !== " "
        ) {

            return;

        }


        event.preventDefault();

        onClick?.(
            number
        );

    }


    return (

        <text

            x={
                x
            }

            y={
                y
            }

            textAnchor="middle"

            role="button"

            tabIndex={
                onClick
                    ? 0
                    : undefined
            }

            onClick={
                handleClick
            }

            onKeyDown={
                handleKeyDown
            }

            style={{

                cursor:
                    onClick
                        ? "pointer"
                        : "default",

                userSelect:
                    "none"

            }}

        >

            {number}

        </text>

    );

}


export default ToothNumber;