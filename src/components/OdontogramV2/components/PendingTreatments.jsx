import "./PendingTreatments.css";


function PendingTreatments({

    pendingTreatments,

    onDelete,

    onEdit

}) {

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
                        <button

                            className="deleteButton"

                            onClick={() => onDelete(item.id)}

                        >

                            Eliminar

                        </button>

                        <button

                            className="editButton"

                            onClick={() => onEdit(item)}

                        >

                            Editar

                        </button>
                    </div>

                ))}
        </div>

    );

}

export default PendingTreatments;