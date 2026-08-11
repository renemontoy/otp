import { useEffect, useState } from "react";
import { supabase } from "../../../supabase/client";

export function useDentists() {

    const [dentists, setDentists] = useState([]);
    const [loadingDentists, setLoadingDentists] = useState(true);
    const [dentistsError, setDentistsError] = useState(null);

    useEffect(() => {

        fetchDentists();

    }, []);


    async function fetchDentists() {

        try {

            setLoadingDentists(true);
            setDentistsError(null);

            const { data, error } = await supabase
                .from("odontologos")
                .select(`
                    id,
                    nombre,
                    especialidad,
                    activo
                `)
                .eq("activo", true)
                .order("nombre", {
                    ascending: true
                });

            if (error) {
                throw error;
            }

            setDentists(data || []);

        } catch (error) {

            console.error(
                "Error cargando odontólogos:",
                error
            );

            setDentistsError(error);

        } finally {

            setLoadingDentists(false);

        }

    }


    return {
        dentists,
        loadingDentists,
        dentistsError,
        refetchDentists: fetchDentists
    };

}