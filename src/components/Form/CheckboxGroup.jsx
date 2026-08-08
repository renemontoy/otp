import "./CheckboxGroup.css";

function CheckboxGroup({
    label,
    options,
    values,
    onChange
}) {

    return (

        <div className="formGroup checkboxField">

            {label && (

                <span className="groupLabel">
                    {label}
                </span>

            )}

            <div className="checkboxGroup">

                {options.map((option) => {

                    const inputId =
                        `${option.name}-${option.value}`
                            .toLowerCase()
                            .replace(/\s+/g, "-");

                    return (

                        <label
                            key={option.name}
                            htmlFor={inputId}
                            className="checkboxOption"
                        >

                            <input
                                id={inputId}
                                type="checkbox"
                                name={option.name}
                                checked={
                                    Boolean(
                                        values[
                                            option.name
                                        ]
                                    )
                                }
                                onChange={onChange}
                            />

                            <span className="checkboxLabel">

                                {option.label}

                            </span>

                        </label>

                    );

                })}

            </div>

        </div>

    );

}

export default CheckboxGroup;