import React from "react";

export const Checkbox = ({ options, value, setValue }) => {
    // handling the changes
    const handleChange = (e) => {
        if (e.target.checked) {
            setValue([...value, e.target.value]);
        } else {
            setValue(value.filter((item) => item !== e.target.value));
        }
    };

    return (
        <>
            {options.map((option) => (
                <label key={option}>
                    <input
                        type="checkbox"
                        value={option}
                        onChange={handleChange}
                        checked={value.includes(option)}
                    />
                    {option}
                </label>
            ))}
        </>
    );
};
