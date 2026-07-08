import ActionMenu from "../ActionMenu/ActionMenu";
import "./PatientTable.css";
import { useState, useEffect} from "react";    
function PatientTable({
    patients,
    onSelectPatient,
    selectedPatient,
    onCreatePatient,
    onEditPatient
}) {




return(

<div className="tableCard">

<div className="tableHeader">
<h3>Lista de Pacientes</h3>

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

            <td>{patient.direccion}</td>

            <td>
            <span
                className={`status ${
                    patient.estado ? "statusActive" : "statusInactive"
                }`}
            >
                {patient.estado ? "Activo" : "Inactivo"}
            </span>

            </td>
            <td>
            <ActionMenu
                onEdit={() => {

                    onSelectPatient(patient);

                    onEditPatient();

                }}

                onDeactivate={() => {}}
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