import IncisorRenderer from "./Renderers/IncisorRenderer";
import CanineRenderer from "./Renderers/CanineRenderer";
import PremolarRenderer from "./Renderers/PremolarRenderer";
import MolarRenderer from "./Renderers/MolarRenderer";

function ToothRenderer({ tooth, onFaceClick }) {

    switch (tooth.type) {

        case "incisor":
            return (
                <IncisorRenderer
                    tooth={tooth}
                    onFaceClick={onFaceClick}
                />
            );

        case "canine":
            return (
                <CanineRenderer
                    tooth={tooth}
                    onFaceClick={onFaceClick}
                />
            );

        case "premolar":
            return (
                <PremolarRenderer
                    tooth={tooth}
                    onFaceClick={onFaceClick}
                />
            );

        case "molar":
            return (
                <MolarRenderer
                    tooth={tooth}
                    onFaceClick={onFaceClick}
                />
            );

        default:
            return null;
    }

}

export default ToothRenderer;