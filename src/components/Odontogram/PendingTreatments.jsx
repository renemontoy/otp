import "./PendingTreatments.css";


function PendingTreatments({ pendingTreatments }) {

    return (

        <div className="pendingTreatments">

            <h3>Tratamientos pendientes</h3>
                {pendingTreatments.map((item) => (
                    <div
                        key={item.id}
                        className="treatmentCard"
                    >

                        <h4>

                            🦷 Dientes


                        </h4>

                        <strong>

                            {item.teeth.join(", ")}

                        </strong>
                        <h4>

                            🩺 Tratamiento

                        </h4>

                        <p>

                            {item.treatmentName}

                        </p>
                        <h4>

                            🧱 Material

                        </h4>

                        <p>

                            {item.materialName || "-"}

                        </p>
                        <h4>

                            📝 Observaciones

                        </h4>

                        <p>

                            {item.observations || "-"}

                        </p>
                        <h4>

                            Estado

                        </h4>

                        <p>

                            {item.status}

                        </p>
                    </div>

                ))}
        </div>

    );

}

export default PendingTreatments;