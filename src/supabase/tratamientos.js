import { supabase } from "./client";

export async function getTreatments() {

    const { data, error } = await supabase
        .from("tratamientos")
        .select("*")
        .eq("activo", true)
        .order("nombre");

    if (error) throw error;

    return data;
}

export async function getMaterialsByTreatment(treatmentId) {

    const { data, error } = await supabase

        .from("tratamiento_materiales")

        .select(`
            material_id,
            materiales (
                id,
                nombre
            )
        `)

        .eq("tratamiento_id", treatmentId)

        .eq("activo", true);

    if (error) throw error;

    return data;
}