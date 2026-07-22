import "./PendingTreatments.css";
import { useState, useRef, useEffect } from "react";

function PendingTreatments({ pendingTreatments }) {
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

        <div className="pendingTreatments">

            <h3>Tratamientos pendientes</h3>
                {pendingTreatments.map((item) => (
                    <div
                        key={item.id}
                        className="treatmentCard"
                    >

                        <h4>

                            🦷 Diente


                        </h4>

                        <p>

                            {item.teeth.join(", ")}

                        </p>
                        <h4>

                            🩺 Tratamiento

                        </h4>

                        <p>

                            {item.treatment}

                        </p>
                        <h4>

                            🧱 Material

                        </h4>

                        <p>

                            {item.material || "-"}

                        </p>
                        <h4>

                            📝 Observaciones

                        </h4>

                        <p>

                            {item.observations || "-"}

                        </p>
                    </div>

                ))}
        </div>

    );

}

export default PendingTreatments;