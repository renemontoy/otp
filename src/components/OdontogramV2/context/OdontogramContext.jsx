import { createContext, useContext } from "react";
import { useOdontogram } from "../hooks/useOdontogram";

const OdontogramContext = createContext();

export function OdontogramProvider({ children }) {

    const odontogram = useOdontogram();

    return (

        <OdontogramContext.Provider value={odontogram}>

            {children}

        </OdontogramContext.Provider>

    );

}

export function useOdontogramContext() {

    return useContext(OdontogramContext);

}