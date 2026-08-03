import { createOdontogram } from "../data/createOdontogram";
import { createTreatment } from "../data/createTreatment";

const VALID_FACES = [
    "top",
    "left",
    "center",
    "right",
    "bottom"
];

const FACE_LABELS = {

    top: "Oclusal",

    bottom: "Lingual",

    left: "Mesial",

    right: "Distal",

    center: "Centro"

};

function normalizeStatus(status) {

    const normalized = String(status || "")
        .trim()
        .toLowerCase();

    if (normalized === "pendiente") {
        return "pendiente";
    }

    if (
        normalized === "completado" ||
        normalized === "realizado"
    ) {
        return "completado";
    }

    if (
        normalized === "cancelado" ||
        normalized === "cancelada"
    ) {
        return "cancelado";
    }

    return "healthy";
}

function getRelation(relation) {

    if (Array.isArray(relation)) {

        return relation[0] ?? null;

    }

    return relation ?? null;

}

export function mapFacesToDatabase(

    patientId,

    selectedFaces,

    treatmentData

) {

    const groupId = crypto.randomUUID();

    const currentDate =
        new Date().toISOString();

    return selectedFaces.map(({

        toothNumber,

        faceId

    }) => ({

        grupo_id: groupId,

        paciente_id: patientId,

        tratamiento_id:
            Number(treatmentData.treatmentId),

        material_id:
            treatmentData.materialId
                ? Number(treatmentData.materialId)
                : null,

        numero_pieza: String(toothNumber),

        cara: faceId,

        observaciones:
            treatmentData.observations?.trim() || "",

        estado: "Pendiente",

        fecha: currentDate

    }));

}

export function mapDatabaseToOdontogram(rows) {

    const odontogram = createOdontogram();

    /*
        La consulta viene ordenada de más reciente
        a más antigua. La primera aparición de una
        pieza/cara representa su estado actual.
    */
    const loadedFaces = new Set();

    rows.forEach((row) => {

        const toothNumber = String(row.numero_pieza);
        const faceId = row.cara;

        if (!odontogram[toothNumber]) {
            return;
        }

        if (!VALID_FACES.includes(faceId)) {
            return;
        }

        const normalizedStatus =
            normalizeStatus(row.estado);

        /*
            Un tratamiento cancelado permanece en
            el historial, pero no representa el estado
            actual de la cara.
        */
        if (normalizedStatus === "cancelado") {
            return;
        }

        const faceKey =
            `${toothNumber}:${faceId}`;

        if (loadedFaces.has(faceKey)) {
            return;
        }

        loadedFaces.add(faceKey);

        const treatment =
            getRelation(row.tratamiento);

        const material =
            getRelation(row.material);

        const face =
            odontogram[toothNumber].faces[faceId];

        face.selected = false;
        face.status = normalizedStatus;
        face.notes = row.observaciones || "";

        face.updatedAt =
            row.updated_at ||
            row.created_at ||
            row.fecha ||
            null;

        face.treatment = createTreatment({

            recordId: row.id,

            groupId: row.grupo_id,

            treatmentId: row.tratamiento_id,

            treatmentName:
                treatment?.nombre ||
                "Tratamiento sin nombre",

            treatmentColor:
                treatment?.color || null,

            materialId: row.material_id,

            materialName:
                material?.nombre || "",

            observations:
                row.observaciones || "",

            status: normalizedStatus,

            date:
                row.fecha ||
                row.created_at ||
                null,

            completedAt:
                row.fecha_realizacion || null,

            cost:
                row.costo ?? null
        });

    });

    return odontogram;

}

export function mapDatabaseToPendingTreatments(rows) {

    const groups = new Map();

    rows.forEach((row) => {

        if (
            normalizeStatus(row.estado) !==
            "pendiente"
        ) {

            return;

        }

        const treatment =
            getRelation(row.tratamiento);

        const material =
            getRelation(row.material);

        /*
            Los registros antiguos que no tengan
            grupo_id se tratarán como grupos individuales.
        */
        const groupKey =
            row.grupo_id ||
            `record-${row.id}`;

        if (!groups.has(groupKey)) {

            groups.set(groupKey, {

                id: groupKey,

                groupId:
                    row.grupo_id || null,

                recordIds: [],

                teeth: [],

                treatmentName:
                    treatment?.nombre ||
                    "Tratamiento sin nombre",

                treatmentColor:
                    treatment?.color || null,

                materialName:
                    material?.nombre || "",

                observations:
                    row.observaciones || "",

                status:
                    row.estado || "Pendiente",

                date:
                    row.fecha ||
                    row.created_at ||
                    null,

                cost:
                    row.costo ?? null

            });

        }

        const group =
            groups.get(groupKey);

        group.recordIds.push(row.id);

        const faceName =
            FACE_LABELS[row.cara] ||
            row.cara;

        const toothDescription =
            `${row.numero_pieza} (${faceName})`;

        if (
            !group.teeth.includes(
                toothDescription
            )
        ) {

            group.teeth.push(
                toothDescription
            );

        }

    });

    return Array.from(groups.values())
        .sort((first, second) => {

            const firstDate =
                new Date(first.date || 0);

            const secondDate =
                new Date(second.date || 0);

            return secondDate - firstDate;

        });

}