import { useState, useRef, useEffect } from "react";
import "./ActionMenu.css";

function ActionMenu({

    onEdit,
    onDeactivate

}) {

    const [open, setOpen] = useState(false);

    const menuRef = useRef(null);

    useEffect(() => {

        function handleClickOutside(e){

            if(menuRef.current && !menuRef.current.contains(e.target)){

                setOpen(false);

            }

        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {

            document.removeEventListener("mousedown", handleClickOutside);

        };

    }, []);

    return (

        <div
            className="actionMenu"
            ref={menuRef}
        >

            <button
                className="menuButton"
                onClick={() => setOpen(!open)}
            >

                ⋮

            </button>

            {open && (

                <div className="menuDropdown">

                    <button onClick={onEdit}>

                        Editar

                    </button>

                    <button onClick={onDeactivate}>

                        Desactivar

                    </button>

                </div>

            )}

        </div>

    );

}

export default ActionMenu;