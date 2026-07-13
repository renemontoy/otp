function FamilyDataStep({

    formData,

    handleChange

}){

    return(

        <>
            
            <div className="formGroup">
                <h2>Antecedentes Heredo-Familiares</h2>
                <label>Padre</label>

                <input

                    name="antecedentes_padre"

                    value={formData.antecedentes_padre}

                    onChange={handleChange}

                />

            </div>

            <div className="formGroup">

                <label>Madre</label>

                <input

                    name="antecedentes_madre"

                    value={formData.antecedentes_madre}

                    onChange={handleChange}

                />

            </div>

            <div className="formGroup">

                <label>Abuelo Paterno</label>

                <input

                    name="antecedentes_abuelo_paterno"

                    value={formData.antecedentes_abuelo_paterno}

                    onChange={handleChange}

                />

            </div>

            <div className="formGroup">

                <label>Abuelo Materno</label>

                <input

                    name="antecedentes_abuelo_materno"

                    value={formData.antecedentes_abuelo_materno}

                    onChange={handleChange}

                />

            </div>

            <div className="formGroup">

                <label>Abuela Paterna</label>

                <input

                    name="antecedentes_abuela_paterna"

                    value={formData.antecedentes_abuela_paterna}

                    onChange={handleChange}

                />

            </div>

            <div className="formGroup">

                <label>Abuela Materna</label>

                <input

                    name="antecedentes_abuela_materna"

                    value={formData.antecedentes_abuela_materna}

                    onChange={handleChange}

                />

            </div>

            <div className="formGroup">

                <label>Hermanos</label>

                <input

                    name="antecedentes_hermanos"

                    value={formData.antecedentes_hermanos}

                    onChange={handleChange}

                />

            </div>

        </>

    )

}

export default FamilyDataStep;