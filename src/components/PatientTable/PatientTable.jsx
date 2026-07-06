import "./PatientTable.css";
import { useState, useEffect} from "react";    
function PatientTable({
    patients,
    onSelectPatient,
    selectedPatient
}) {




return(

<div className="tableCard">

<h3>

Lista de Pacientes

</h3>

<table>

<thead>

<tr>

<th>Nombre</th>

<th>Edad</th>

<th>Teléfono</th>

<th>Última Consulta</th>

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

            <td>{patient.ultima_consulta}</td>

            <td>
            <span
                className={`status ${
                    patient.estado ? "statusActive" : "statusInactive"
                }`}
            >
                {patient.estado ? "Activo" : "Inactivo"}
            </span>

            </td>

            <td>⋮</td>

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