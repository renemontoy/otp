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

}

    async function handleTreatmentChange(e) {

        const treatmentId = e.target.value;

        setTreatmentData({

            ...treatmentData,

            treatment: treatmentId,

            material: ""

        });

        if (!treatmentId) {

            setMaterials([]);

            return;

        }

        const data = await getMaterialsByTreatment(treatmentId);

        setMaterials(

            data.map(item => item.materiales)

        );

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
                name="treatment"
                disabled={selectedTeeth.length === 0}
                value={treatmentData.treatment}
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
                        name="material"
                        disabled={selectedTeeth.length === 0}
                        value={treatmentData.material}
                        onChange={handleChange}
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
                disabled={selectedTeeth.length === 0}
                value={treatmentData.observations}
                onChange={handleChange}

            />
            </div>

        </div>

    );

}

export default TreatmentPanel;