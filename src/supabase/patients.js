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

    if (!patientId) {

        throw new Error(
            "No se recibió el ID del paciente."
        );

    }

    const { data, error } = await supabase

        .from("pacientes")

        .update({
            status: false
        })

        .eq("id", patientId)

        .select("id, status")

        .maybeSingle();

    console.log("Resultado desactivación:", {
        patientId,
        data,
        error
    });

    if (error) {

        throw error;

    }

    if (!data) {

        throw new Error(
            "Supabase no actualizó ninguna fila. Revisa el ID y las políticas RLS."
        );

    }

    return data;

}