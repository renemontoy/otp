import FaceSector from "./FaceSector";
import CenterFace from "./CenterFace";
import ToothOutline from "./ToothOutline";

import {
    CLINICAL_TOOTH_GEOMETRY,
    FACE_SECTOR_PATHS
} from "./geometry";

import { getFaceColor } from "../../utils/getFaceColor";

const FACE_ORDER = [
    "top",
    "right",
    "bottom",
    "left"
];

const FACE_LABELS = {
    top: "Cara superior",
    right: "Cara derecha",
    bottom: "Cara inferior",
    left: "Cara izquierda",
    center: "Cara central"
};

const DEFAULT_FACE = {
    selected: false,
    status: "healthy",
    treatment: null
};

function ClinicalTooth({
    tooth,
    onFaceClick,
    disabled = false
}) {
    if (!tooth) {
        return null;
    }

    const {
        centerX,
        centerY,
        outerRadius,
        innerRadius
    } = CLINICAL_TOOTH_GEOMETRY;

    function getFace(faceId) {
        return tooth.faces?.[faceId] ?? DEFAULT_FACE;
    }

    function handleFaceClick(faceId) {
        if (disabled) {
            return;
        }

        onFaceClick?.(
            tooth.number,
            faceId
        );
    }

    return (
        <g
            className="clinicalTooth"
            aria-label={`Pieza dental ${tooth.number}`}
        >
            {FACE_ORDER.map((faceId) => {
                const face = getFace(faceId);

                return (
                    <FaceSector
                        key={faceId}
                        id={faceId}
                        path={FACE_SECTOR_PATHS[faceId]}
                        fill={getFaceColor(face)}
                        selected={Boolean(face.selected)}
                        disabled={disabled}
                        ariaLabel={
                            `${FACE_LABELS[faceId]} de la pieza ${tooth.number}`
                        }
                        onClick={handleFaceClick}
                    />
                );
            })}

            <CenterFace
                id="center"
                centerX={centerX}
                centerY={centerY}
                radius={innerRadius}
                fill={getFaceColor(getFace("center"))}
                selected={Boolean(
                    getFace("center").selected
                )}
                disabled={disabled}
                ariaLabel={
                    `${FACE_LABELS.center} de la pieza ${tooth.number}`
                }
                onClick={handleFaceClick}
            />

            <ToothOutline
                centerX={centerX}
                centerY={centerY}
                radius={outerRadius}
            />
        </g>
    );
}

export default ClinicalTooth;