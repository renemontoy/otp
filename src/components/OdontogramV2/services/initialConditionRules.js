const MOBILITY_CODES = new Set([
    "movilidad_1",
    "movilidad_2",
    "movilidad_3"
]);


const INCOMPATIBILITIES = {

    ausente: new Set([
        "caries",
        "movilidad_1",
        "movilidad_2",
        "movilidad_3",
        "endodoncia",
        "protesis_fija"
    ]),

    caries: new Set([
        "ausente"
    ]),

    movilidad_1: new Set([
        "ausente",
        "movilidad_2",
        "movilidad_3"
    ]),

    movilidad_2: new Set([
        "ausente",
        "movilidad_1",
        "movilidad_3"
    ]),

    movilidad_3: new Set([
        "ausente",
        "movilidad_1",
        "movilidad_2"
    ]),

    endodoncia: new Set([
        "ausente"
    ]),

    protesis_fija: new Set([
        "ausente"
    ])

};


function isMobility(code) {

    return MOBILITY_CODES.has(
        code
    );

}


function isAutomaticReplacement(
    newCode,
    existingCode
) {

    /*
        Cambiar de M1 a M2, M2 a M3, etc.
        no requiere confirmación.

        Simplemente sustituimos el grado.
    */
    return (
        isMobility(newCode) &&
        isMobility(existingCode) &&
        newCode !== existingCode
    );

}


function conditionsConflict(
    newCode,
    existingCode
) {

    const newConditionRules =
        INCOMPATIBILITIES[
            newCode
        ];

    if (
        newConditionRules?.has(
            existingCode
        )
    ) {

        return true;

    }


    /*
        También comprobamos la relación
        inversa para mantener las reglas
        simétricas.

        Ejemplo:

        Ausente → Endodoncia

        y también:

        Endodoncia → Ausente
    */
    const existingConditionRules =
        INCOMPATIBILITIES[
            existingCode
        ];

    return Boolean(
        existingConditionRules?.has(
            newCode
        )
    );

}


export function findInitialConditionConflicts({

    findings,

    selectedCondition,

    toothNumbers

}) {

    if (
        !selectedCondition ||
        !Array.isArray(findings) ||
        !Array.isArray(toothNumbers)
    ) {

        return {
            automatic: [],
            confirmation: []
        };

    }


    const newCode =
        selectedCondition.codigo;


    /*
        Sano ya tiene su propia regla
        específica en useInitialOdontogram.
    */
    if (
        newCode === "sano"
    ) {

        return {
            automatic: [],
            confirmation: []
        };

    }


    const selectedTeeth =
        new Set(
            toothNumbers.map(
                String
            )
        );


    const automatic = [];

    const confirmation = [];


    findings.forEach(
        (finding) => {

            const toothNumber =
                String(
                    finding.toothNumber
                );


            if (
                !selectedTeeth.has(
                    toothNumber
                )
            ) {

                return;

            }


            const existingCode =
                finding.condition?.code;


            if (
                !existingCode ||
                existingCode === "sano" ||
                existingCode === newCode
            ) {

                return;

            }


            if (
                !conditionsConflict(
                    newCode,
                    existingCode
                )
            ) {

                return;

            }


            if (
                isAutomaticReplacement(
                    newCode,
                    existingCode
                )
            ) {

                automatic.push(
                    finding
                );

                return;

            }


            confirmation.push(
                finding
            );

        }
    );


    return {
        automatic,
        confirmation
    };

}