import { supabase } from "./client";


export async function getExploracionByPatient(patientId) {

    const { data, error } = await supabase
        .from("exploraciones")
        .select("*")
        .eq("paciente_id", patientId)
        .maybeSingle();

    if (error) {
        throw error;
    }

    return data;
}


export async function createExploracion(patientId, formData) {

    const { data, error } = await supabase
        .from("exploraciones")
        .insert([
            {
                paciente_id: patientId,
                ...formData
            }
        ])
        .select()
        .single();

    if (error) {
        throw error;
    }

    return data;
}


export async function updateExploracion(
    exploracionId,
    formData
) {

    const { data, error } = await supabase
        .from("exploraciones")
        .update(formData)
        .eq("id", exploracionId)
        .select()
        .single();

    if (error) {
        throw error;
    }

    return data;
}