import Odontogram from "../components/OdontogramV2/Odontogram";
import { OdontogramProvider } from "../components/OdontogramV2/context/OdontogramContext";

function Agenda() {

    return (

        <OdontogramProvider>

            <Odontogram />

        </OdontogramProvider>

    );

}

export default Agenda;