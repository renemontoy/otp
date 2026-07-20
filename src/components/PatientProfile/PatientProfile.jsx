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

                <p><strong>Fecha Nac:</strong> {patient.fecha_nacimiento}</p>

                <p><strong>Domicilio:</strong> {patient.domicilio}</p>

            </div>

            <div className="profileSection">

                <h3>Historial Médico</h3>

                <p><strong>Antecedentes Padre:</strong> {patient.antecedentes_padre || "Ninguno"}</p>

                <p><strong>Antecedentes Madre:</strong> {patient.antecedentes_madre || "Ninguno"}</p>

                <p><strong>Antecedentes Hermanos:</strong> {patient.antecedentes_hermanos || "Ninguno"}</p>

                <p><strong>Antecedentes Personales:</strong> {patient.antecedentes_personales || "Ninguno"}</p>

            </div>

        </div>
    );
}

export default PatientProfile;