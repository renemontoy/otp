import "./RadioGroup.css";

function RadioGroup({

    label,
    name,
    value,
    options,
    onChange

}) {

    return (

        <div className="formGroup">

            <label className="groupLabel">

                {label}

            </label>

            <div className="radioGroup">

                {options.map((option) => (

                    <label
                        key={option.value}
                        className="radioOption"
                    >

                        <input
                            type="radio"
                            name={name}
                            value={option.value}
                            checked={value === option.value}
                            onChange={onChange}
                        />

                        {option.label}

                    </label>

                ))}

            </div>

        </div>

    );

}

export default RadioGroup;