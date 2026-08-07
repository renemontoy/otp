export function buildInitialToothVisuals(
    findings
) {

    const visuals = {};

    findings.forEach((finding) => {

        const toothNumber =
            String(finding.toothNumber);

        if (!visuals[toothNumber]) {

            visuals[toothNumber] = {

                faceColors: {},

                wholeToothFindings: []

            };

        }

        const toothVisual =
            visuals[toothNumber];

        /*
            Hallazgos por cara.

            Actualmente Caries es el principal
            hallazgo que utiliza este alcance.
        */
        if (
            finding.condition.scope === "cara" &&
            finding.faceId
        ) {

            toothVisual.faceColors[
                finding.faceId
            ] =
                finding.condition.color ||
                "#DC2626";

            return;

        }

        /*
            Hallazgos que corresponden a
            toda la pieza.
        */
        toothVisual.wholeToothFindings.push(
            finding
        );

    });

    return visuals;

}