import "./Tooth.css";
import ToothSvg from "./ToothSvg";

function Tooth({ tooth, onFaceClick }) {

    return (

        <div className="tooth">

            <span className="tooth-number">

                {tooth.number}

            </span>

            <ToothSvg

                tooth={tooth}

                onFaceClick={onFaceClick}

            />

        </div>

    );

}

export default Tooth;