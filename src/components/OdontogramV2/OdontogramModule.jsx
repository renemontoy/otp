import "./OdontogramModule.css";
import { OdontogramProvider } from "./context/OdontogramContext";
import Odontogram from "./Odontogram";
import TreatmentPanel from "./components/TreatmentPanel";
import PendingTreatments from "./components/PendingTreatments";
import Workspace from "./layout/Workspace";
import PatientHeader from "./components/Header/PatientHeader";
import OdontogramCanvas from "./components/Canvas/OdontogramCanvas";
import { useState } from "react";
import { InitialOdontogramProvider } from "./context/InitialOdontogramContext";
import ModeSelector from "./components/ModeSelector/ModeSelector";
import InitialOdontogram from "./InitialOdontogram";
import InitialConditionPanel from "./components/InitialConditionPanel/InitialConditionPanel";
import InitialFindings from "./components/InitialFindings/InitialFindings";

function OdontogramModule({

    patient,

    onCancel

}) {

    const [
        mode,
        setMode
    ] = useState("initial");


    return (

        <div className="odontogramModule">

            <PatientHeader

                patient={patient}

                onCancel={onCancel}

            />


            <div className="odontogramModeBar">

                <ModeSelector

                    mode={mode}

                    onChange={setMode}

                />

            </div>


            {mode === "initial" && (

                <InitialOdontogramProvider
                    patient={patient}
                >

                    <Workspace

                        canvas={

                            <OdontogramCanvas>

                                <InitialOdontogram />

                            </OdontogramCanvas>

                        }

                        leftPanel={

                            <InitialConditionPanel />

                        }

                        rightPanel={

                            <InitialFindings />

                        }

                    />

                </InitialOdontogramProvider>

            )}


            {mode === "treatment" && (

                <OdontogramProvider
                    patient={patient}
                >

                    <Workspace

                        canvas={

                            <OdontogramCanvas>

                                <Odontogram />

                            </OdontogramCanvas>

                        }

                        leftPanel={

                            <TreatmentPanel />

                        }

                        rightPanel={

                            <PendingTreatments />

                        }

                    />

                </OdontogramProvider>

            )}

        </div>

    );

}


export default OdontogramModule;