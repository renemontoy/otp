import { TREATMENT_COLORS } from "./colors";

export function getFaceColor(face){

    if(face.selected){

        return TREATMENT_COLORS.selected;

    }

    if(face.treatment){

        const nombre = face.treatment.name
            ?.toLowerCase();

        if(TREATMENT_COLORS[nombre]){

            return TREATMENT_COLORS[nombre];

        }

    }

    if(face.status === "pendiente"){

        return TREATMENT_COLORS.pendiente;

    }

    if(face.status === "completado"){

        return TREATMENT_COLORS.completado;

    }

    return TREATMENT_COLORS.healthy;

}