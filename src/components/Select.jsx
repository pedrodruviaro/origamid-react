import React from "react";

export const Select = ({ options, value, setValue, ...rest }) => {
    return (
        <select
            value={value}
            onChange={(e) => setValue(e.target.value)}
            {...rest}
        >
            <option value="" disabled>
                Selecione
            </option>

            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};
