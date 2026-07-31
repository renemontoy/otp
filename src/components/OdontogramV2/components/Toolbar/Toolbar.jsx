import "./Toolbar.css";

import ToolbarButton from "./ToolbarButton";

function Toolbar(){

    return(

        <div className="toolbar">

            <ToolbarButton


                label="Seleccionar"

            />

            <ToolbarButton


                label="Tratamiento"

            />

            <ToolbarButton


                label="Ausente"

            />

            <ToolbarButton


                label="Corona"

            />

            <ToolbarButton


                label="Implante"

            />

            <ToolbarButton


                label="Zoom"

            />

        </div>

    );

}

export default Toolbar;