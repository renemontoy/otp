import ActionMenu from "../ActionMenu/ActionMenu";
import "./PatientTable.css";

import {
    useEffect,
    useMemo,
    useState
} from "react";

import { FaSearch } from "react-icons/fa";

const DEFAULT_PAGE_SIZE = 6;

function normalizeText(value) {

    return String(value ?? "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();

}

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

function PatientTable({

    patients,

    onSelectPatient,

    selectedPatient,

    onCreatePatient,

    onEditPatient,

    onOdontogramPatient,

    onExploracionPatient,

    onTogglePatientStatus

}) {

    const [searchTerm, setSearchTerm] =
        useState("");

    const [statusFilter, setStatusFilter] =
        useState("all");

    const [ageFilter, setAgeFilter] =
        useState("all");

    const [pageSize, setPageSize] =
        useState(DEFAULT_PAGE_SIZE);

    const [currentPage, setCurrentPage] =
        useState(1);

    const filteredPatients = useMemo(() => {

        const normalizedSearch =
            normalizeText(searchTerm);

        return patients.filter((patient) => {

            const fullName = normalizeText(
                `${patient.nombre ?? ""} ${patient.apellido ?? ""}`
            );

            const phone = normalizeText(
                patient.telefono
            );

            const address = normalizeText(
                patient.domicilio
            );

            const age = Number(patient.edad);

            const matchesSearch =
                normalizedSearch === "" ||
                fullName.includes(normalizedSearch) ||
                phone.includes(normalizedSearch) ||
                address.includes(normalizedSearch) ||
                String(patient.edad ?? "").includes(
                    normalizedSearch
                );

            const matchesStatus =
                statusFilter === "all" ||
                (
                    statusFilter === "active" &&
                    patient.status === true
                ) ||
                (
                    statusFilter === "inactive" &&
                    patient.status === false
                );

            const matchesAge =
                ageFilter === "all" ||
                (
                    ageFilter === "minor" &&
                    age < 18
                ) ||
                (
                    ageFilter === "adult" &&
                    age >= 18 &&
                    age < 60
                ) ||
                (
                    ageFilter === "senior" &&
                    age >= 60
                );

            return (
                matchesSearch &&
                matchesStatus &&
                matchesAge
            );

        });

    }, [
        patients,
        searchTerm,
        statusFilter,
        ageFilter
    ]);

    const totalPages = Math.max(
        1,
        Math.ceil(
            filteredPatients.length / pageSize
        )
    );

    useEffect(() => {

        setCurrentPage(1);

    }, [
        searchTerm,
        statusFilter,
        ageFilter,
        pageSize
    ]);

    useEffect(() => {

        if (currentPage > totalPages) {

            setCurrentPage(totalPages);

        }

    }, [
        currentPage,
        totalPages
    ]);

    const firstPatientIndex =
        (currentPage - 1) * pageSize;

    const lastPatientIndex =
        firstPatientIndex + pageSize;

    const visiblePatients =
        filteredPatients.slice(
            firstPatientIndex,
            lastPatientIndex
        );

    const firstVisibleRecord =
        filteredPatients.length === 0
            ? 0
            : firstPatientIndex + 1;

    const lastVisibleRecord =
        Math.min(
            lastPatientIndex,
            filteredPatients.length
        );

    function goToPreviousPage() {

        setCurrentPage((previous) =>
            Math.max(1, previous - 1)
        );

    }

    function goToNextPage() {

        setCurrentPage((previous) =>
            Math.min(totalPages, previous + 1)
        );

    }

    function getVisiblePageNumbers() {

        const startPage = Math.max(
            1,
            currentPage - 2
        );

        const endPage = Math.min(
            totalPages,
            currentPage + 2
        );

        const pages = [];

        for (
            let page = startPage;
            page <= endPage;
            page += 1
        ) {

            pages.push(page);

        }

        return pages;

    }

    return (

<div className="patientTableModule">

    <div className="patientTableToolbar">


            <div className="search">

                <FaSearch />

                <input
                    type="search"
                    placeholder="Buscar por nombre o teléfono"
                    value={searchTerm}
                    onChange={(event) =>
                        setSearchTerm(
                            event.target.value
                        )
                    }
                />

            </div>


           {/*} <select
                className="patientFilter"
                value={statusFilter}
                onChange={(event) =>
                    setStatusFilter(
                        event.target.value
                    )
                }
                aria-label="Filtrar por estado"
            >

                <option value="all">
                    Todos los estados
                </option>

                <option value="active">
                    Activos
                </option>

                <option value="inactive">
                    Inactivos
                </option>

            </select>*/}


           {/* <select
                className="patientFilter"
                value={ageFilter}
                onChange={(event) =>
                    setAgeFilter(
                        event.target.value
                    )
                }
                aria-label="Filtrar por edad"
            >

                <option value="all">
                    Todas las edades
                </option>

                <option value="minor">
                    Menores de 18
                </option>

                <option value="adult">
                    Adultos
                </option>

                <option value="senior">
                    Adultos mayores
                </option>

            </select>*/}

    


        <button
            type="button"
            className="newPatientButton"
            onClick={onCreatePatient}
        >

            + Nuevo paciente

        </button>

    </div>
        <div className="tableCard">
            <div className="patientTableWrapper">

                <table>

                    <thead>

                        <tr>

                            <th>Nombre</th>

                            <th>Edad</th>

                            <th>Teléfono</th>

                            <th>Estado</th>

                            <th aria-label="Acciones" />

                        </tr>

                    </thead>

                    <tbody>

                        {visiblePatients.length === 0 ? (

                            <tr>

                                <td
                                    colSpan="6"
                                    className="emptyPatients"
                                >

                                    No se encontraron pacientes
                                    con los filtros seleccionados.

                                </td>

                            </tr>

                        ) : (

                            visiblePatients.map(
                                (patient) => (

                                    <tr
                                        key={patient.id}
                                        className={
                                            selectedPatient?.id ===
                                            patient.id
                                                ? "selectedPatientRow"
                                                : ""
                                        }
                                        onClick={() =>
                                            onSelectPatient(
                                                patient
                                            )
                                        }
                                    >

                                        <td>

                                            <div className="patientIdentity">

                                                <div className="patientAvatar">

                                                    {getPatientInitials(patient)}

                                                </div>


                                                <div className="patientName">

                                                    {patient.nombre}{" "}
                                                    {patient.apellido}

                                                </div>

                                            </div>

                                        </td>

                                        <td>
                                            {patient.edad ?? "-"}
                                        </td>

                                        <td>
                                            {patient.telefono || "-"}
                                        </td>

                                        <td>

                                            <span
                                                className={
                                                    `status ${
                                                        patient.status
                                                            ? "statusActive"
                                                            : "statusInactive"
                                                    }`
                                                }
                                            >

                                                {patient.status
                                                    ? "Activo"
                                                    : "Inactivo"}

                                            </span>

                                        </td>

                                        <td
                                            className="patientActionsCell"
                                            onClick={(event) =>
                                                event.stopPropagation()
                                            }
                                        >

                                        <ActionMenu
                                            isActive={patient.status}

                                            onEdit={() => {

                                                onSelectPatient(patient);
                                                onEditPatient();

                                            }}

                                            onToggleStatus={() => {

                                                onTogglePatientStatus(patient);

                                            }}

                                            onOdontogram={() => {

                                                onSelectPatient(patient);
                                                onOdontogramPatient();

                                            }}

                                            onExploracion={() => {

                                                onSelectPatient(patient);
                                                onExploracionPatient();

                                            }}
                                        />

                                        </td>

                                    </tr>

                                )
                            )

                        )}

                    </tbody>

                </table>

            </div>

            <div className="paginationFooter">

                <div className="paginationSummary">

                    Mostrando{" "}

                    <strong>
                        {firstVisibleRecord}
                    </strong>

                    {" - "}

                    <strong>
                        {lastVisibleRecord}
                    </strong>

                    {" de "}

                    <strong>
                        {filteredPatients.length}
                    </strong>

                    {" pacientes"}

                </div>

                <div className="paginationControls">

                    <select
                        className="pageSizeSelect"
                        value={pageSize}
                        onChange={(event) =>
                            setPageSize(
                                Number(
                                    event.target.value
                                )
                            )
                        }
                        aria-label="Pacientes por página"
                    >

                        <option value="6">
                            6 por página
                        </option>

                        <option value="12">
                            12 por página
                        </option>

                        <option value="20">
                            20 por página
                        </option>

                    </select>

                    <button
                        type="button"
                        className="paginationButton"
                        disabled={currentPage === 1}
                        onClick={goToPreviousPage}
                        aria-label="Página anterior"
                    >

                        &lt;

                    </button>

                    {getVisiblePageNumbers().map(
                        (page) => (

                            <button
                                type="button"
                                key={page}
                                className={
                                    `paginationButton ${
                                        currentPage === page
                                            ? "current"
                                            : ""
                                    }`
                                }
                                onClick={() =>
                                    setCurrentPage(page)
                                }
                            >

                                {page}

                            </button>

                        )
                    )}

                    <button
                        type="button"
                        className="paginationButton"
                        disabled={
                            currentPage === totalPages
                        }
                        onClick={goToNextPage}
                        aria-label="Página siguiente"
                    >

                        &gt;

                    </button>

                </div>
            </div>
            </div>

        </div>

    );

}

export default PatientTable;