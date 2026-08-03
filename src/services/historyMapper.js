const FACE_LABELS = {

    top: "Oclusal",

    bottom: "Lingual",

    left: "Mesial",

    right: "Distal",

    center: "Centro"

};

function getRelation(relation) {

    if (Array.isArray(relation)) {

        return relation[0] ?? null;

    }

    return relation ?? null;

}

function normalizeStatus(status) {

    const normalized = String(status || "")
        .trim()
        .toLowerCase();

    if (normalized === "completado") {

        return "Completado";

    }

    if (normalized === "cancelado") {

        return "Cancelado";

    }

    return "Pendiente";

}

function getHistoryDate(row) {

    const status = normalizeStatus(row.estado);

    if (status === "Completado") {

        return (
            row.fecha_realizacion ||
            row.updated_at ||
            row.fecha ||
            row.created_at
        );

    }

    if (status === "Cancelado") {

        return (
            row.updated_at ||
            row.fecha ||
            row.created_at
        );

    }

    return (
        row.fecha ||
        row.created_at
    );

}

export function mapDatabaseToHistory(rows) {

    const groups = new Map();

    rows.forEach((row) => {

        const groupKey =
            row.grupo_id ||
            `record-${row.id}`;

        const treatment =
            getRelation(row.tratamiento);

        const material =
            getRelation(row.material);

        const eventDate =
            getHistoryDate(row);

        if (!groups.has(groupKey)) {

            groups.set(groupKey, {

                id: groupKey,

                recordIds: [],

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
                    normalizeStatus(row.estado),

                date: eventDate,

                cost:
                    row.costo ?? null,

                teeth: []

            });

        }

        const group =
            groups.get(groupKey);

        group.recordIds.push(row.id);

        const faceLabel =
            FACE_LABELS[row.cara] ||
            row.cara ||
            "Pieza completa";

        const description =
            `${row.numero_pieza} (${faceLabel})`;

        if (!group.teeth.includes(description)) {

            group.teeth.push(description);

        }

        /*
            En caso de que las filas de un mismo grupo
            tengan fechas diferentes, conservamos la más reciente.
        */
        if (
            eventDate &&
            (
                !group.date ||
                new Date(eventDate) > new Date(group.date)
            )
        ) {

            group.date = eventDate;

        }

    });

    return Array.from(groups.values())

        .sort((first, second) => {

            return (
                new Date(second.date || 0) -
                new Date(first.date || 0)
            );

        });

}