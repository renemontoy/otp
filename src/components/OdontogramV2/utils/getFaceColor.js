import { TREATMENT_COLORS } from "./colors";

export function getFaceColor(face){

    if(face.selected){

        return TREATMENT_COLORS.selected;

    }

    switch(face.status){

        case "healthy":

            return TREATMENT_COLORS.healthy;

        case "pending":

            return TREATMENT_COLORS.pending;

        case "completed":

            return TREATMENT_COLORS.completed;

        case "extraction":

            return TREATMENT_COLORS.extraction;

        case "implant":

            return TREATMENT_COLORS.implant;

        case "crown":

            return TREATMENT_COLORS.crown;

        case "endodontics":

            return TREATMENT_COLORS.endodontics;

        case "caries":

            return TREATMENT_COLORS.caries;

        default:

            return "#FFFFFF";

    }

}