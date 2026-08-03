import { createPortal } from "react-dom";
import "./TreatmentTooltip.css";

const FACE_LABELS = {
    top: "Oclusal",
    bottom: "Lingual",
    left: "Mesial",
    right: "Distal",
    center: "Centro"
};

function normalizeStatus(status) {

    const value = String(status || "")
        .trim()
        .toLowerCase();

    if (value === "completado") {

        return {
            key: "completed",
            label: "Completado"
        };

    }

    if (value === "cancelado") {

        return {
            key: "cancelled",
            label: "Cancelado"
        };

    }

    return {
        key: "pending",
        label: "Pendiente"
    };

}

function formatDate(date) {

    if (!date) {

        return "-";

    }

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {

        return "-";

    }

    return new Intl.DateTimeFormat(
        "es-MX",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    ).format(parsedDate);

}

function calculatePosition(x, y) {

    const offset = 16;

    const estimatedWidth = 300;

    const estimatedHeight = 220;

    let left = x + offset;

    let top = y + offset;

    if (
        left + estimatedWidth >
        window.innerWidth - 12
    ) {

        left =
            x -
            estimatedWidth -
            offset;

    }

    if (
        top + estimatedHeight >
        window.innerHeight - 12
    ) {

        top =
            y -
            estimatedHeight -
            offset;

    }

    return {
        left: Math.max(12, left),
        top: Math.max(12, top)
    };

}

function TreatmentTooltip({ tooltip }) {

    if (
        !tooltip ||
        !tooltip.face?.treatment ||
        typeof document === "undefined"
    ) {

        return null;

    }

    const {
        x,
        y,
        toothNumber,
        faceId,
        face
    } = tooltip;

    const treatment = face.treatment;

    const status = normalizeStatus(
        treatment.status || face.status
    );

    const displayedDate =
        status.key === "completed"
            ? (
                treatment.completedAt ||
                face.updatedAt ||
                treatment.date
            )
            : (
                treatment.date ||
                face.updatedAt
            );

    const dateLabel =
        status.key === "completed"
            ? "Realizado"
            : "Registrado";

    const position =
        calculatePosition(x, y);

    return createPortal(

        <div
            className="treatmentTooltip"
            style={{
                left: position.left,
                top: position.top
            }}
            role="tooltip"
        >

            <div className="tooltipHeader">

                <div className="tooltipTitle">

                    {treatment.color && (

                        <span
                            className="tooltipColor"
                            style={{
                                backgroundColor:
                                    treatment.color
                            }}
                        />

                    )}

                    <strong>

                        Pieza {toothNumber}

                    </strong>

                </div>

                <span
                    className={
                        `tooltipStatus tooltipStatus--${status.key}`
                    }
                >

                    {status.label}

                </span>

            </div>

            <div className="tooltipFace">

                Cara:{" "}

                <strong>

                    {FACE_LABELS[faceId] || faceId}

                </strong>

            </div>

            <div className="tooltipTreatment">

                {treatment.name ||
                    "Tratamiento sin nombre"}

            </div>

            <dl className="tooltipDetails">

                <div>

                    <dt>Material</dt>

                    <dd>

                        {treatment.material?.name ||
                            "-"}

                    </dd>

                </div>

                <div>

                    <dt>{dateLabel}</dt>

                    <dd>

                        {formatDate(displayedDate)}

                    </dd>

                </div>

            </dl>

            {(

                treatment.observations ||

                face.notes

            ) && (

                <div className="tooltipObservations">

                    <span>Observaciones</span>

                    <p>

                        {treatment.observations ||
                            face.notes}

                    </p>

                </div>

            )}

        </div>,

        document.body

    );

}

export default TreatmentTooltip;