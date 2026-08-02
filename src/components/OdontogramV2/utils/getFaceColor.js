import {
    TREATMENT_COLORS
} from "./colors";

export function getFaceColor(face) {

    if (face.selected) {

        return TREATMENT_COLORS.selected;

    }

    if (face.treatment?.color) {

        return face.treatment.color;

    }

    if (face.status === "pendiente") {

        return TREATMENT_COLORS.pendiente;

    }

    if (face.status === "completado") {

        return TREATMENT_COLORS.completado;

    }

    return TREATMENT_COLORS.healthy;

}