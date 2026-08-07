import "./ModeSelector.css";

function ModeSelector({
    mode,
    onChange
}) {

    return (

        <div className="odontogramModeSelector">

            <button
                type="button"
                className={
                    mode === "initial"
                        ? "active"
                        : ""
                }
                onClick={() =>
                    onChange("initial")
                }
            >

                Estado inicial

            </button>

            <button
                type="button"
                className={
                    mode === "treatment"
                        ? "active"
                        : ""
                }
                onClick={() =>
                    onChange("treatment")
                }
            >

                Plan de tratamiento

            </button>

        </div>

    );

}

export default ModeSelector;