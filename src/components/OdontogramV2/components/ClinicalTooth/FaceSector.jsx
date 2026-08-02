function FaceSector({
    id,
    path,
    fill,
    selected,
    disabled = false,
    ariaLabel,
    onClick
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

    return (
        <path
            d={path}
            fill={fill}
            stroke={selected ? "#2563EB" : "#64748B"}
            strokeWidth={selected ? 2.2 : 1.2}
            vectorEffect="non-scaling-stroke"
            role="button"
            tabIndex={disabled ? -1 : 0}
            aria-label={ariaLabel}
            aria-pressed={selected}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            style={{
                cursor: disabled ? "default" : "pointer",
                transition: "fill 160ms ease, stroke 160ms ease",
                outline: "none"
            }}
        />
    );
}

export default FaceSector;