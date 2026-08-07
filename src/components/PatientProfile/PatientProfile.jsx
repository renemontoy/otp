import "./PatientProfile.css";

import {
    FaUser,
    FaNotesMedical
} from "react-icons/fa";


function getPatientInitials(patient) {

    const firstName =
        patient?.nombre
            ?.trim()
            ?.charAt(0) ?? "";

    const lastName =
        patient?.apellido
            ?.trim()
            ?.charAt(0) ?? "";

    return (
        `${firstName}${lastName}`.toUpperCase() ||
        "P"
    );

}


function formatBirthDate(date) {

    if (!date) {
        return "Sin información";
    }

    const normalizedDate =
        /^\d{4}-\d{2}-\d{2}$/.test(date)
            ? `${date}T00:00:00`
            : date;

    const parsedDate =
        new Date(normalizedDate);

    if (Number.isNaN(parsedDate.getTime())) {
        return date;
    }

    return new Intl.DateTimeFormat(
        "es-MX",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    ).format(parsedDate);

}


function PatientProfile({ patient }) {

    if (!patient) {

        return (

            <div className="patientProfileLoading">

                Cargando paciente...

            </div>

        );

    }


    return (

        <section className="patientProfile">


            {/* HEADER DEL PACIENTE */}

            <div className="patientProfileHeader">

                <div className="patientProfileAvatar">

                    {getPatientInitials(patient)}

                </div>


                <div className="patientProfileIdentity">

                    <h2>

                        {patient.nombre}{" "}
                        {patient.apellido}

                    </h2>

                    <span
                        className={
                            patient.status
                                ? "patientProfileStatus patientProfileStatusActive"
                                : "patientProfileStatus patientProfileStatusInactive"
                        }
                    >

                        {patient.status
                            ? "Activo"
                            : "Inactivo"}

                    </span>

                </div>

            </div>


            {/* DATOS PERSONALES */}

            <div className="patientProfileSection">

                <div className="patientProfileSectionTitle">

                    <span className="patientProfileSectionIcon">

                        <FaUser />

                    </span>

                    <h3>
                        Datos personales
                    </h3>

                </div>


                <div className="patientProfileDetails">

                    <div className="patientProfileRow">

                        <span className="patientProfileLabel">

                            Fecha de nacimiento

                        </span>

                        <span className="patientProfileValue">

                            {formatBirthDate(
                                patient.fecha_nacimiento
                            )}

                        </span>

                    </div>


                    <div className="patientProfileRow">

                        <span className="patientProfileLabel">

                            Domicilio

                        </span>

                        <span className="patientProfileValue">

                            {patient.domicilio ||
                                "Sin información"}

                        </span>

                    </div>

                </div>

            </div>


            {/* HISTORIAL MÉDICO */}

            <div className="patientProfileSection">

                <div className="patientProfileSectionTitle">

                    <span className="patientProfileSectionIcon">

                        <FaNotesMedical />

                    </span>

                    <h3>
                        Historial médico
                    </h3>

                </div>


                <div className="patientProfileDetails">

                    <div className="patientProfileRow">

                        <span className="patientProfileLabel">

                            Antecedentes padre

                        </span>

                        <span className="patientProfileValue">

                            {patient.antecedentes_padre ||
                                "Ninguno"}

                        </span>

                    </div>


                    <div className="patientProfileRow">

                        <span className="patientProfileLabel">

                            Antecedentes madre

                        </span>

                        <span className="patientProfileValue">

                            {patient.antecedentes_madre ||
                                "Ninguno"}

                        </span>

                    </div>


                    <div className="patientProfileRow">

                        <span className="patientProfileLabel">

                            Antecedentes hermanos

                        </span>

                        <span className="patientProfileValue">

                            {patient.antecedentes_hermanos ||
                                "Ninguno"}

                        </span>

                    </div>


                    <div className="patientProfileRow">

                        <span className="patientProfileLabel">

                            Antecedentes personales

                        </span>

                        <span className="patientProfileValue">

                            {patient.antecedentes_personales ||
                                "Ninguno"}

                        </span>

                    </div>

                </div>

            </div>

        </section>

    );

}


export default PatientProfile;