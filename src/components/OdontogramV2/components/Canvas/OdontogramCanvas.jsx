import "./OdontogramCanvas.css";

function OdontogramCanvas({ children }) {

    return (

        <div className="odontogramCanvas">

            <div className="odontogramPaper">

                {children}

            </div>

        </div>

    );

}

export default OdontogramCanvas;