function AntecedentesStep({

    formData,

    handleChange

}){

    return(

        <>
            
            <div className="formGroup">
                <h2>Antecedentes Personales</h2>
                <label>Antecedentes Personales Patológicos</label>

                <input

                    name="antecedentes_padre"

                    value={formData.antecedentes_personales}

                    onChange={handleChange}

                />

            </div>

        </>

    )

}

export default AntecedentesStep;