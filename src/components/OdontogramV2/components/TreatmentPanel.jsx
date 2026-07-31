import "./TreatmentPanel.css";
import { useEffect, useState } from "react";
import { getTreatments, getMaterialsByTreatment } from "../../../supabase/tratamientos";
import { useOdontogramContext } from "../context/OdontogramContext";

function TreatmentPanel() {
    const {

        selectedFaces,

        treatmentData,

        setTreatmentData,

        applyTreatment

    } = useOdontogramContext();

    const [treatments, setTreatments] = useState([]);

    const [materials, setMaterials] = useState([]);

    useEffect(() => {

        async function loadTreatments() {

            try {

                const data = await getTreatments();

                setTreatments(data);

            } catch (error) {

                console.error(error);

            }

        }

        loadTreatments();

    }, []);

    useEffect(() => {

        async function loadMaterials() {

            if (!treatmentData.treatmentId) {

                setMaterials([]);

                return;

            }

            try {

                const data = await getMaterialsByTreatment(
                    treatmentData.treatmentId
                );

                setMaterials(
                    data.map(item => item.materiales)
                );

            } catch (error) {

                console.error(error);

            }

        }

        loadMaterials();

    }, [treatmentData.treatmentId]);

        function handleChange(e){

            const { name, value } = e.target;

            setTreatmentData(prev => ({

                ...prev,

                [name]: value

            }));

        }

    async function handleTreatmentChange(e) {

        const treatmentId = e.target.value;

        const selectedOption = e.target.options[e.target.selectedIndex];

        const treatmentName = selectedOption.text;

        setTreatmentData(prev => ({

            ...prev,

            treatmentId,

            treatmentName,

            materialId: "",

            materialName: ""

        }));

    }

    function handleMaterialChange(e){

        const materialId = e.target.value;

        const selectedOption = e.target.options[e.target.selectedIndex];

        const materialName = selectedOption.text;

        setTreatmentData(prev => ({

            ...prev,

            materialId,

            materialName

        }));

    }
    function formatSelectedFaces() {

        if (selectedFaces.length === 0) {

            return "Ninguna";

        }

        return selectedFaces

            .map(face => {

                const names = {

                    top: "Oclusal",

                    bottom: "Lingual",

                    left: "Mesial",

                    right: "Distal",

                    center: "Centro"

                };

                return `${face.toothNumber} (${names[face.faceId]})`;

            })

            .join(", ");

    }
    return (

        <div className="treatmentPanel">
            <div className="formGroup">
            <p>

                Dientes seleccionados:

            </p>

            <strong>
                {formatSelectedFaces()}
            </strong>
            </div>

            <div className="formGroup">
            <label>
                    Tratamiento
            </label>
            <select
                name="treatmentId"
                disabled={selectedFaces.length === 0}
                value={treatmentData.treatmentId}
                onChange={handleTreatmentChange}

            >

                <option value="">

                    Seleccionar

                </option>

                {treatments.map((treatment) => (

                <option

                    key={treatment.id}

                    value={treatment.id}

                >

                    {treatment.nombre}

                </option>

                ))}

            </select>
            </div>
            <div className="formGroup">
            
            {materials.length > 0 && (

                <>

                    <label>Material</label>

                    <select
                        name="materialId"
                        disabled={selectedFaces.length === 0}
                        value={treatmentData.materialId}
                        onChange={handleMaterialChange}
                    >

                        <option value="">
                            Seleccionar
                        </option>

                        {materials.map((material) => (

                            <option
                                key={material.id}
                                value={material.id}
                            >
                                {material.nombre}
                            </option>

                        ))}

                    </select>

                </>

            )}
            </div>
            <div className="formGroup">
            <label>
                Observaciones
            </label>
            <textarea
                name="observations"
                disabled={selectedFaces.length === 0}
                value={treatmentData.observations}
                onChange={handleChange}

            />
            </div>
            <div className="formButtons">

                <button

                    className="saveButton"

                    disabled={

                        selectedFaces.length === 0 ||

                        !treatmentData.treatmentId

                    }

                    onClick={applyTreatment}

                >

                    Aplicar tratamiento

                </button>

            </div>
        </div>

    );

}

export default TreatmentPanel;