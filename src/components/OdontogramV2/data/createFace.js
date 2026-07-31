function createFace() {

    return {

        selected: false,

        status: "healthy",

        treatment: null,

        diagnosis: null,

        notes: "",

        updatedAt: null

    };

}

export function createFaces() {

    return {

        top: createFace(),

        left: createFace(),

        center: createFace(),

        right: createFace(),

        bottom: createFace()

    };

}