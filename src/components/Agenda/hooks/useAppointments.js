import { useEffect, useState } from "react";
import { supabase } from "../../../supabase/client";

export function useAppointments(selectedDate) {

    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        if (!selectedDate) return;

        fetchAppointments();

    }, [selectedDate]);

    async function fetchAppointments() {

        try {

            setLoading(true);
            setError(null);

            const startOfDay = new Date(selectedDate);

            startOfDay.setHours(
                0,
                0,
                0,
                0
            );

            const endOfDay = new Date(selectedDate);

            endOfDay.setHours(
                23,
                59,
                59,
                999
            );

            const { data, error } = await supabase
                .from("citas")
                .select(`
                    *,
                    pacientes (
                        id,
                        nombre,
                        apellido,
                        telefono
                    ),
                    odontologos (
                        id,
                        nombre,
                        especialidad
                    )
                `)
                .gte(
                    "inicio",
                    startOfDay.toISOString()
                )
                .lte(
                    "inicio",
                    endOfDay.toISOString()
                )
                .order(
                    "inicio",
                    { ascending: true }
                );

            if (error) {
                throw error;
            }

            setAppointments(
                data || []
            );

        } catch (error) {

            console.error(
                "Error cargando agenda:",
                error
            );

            setError(error);

        } finally {

            setLoading(false);

        }

    }

    return {
        appointments,
        loading,
        error,
        refetch: fetchAppointments
    };
}