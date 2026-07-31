import "./OdontogramModule.css";
import { OdontogramProvider } from "./context/OdontogramContext";
import Toolbar from "./components/Toolbar/Toolbar";
import Odontogram from "./Odontogram";
import TreatmentPanel from "./components/TreatmentPanel";
import PendingTreatments from "./components/PendingTreatments";
import Workspace from "./layout/Workspace";
import PatientHeader from "./components/Header/PatientHeader";
import OdontogramCanvas from "./components/Canvas/OdontogramCanvas";

function OdontogramModule({
    patient,
    onCancel
})
    {
    return(
        <div className="odontogramModule">
        <OdontogramProvider>

            <PatientHeader

                patient={patient}

                onCancel={onCancel}

            />

            <Workspace

                toolbar={<Toolbar/>}

                canvas={

                    <OdontogramCanvas>

                        <Odontogram/>

                    </OdontogramCanvas>

                }

                leftPanel={<TreatmentPanel/>}

                /*rightPanel={<PendingTreatments/>}*/

            />

        </OdontogramProvider>
            
        </div>
    );

}

export default OdontogramModule;