import { supabase } from "./client";

export async function getFormulariosClinicos() {

    const {
        data,
        error
    } = await supabase
        .from("formularios")
        .select("*")
        .order("codigo", {
            ascending: true
        })
        .order("version", {
            ascending: false
        });

    if (error) {
        throw error;
    }

    return data ?? [];

}

export async function getFormularioClinicoDetalle(
    formularioId
) {

    if (!formularioId) {
        throw new Error(
            "No se proporcionó el formulario."
        );
    }


    const {
        data: formulario,
        error: formularioError
    } = await supabase
        .from("formularios")
        .select(`
            id,
            clinica_id,
            codigo,
            nombre,
            descripcion,
            version,
            estado,
            publicado_at,
            created_at,
            updated_at
        `)
        .eq("id", formularioId)
        .single();


    if (formularioError) {
        throw formularioError;
    }


    const {
        data: secciones,
        error: seccionesError
    } = await supabase
        .from("formulario_secciones")
        .select(`
            id,
            formulario_id,
            clave,
            titulo,
            descripcion,
            orden,
            activo
        `)
        .eq("formulario_id", formularioId)
        .order("orden", {
            ascending: true
        });


    if (seccionesError) {
        throw seccionesError;
    }


    const seccionIds = (secciones ?? []).map(
        (seccion) => seccion.id
    );

    let grupos = [];


    if (seccionIds.length > 0) {

        const {
            data,
            error
        } = await supabase
            .from("formulario_grupos")
            .select(`
                id,
                seccion_id,
                clave,
                titulo,
                mostrar_titulo,
                orden,
                activo
            `)
            .in("seccion_id", seccionIds)
            .order("orden", {
                ascending: true
            });


        if (error) {
            throw error;
        }

        grupos = data ?? [];

    }


    const grupoIds = grupos.map(
        (grupo) => grupo.id
    );

    let campos = [];


    if (grupoIds.length > 0) {

        const {
            data,
            error
        } = await supabase
            .from("formulario_campos")
            .select(`
                id,
                grupo_id,
                clave,
                etiqueta,
                tipo_campo,
                requerido,
                permite_observaciones,
                placeholder,
                texto_ayuda,
                configuracion,
                orden,
                activo
            `)
            .in("grupo_id", grupoIds)
            .order("orden", {
                ascending: true
            });


        if (error) {
            throw error;
        }

        campos = data ?? [];

    }


    const campoIds = campos.map(
        (campo) => campo.id
    );

    let opciones = [];


    if (campoIds.length > 0) {

        const {
            data,
            error
        } = await supabase
            .from("formulario_opciones")
            .select(`
                id,
                campo_id,
                valor,
                etiqueta,
                orden,
                activo
            `)
            .in("campo_id", campoIds)
            .order("orden", {
                ascending: true
            });


        if (error) {
            throw error;
        }

        opciones = data ?? [];

    }


    const opcionesPorCampo = new Map();

    opciones.forEach((opcion) => {

        const current =
            opcionesPorCampo.get(opcion.campo_id) ?? [];

        current.push(opcion);

        opcionesPorCampo.set(
            opcion.campo_id,
            current
        );

    });


    const camposPorGrupo = new Map();

    campos.forEach((campo) => {

        const current =
            camposPorGrupo.get(campo.grupo_id) ?? [];

        current.push({
            ...campo,
            opciones:
                opcionesPorCampo.get(campo.id) ?? []
        });

        camposPorGrupo.set(
            campo.grupo_id,
            current
        );

    });


    const gruposPorSeccion = new Map();

    grupos.forEach((grupo) => {

        const current =
            gruposPorSeccion.get(grupo.seccion_id) ?? [];

        current.push({
            ...grupo,
            campos:
                camposPorGrupo.get(grupo.id) ?? []
        });

        gruposPorSeccion.set(
            grupo.seccion_id,
            current
        );

    });


    return {
        ...formulario,

        secciones: (secciones ?? []).map(
            (seccion) => ({
                ...seccion,

                grupos:
                    gruposPorSeccion.get(
                        seccion.id
                    ) ?? []
            })
        )
    };

}

export async function crearBorradorFormulario(
    formularioId
) {

    if (!formularioId) {
        throw new Error(
            "No se proporcionó el formulario."
        );
    }

    const {
        data,
        error
    } = await supabase.rpc(
        "crear_borrador_formulario",
        {
            p_formulario_id: formularioId
        }
    );

    if (error) {
        throw error;
    }

    if (!data?.id) {
        throw new Error(
            "No se recibió el nuevo formulario."
        );
    }

    return data;

}

export async function actualizarCampoFormulario(
    campoId,
    cambios
) {

    const etiqueta = cambios.etiqueta?.trim();

    if (!campoId) {
        throw new Error(
            "No se proporcionó el campo."
        );
    }

    if (!etiqueta) {
        throw new Error(
            "La etiqueta del campo es obligatoria."
        );
    }


    const {
        data,
        error
    } = await supabase
        .from("formulario_campos")
        .update({
            etiqueta,
            requerido: Boolean(
                cambios.requerido
            ),
            permite_observaciones: Boolean(
                cambios.permite_observaciones
            ),
            activo: Boolean(
                cambios.activo
            )
        })
        .eq("id", campoId)
        .select(`
            id,
            grupo_id,
            clave,
            etiqueta,
            tipo_campo,
            requerido,
            permite_observaciones,
            placeholder,
            texto_ayuda,
            configuracion,
            orden,
            activo
        `)
        .single();


    if (error) {

        if (error.code === "PGRST116") {
            throw new Error(
                "El campo no puede modificarse. Verifica que el formulario sea un borrador y que tengas permisos de administrador."
            );
        }

        throw error;

    }


    return data;

}

export async function guardarOpcionesCampo(
    campoId,
    opciones
) {

    if (!campoId) {
        throw new Error(
            "No se proporcionó el campo."
        );
    }


    if (!Array.isArray(opciones) ||
        opciones.length === 0) {

        throw new Error(
            "Agrega por lo menos una opción."
        );

    }


    const opcionesPreparadas =
        opciones.map((opcion) => ({
            id: opcion.id || null,
            etiqueta: opcion.etiqueta?.trim() || "",
            activo: Boolean(opcion.activo)
        }));


    if (
        opcionesPreparadas.some(
            (opcion) => !opcion.etiqueta
        )
    ) {

        throw new Error(
            "Todas las opciones deben tener un nombre."
        );

    }


    const {
        data,
        error
    } = await supabase.rpc(
        "guardar_opciones_campo",
        {
            p_campo_id: campoId,
            p_opciones: opcionesPreparadas
        }
    );


    if (error) {
        throw error;
    }


    return data || [];

}