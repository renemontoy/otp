import { supabase } from "./client";

export async function getPatients() {

    const { data, error } = await supabase
        .from("pacientes")
        .select("*");

    if (error) throw error;

    return data;
}

export async function createPatient(patient) {

    const { data, error } = await supabase
        .from("pacientes")
        .insert([patient])
        .select();

    if (error) throw error;

    return data[0];

}

export async function updatePatient(id, patient) {

    const { data, error } = await supabase
        .from("pacientes")
        .update(patient)
        .eq("id", id)
        .select();

    if (error) throw error;

    return data[0];

}

export async function deactivatePatient(patientId) {

    const { data, error } = await supabase

        .from("pacientes")

        .update({
            status: false
        })

        .eq("id", patientId)

        .select()

        .single();

    if (error) {

        throw error;

    }

    return data;

}