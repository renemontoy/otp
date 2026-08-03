import { supabase } from "./client";

export async function getPatientTreatmentHistory(patientId) {

    if (!patientId) {

        return [];

    }

    const { data, error } = await supabase

        .from("odontograma_tratamientos")

        .select(`

            id,

            grupo_id,

            tratamiento_id,

            material_id,

            numero_pieza,

            cara,

            observaciones,

            fecha,

            created_at,

            updated_at,

            estado,

            fecha_realizacion,

            costo,

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

        .eq("paciente_id", patientId);

    if (error) {

        throw error;

    }

    return data || [];

}