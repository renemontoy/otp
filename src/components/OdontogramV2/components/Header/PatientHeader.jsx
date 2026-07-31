import "./PatientHeader.css";

function PatientHeader({

    patient,

    onCancel

}){

    return(

        <div className="patientHeader">

            <button

                className="backButton"

                onClick={onCancel}

            >

                ← Regresar

            </button>

            <div>

                <h2>

                    {patient?.nombre} {patient?.apellido_paterno}

                </h2>

                <p>

                    Expediente #{patient?.id}

                </p>

            </div>

        </div>

    );

}

export default PatientHeader;