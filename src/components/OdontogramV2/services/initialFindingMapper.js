function getRelation(relation) {

    if (Array.isArray(relation)) {

        return relation[0] ?? null;

    }

    return relation ?? null;
}


export function mapDatabaseToInitialFindings(
    rows
) {

    return rows.map((row) => {

        const condition =
            getRelation(
                row.condicion
            );

        return {

            id: row.id,

            evaluationId:
                row.evaluacion_id,

            groupId:
                row.grupo_id,

            toothNumber:
                String(
                    row.numero_pieza
                ),

            faceId:
                row.cara || null,

            observations:
                row.observaciones || "",

            createdAt:
                row.created_at,

            updatedAt:
                row.updated_at,

            condition: {

                id:
                    condition?.id ??
                    row.condicion_id,

                name:
                    condition?.nombre ||
                    "Condición",

                code:
                    condition?.codigo ||
                    "",

                scope:
                    condition?.alcance ||
                    "pieza",

                color:
                    condition?.color ||
                    null,

                symbol:
                    condition?.simbolo ||
                    null

            }

        };

    });

}