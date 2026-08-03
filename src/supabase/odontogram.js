import { supabase } from "./client";

export async function saveTreatment(rows) {

    const { data, error } = await supabase

        .from("odontograma_tratamientos")

        .insert(rows)

        .select();

    if (error) {

        throw error;

    }

    return data;

}

export async function loadOdontogram(patientId) {

    const { data, error } = await supabase

        .from("odontograma_tratamientos")

        .select(`

            id,

            grupo_id,

            paciente_id,

            tratamiento_id,

            material_id,

            numero_pieza,

            cara,

            observaciones,

            fecha,

            created_at,

            updated_at,

            estado,

            orden,

            fecha_realizacion,

            costo,

            odontologo_id,

            tratamiento:tratamientos!odontograma_tratamientos_tratamiento_id_fkey (

                id,

                nombre,

                color

            ),

            material:materiales!odontograma_tratamientos_material_id_fkey (

                id,

                nombre

            )

        `)

        .eq("paciente_id", patientId)

        .order("fecha", {

            ascending: false,

            nullsFirst: false

        })

        .order("created_at", {

            ascending: false

        });

    if (error) {

        throw error;

    }

    return data || [];

}

export async function deleteTreatmentGroup(
    groupId
) {

    const { error } = await supabase

        .from("odontograma_tratamientos")

        .delete()

        .eq("grupo_id", groupId);

    if (error) {

        throw error;

    }

}

export async function deleteTreatmentsByIds(
    ids
) {

    if (!Array.isArray(ids) || ids.length === 0) {

        return;

    }

    const { error } = await supabase

        .from("odontograma_tratamientos")

        .delete()

        .in("id", ids);

    if (error) {

        throw error;

    }

}

export async function updateTreatment(
    id,
    data
) {

    const { data: result, error } =
        await supabase

            .from("odontograma_tratamientos")

            .update({

                ...data,

                updated_at:
                    new Date().toISOString()

            })

            .eq("id", id)

            .select()

            .single();

    if (error) {

        throw error;

    }

    return result;

}

export async function loadHistory(patientId) {

    return loadOdontogram(patientId);

}

export async function updateTreatmentGroupStatus({
    groupId,
    recordIds,
    status
}) {

    const now = new Date().toISOString();

    const updateData = {
        estado: status,
        updated_at: now
    };

    if (status === "Completado") {
        updateData.fecha_realizacion = now;
    }

    if (status === "Cancelado") {
        updateData.fecha_realizacion = null;
    }

    let query = supabase
        .from("odontograma_tratamientos")
        .update(updateData)
        .eq("estado", "Pendiente");

    if (groupId) {

        query = query.eq("grupo_id", groupId);

    } else if (
        Array.isArray(recordIds) &&
        recordIds.length > 0
    ) {

        query = query.in("id", recordIds);

    } else {

        throw new Error(
            "No se proporcionó un grupo o registros para actualizar."
        );

    }

    const { data, error } = await query.select();

    if (error) {
        throw error;
    }

    return data || [];
}