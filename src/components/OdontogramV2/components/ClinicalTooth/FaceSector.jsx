function FaceSector({

    id,

    path,

    fill,

    selected,

    disabled = false,

    ariaLabel,

    onClick,

    onHover,

    onLeave

}) {

    function handleClick() {

        if (disabled) {

            return;

        }

        onClick?.(id);

    }

    function handleKeyDown(event) {

        if (disabled) {

            return;

        }

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            onClick?.(id);

        }

    }

    function handlePointerEnter(event) {

        if (disabled) {

            return;

        }

        onHover?.(
            event,
            id
        );

    }

    function handlePointerMove(event) {

        if (
            disabled ||
            event.pointerType !== "mouse"
        ) {

            return;

        }

        onHover?.(
            event,
            id
        );

    }

    function handlePointerDown(event) {

        if (
            disabled ||
            event.pointerType === "mouse"
        ) {

            return;

        }

        /*
            En iPad y pantallas táctiles no existe
            hover. Mostramos el tooltip al tocar.
        */
        onHover?.(
            event,
            id
        );

    }

    function handlePointerLeave(event) {

        if (
            event.pointerType === "mouse"
        ) {

            onLeave?.();

        }

    }

    return (

        <path
            d={path}
            fill={fill}
            stroke={
                selected
                    ? "#2563EB"
                    : "#64748B"
            }
            strokeWidth={
                selected
                    ? 2.2
                    : 1.2
            }
            vectorEffect="non-scaling-stroke"
            role="button"
            tabIndex={disabled ? -1 : 0}
            aria-label={ariaLabel}
            aria-pressed={selected}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            onPointerEnter={
                handlePointerEnter
            }
            onPointerMove={
                handlePointerMove
            }
            onPointerDown={
                handlePointerDown
            }
            onPointerLeave={
                handlePointerLeave
            }
            style={{
                cursor:
                    disabled
                        ? "default"
                        : "pointer",

                transition:
                    "fill 160ms ease, stroke 160ms ease",

                outline: "none"
            }}
        />

    );

}

export default FaceSector;