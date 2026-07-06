import "./PatientProfile.css";

function PatientProfile({ patient }) {

    if (!patient) {
                return (
            <div className="patientProfile">
                <p>Cargando paciente...</p>
            </div>
        );
    }
    return (
        <div className="patientProfile">

            <div className="profileHeader">


                <div>

                    <h2>{patient.nombre} {patient.apellido}</h2>

                </div>

            </div>

            <div className="profileSection">

                <h3>Datos Personales</h3>

                <p><strong>F. Nac:</strong> {patient.fecha_nacimiento}</p>

                <p><strong>Dirección:</strong> {patient.direccion}</p>

            </div>

            <div className="profileSection">

                <h3>Historial Médico</h3>

                <p><strong>Alergias:</strong> {patient.alergias || "Ninguno"}</p>

                <p><strong>Enfermedades:</strong> {patient.enfermedades || "Ninguna"}</p>

                <p><strong>Observaciones:</strong> {patient.observaciones || "Ninguna"}</p>
            </div>

        </div>
    );
}

export default PatientProfile;