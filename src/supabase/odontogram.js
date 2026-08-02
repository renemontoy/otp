import { supabase } from "./client";

export async function saveTreatment(rows){

    const { data, error } = await supabase

        .from("odontograma_tratamientos")

        .insert(rows)

        .select();

    if(error){

        throw error;

    }

    return data;

}

export async function loadOdontogram(patientId){

}

export async function updateTreatment(id,data){

}

export async function deleteTreatment(id){

}

export async function loadHistory(patientId){

}