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

                    name="nombre_padre"

                    value={formData.nombre_padre}

                    onChange={handleChange}

                />

            </div>

            <div className="formGroup">

                <label>Madre</label>

                <input

                    name="nombre_madre"

                    value={formData.nombre_madre}

                    onChange={handleChange}

                />

            </div>

            <div className="formGroup">

                <label>Abuelo Paterno</label>

                <input

                    name="nombre_abuelo_paterno"

                    value={formData.nombre_abuelo_paterno}

                    onChange={handleChange}

                />

            </div>

            <div className="formGroup">

                <label>Abuelo Materno</label>

                <input

                    name="nombre_abuelo_materno"

                    value={formData.nombre_abuelo_materno}

                    onChange={handleChange}

                />

            </div>

            <div className="formGroup">

                <label>Abuela Paterna</label>

                <input

                    name="nombre_abuela_paterna"

                    value={formData.nombre_abuela_paterna}

                    onChange={handleChange}

                />

            </div>

            <div className="formGroup">

                <label>Abuela Materna</label>

                <input

                    name="nombre_abuela_materna"

                    value={formData.nombre_abuela_materna}

                    onChange={handleChange}

                />

            </div>

            <div className="formGroup">

                <label>Hermanos</label>

                <input

                    name="nombre_hermanos"

                    value={formData.nombre_hermanos}

                    onChange={handleChange}

                />

            </div>

        </>

    )

}

export default FamilyDataStep;