import {
    createContext,
    useContext
} from "react";

import {
    useInitialOdontogram
} from "../hooks/useInitialOdontogram";


const InitialOdontogramContext =
    createContext(null);


export function InitialOdontogramProvider({
    patient,
    children
}) {

    const initialOdontogram =
        useInitialOdontogram(
            patient
        );

    return (

        <InitialOdontogramContext.Provider
            value={initialOdontogram}
        >

            {children}

        </InitialOdontogramContext.Provider>

    );

}


export function useInitialOdontogramContext() {

    const context =
        useContext(
            InitialOdontogramContext
        );

    if (!context) {

        throw new Error(
            "useInitialOdontogramContext debe utilizarse dentro de InitialOdontogramProvider."
        );

    }

    return context;

}