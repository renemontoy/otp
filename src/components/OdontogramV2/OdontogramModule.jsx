import "./OdontogramModule.css";
import { OdontogramProvider } from "./context/OdontogramContext";
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
        <OdontogramProvider patient={patient}>

            <PatientHeader

                patient={patient}

                onCancel={onCancel}

            />

            <Workspace

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