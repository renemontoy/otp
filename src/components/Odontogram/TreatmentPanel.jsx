import "./TreatmentPanel.css";
import "./Odontogram.css";
import { useEffect, useState } from "react";
import { getTreatments, getMaterialsByTreatment } from "../../supabase/tratamientos";

function TreatmentPanel({ selectedTeeth, treatmentData, setTreatmentData  }) {
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

        if (!treatmentId) {

            setMaterials([]);

            return;

        }

        const data = await getMaterialsByTreatment(treatmentId);

        setMaterials(

            data.map(item => item.materiales)

        );

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
    return (

        <div className="treatmentPanel">
            <div className="formGroup">
            <p>

                Dientes seleccionados:

            </p>

            <strong>

                {selectedTeeth.length > 0

                    ? selectedTeeth.join(", ")

                    : ""}

            </strong>
            </div>

            <div className="formGroup">
            <label>
                    Tratamiento
            </label>
            <select
                name="treatmentId"
                disabled={selectedTeeth.length === 0}
                value={treatmentData.treatmentId}
                onChange={handleTreatmentChange}

            >

                <option value="">

                    Seleccionar

                </option>

                {treatments.map((treatmentId) => (

                    <option

                        key={treatmentId.id}

                        value={treatmentId.id}

                    >

                        {treatmentId.nombre}

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
                        disabled={selectedTeeth.length === 0}
                        value={treatmentData.materialId}
                        onChange={handleMaterialChange}
                    >

                        <option value="">
                            Seleccionar
                        </option>

                        {materials.map((materialId) => (

                            <option
                                key={materialId.id}
                                value={materialId.id}
                            >
                                {materialId.nombre}
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
                disabled={selectedTeeth.length === 0}
                value={treatmentData.observations}
                onChange={handleChange}

            />
            </div>

        </div>

    );

}

export default TreatmentPanel;