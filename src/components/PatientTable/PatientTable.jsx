import ActionMenu from "../ActionMenu/ActionMenu";
import "./PatientTable.css";
import { useState, useEffect} from "react";
import { FaSearch } from "react-icons/fa";
function PatientTable({
    patients,
    onSelectPatient,
    selectedPatient,
    onCreatePatient,
    onEditPatient,
    onOdontogramPatient,
    onExploracionPatient
}) {




return(

<div className="tableCard">

<div className="tableHeader">


<div className="search">

    <FaSearch />

    <input
        type="text"
        placeholder="Buscar paciente"
    />

</div>

<button className="newPatientButton" onClick={onCreatePatient}>

+ Nuevo Paciente
</button>
</div>



<table>

<thead>

<tr>

<th>Nombre</th>

<th>Edad</th>

<th>Teléfono</th>

<th>Dirección</th>

<th>Estado</th>

<th></th>

</tr>

</thead>

<tbody>

    {patients.map((patient) => (

        <tr onClick={() => onSelectPatient(patient)}>

            <td className="patient">

                {patient.nombre} {patient.apellido}

            </td>

            <td>{patient.edad}</td>

            <td>{patient.telefono}</td>

            <td>{patient.domicilio}</td>

            <td>
            <span
                className={`status ${
                    patient.status ? "statusActive" : "statusInactive"
                }`}
            >
                {patient.status ? "Activo" : "Inactivo"}
            </span>

            </td>
            <td>
            <ActionMenu
                onEdit={() => {

                    onSelectPatient(patient);

                    onEditPatient();

                }}

                onDeactivate={() => {}}

                onOdontogram={() => {
                    onOdontogramPatient();
                }}

                onExploracion={() => {
                    onExploracionPatient();
                }}


            />
            </td>
        </tr>

    ))}

</tbody>

</table>

<div className="pagination">

<button>{"<"}</button>

<button className="current">1</button>

<button>{">"}</button>

</div>

</div>

)

}

export default PatientTable;