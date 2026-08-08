import {
    useEffect,
    useRef,
    useState
} from "react";

import "./ActionMenu.css";

function ActionMenu({
    isActive,
    onEdit,
    onToggleStatus
}) {

    const [open, setOpen] =
        useState(false);

    const menuRef = useRef(null);

    useEffect(() => {

        function handleClickOutside(event) {

            if (
                menuRef.current &&
                !menuRef.current.contains(
                    event.target
                )
            ) {

                setOpen(false);

            }

        }

        document.addEventListener(
            "mousedown",
            handleClickOutside
        );

        return () => {

            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );

        };

    }, []);

    function handleAction(action) {

        setOpen(false);

        action?.();

    }

    return (

        <div
            className="actionMenu"
            ref={menuRef}
        >

            <button
                type="button"
                className="menuButton"
                aria-label="Abrir acciones del paciente"
                aria-expanded={open}
                onClick={() =>
                    setOpen((previous) => !previous)
                }
            >

                ⋮

            </button>

            {open && (

                <div className="menuDropdown">

                    <button
                        type="button"
                        onClick={() =>
                            handleAction(onEdit)
                        }
                    >

                        Datos personales

                    </button>

                    <button
                        type="button"
                        className={
                            isActive
                                ? "deactivateAction"
                                : "activateAction"
                        }
                        onClick={() =>
                            handleAction(onToggleStatus)
                        }
                    >
                        {isActive
                            ? "Desactivar"
                            : "Activar"}
                    </button>

                </div>

            )}

        </div>

    );

}

export default ActionMenu;