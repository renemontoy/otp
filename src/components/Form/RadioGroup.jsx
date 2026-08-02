import "./RadioGroup.css";

function RadioGroup({
    label,
    name,
    value,
    options,
    onChange
}) {

    return (

        <div className="formGroup radioField">

            <span className="groupLabel">

                {label}

            </span>

            <div
                className="radioGroup"
                role="radiogroup"
                aria-label={label}
            >

                {options.map((option) => {

                    const inputId =
                        `${name}-${option.value}`
                            .toLowerCase()
                            .replace(/\s+/g, "-");

                    return (

                        <label
                            key={option.value}
                            htmlFor={inputId}
                            className="radioOption"
                        >

                            <input
                                id={inputId}
                                type="radio"
                                name={name}
                                value={option.value}
                                checked={value === option.value}
                                onChange={onChange}
                            />

                            <span className="radioLabel">

                                {option.label}

                            </span>

                        </label>

                    );

                })}

            </div>

        </div>

    );

}

export default RadioGroup;