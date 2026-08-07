import { supabase } from "./client";


export async function getInitialConditions() {

    const { data, error } = await supabase

        .from("condiciones_odontograma")

        .select(`
            id,
            nombre,
            codigo,
            alcance,
            color,
            simbolo,
            activo
        `)

        .eq("activo", true)

        .order("id", {
            ascending: true
        });

    if (error) {
        throw error;
    }

    return data || [];
}


export async function getOrCreateInitialEvaluation(
    patientId
) {

    if (!patientId) {

        throw new Error(
            "No se recibió el paciente."
        );

    }

    const {
        data: existingEvaluation,
        error: searchError
    } = await supabase

        .from("odontograma_evaluaciones")

        .select("*")

        .eq(
            "paciente_id",
            patientId
        )

        .eq(
            "tipo",
            "Inicial"
        )

        .maybeSingle();

    if (searchError) {
        throw searchError;
    }

    if (existingEvaluation) {

        return existingEvaluation;

    }

    const {
        data: newEvaluation,
        error: insertError
    } = await supabase

        .from("odontograma_evaluaciones")

        .insert({

            paciente_id: patientId,

            tipo: "Inicial",

            estado: "Borrador"

        })

        .select()

        .single();

    if (insertError) {
        throw insertError;
    }

    return newEvaluation;
}


export async function getInitialFindings(
    evaluationId
) {

    if (!evaluationId) {
        return [];
    }

    const { data, error } = await supabase

        .from("odontograma_hallazgos")

        .select(`
            id,
            evaluacion_id,
            condicion_id,
            numero_pieza,
            cara,
            observaciones,
            grupo_id,
            created_at,
            updated_at,

            condicion:condiciones_odontograma!odontograma_hallazgos_condicion_id_fkey (
                id,
                nombre,
                codigo,
                alcance,
                color,
                simbolo
            )
        `)

        .eq(
            "evaluacion_id",
            evaluationId
        )

        .order(
            "created_at",
            {
                ascending: true
            }
        );

    if (error) {
        throw error;
    }

    return data || [];
}


export async function saveInitialFindings(rows) {

    if (
        !Array.isArray(rows) ||
        rows.length === 0
    ) {

        throw new Error(
            "No existen hallazgos para guardar."
        );

    }

    const { data, error } = await supabase

        .from("odontograma_hallazgos")

        .insert(rows)

        .select();

    if (error) {
        throw error;
    }

    return data || [];
}


export async function deleteInitialFindingGroup(
    groupId
) {

    if (!groupId) {

        throw new Error(
            "No se recibió el grupo del hallazgo."
        );

    }

    const { error } = await supabase

        .from("odontograma_hallazgos")

        .delete()

        .eq(
            "grupo_id",
            groupId
        );

    if (error) {
        throw error;
    }

}

export async function deleteInitialFindingsByTeeth(
    evaluationId,
    toothNumbers
) {

    if (
        !evaluationId ||
        !Array.isArray(toothNumbers) ||
        toothNumbers.length === 0
    ) {
        return;
    }

    const { error } = await supabase
        .from("odontograma_hallazgos")
        .delete()
        .eq(
            "evaluacion_id",
            evaluationId
        )
        .in(
            "numero_pieza",
            toothNumbers
        );

    if (error) {
        throw error;
    }

}


export async function deleteInitialConditionByTeeth(
    evaluationId,
    conditionId,
    toothNumbers
) {

    if (
        !evaluationId ||
        !conditionId ||
        !Array.isArray(toothNumbers) ||
        toothNumbers.length === 0
    ) {
        return;
    }

    const { error } = await supabase
        .from("odontograma_hallazgos")
        .delete()
        .eq(
            "evaluacion_id",
            evaluationId
        )
        .eq(
            "condicion_id",
            conditionId
        )
        .in(
            "numero_pieza",
            toothNumbers
        );

    if (error) {
        throw error;
    }

}

export async function deleteInitialFinding(
    findingId
) {

    if (!findingId) {

        throw new Error(
            "No se recibió el hallazgo a eliminar."
        );

    }

    const {
        data,
        error
    } = await supabase

        .from("odontograma_hallazgos")

        .delete()

        .eq("id", findingId)

        .select("id")

        .maybeSingle();

    if (error) {
        throw error;
    }

    if (!data) {

        throw new Error(
            "No se encontró el hallazgo a eliminar."
        );

    }

    return data;
}

export async function updateInitialFinding(
    findingId,
    {
        conditionId,
        observations
    }
) {

    if (!findingId) {

        throw new Error(
            "No se recibió el hallazgo."
        );

    }

    const {
        data,
        error
    } = await supabase
        .from("odontograma_hallazgos")
        .update({
            condicion_id: conditionId,
            observaciones:
                observations || null,
            updated_at:
                new Date().toISOString()
        })
        .eq("id", findingId)
        .select()
        .single();

    if (error) {
        throw error;
    }

    return data;
}

export async function deleteInitialFindingsByIds(
    findingIds
) {

    if (
        !Array.isArray(findingIds) ||
        findingIds.length === 0
    ) {

        return [];

    }


    const uniqueIds = [
        ...new Set(
            findingIds
        )
    ];


    const {
        data,
        error
    } = await supabase

        .from("odontograma_hallazgos")

        .delete()

        .in(
            "id",
            uniqueIds
        )

        .select("id");


    if (error) {
        throw error;
    }


    return data || [];

}

export async function finalizeInitialEvaluation(
    evaluationId
) {

    if (!evaluationId) {

        throw new Error(
            "No se recibió la evaluación."
        );

    }


    const {
        data,
        error
    } = await supabase

        .from("odontograma_evaluaciones")

        .update({

            estado: "Finalizado",

            updated_at:
                new Date().toISOString()

        })

        .eq(
            "id",
            evaluationId
        )

        .eq(
            "estado",
            "Borrador"
        )

        .select()

        .maybeSingle();


    if (error) {
        throw error;
    }


    if (!data) {

        throw new Error(
            "La evaluación no pudo finalizarse o ya estaba finalizada."
        );

    }


    return data;
}