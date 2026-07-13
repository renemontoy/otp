function MedicalDataStep({

    formData,

    handleChange

}){

    return(

        <>

            <div className="formGroup">
                <h2>Datos Médico</h2>

                <label>Nombre del médico familiar</label>

                <input
                    type="text"
                    name="medico_familiar"
                    value={formData.medico_familiar}
                    onChange={handleChange}
                />

            </div>

            <div className="formGroup">

                <label>Teléfono del medico familiar</label>

                <input
                    type="number"
                    name="telefono_medico_familiar"
                    value={formData.telefono_medico_familiar}
                    onChange={handleChange}
                />

            </div>

            <div className="formGroup">

                <label>Fecha última consulta médica odontológica</label>

                <input
                    type="date"
                    name="fecha_ultima_consulta"
                    value={formData.fecha_ultima_consulta}
                    onChange={handleChange}
                />

            </div>

            <div className="formGroup">

                <label>Motivo última consulta odontológica</label>

                <input
                    type="text"
                    name="motivo_ultima_consulta"
                    value={formData.motivo_ultima_consulta}
                    onChange={handleChange}
                />

            </div>
            <div className="formGroup">

                <label>En caso de emergencia llamar</label>

                <input
                    type="text"
                    name="persona_emergencia"
                    value={formData.persona_emergencia}
                    onChange={handleChange}
                />

            </div>
           <div className="formGroup">

                <label>Teléfono</label>

                <input
                    type="number"
                    name="telefono_emergencia"
                    value={formData.telefono_emergencia}
                    onChange={handleChange}
                />

            </div>
        </>

    )

}

export default MedicalDataStep;