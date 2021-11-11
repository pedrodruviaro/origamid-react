import React from "react";
import styles from "./Input.module.css";

export const Input = ({
    label,
    type,
    name,
    value,
    setValue,
    onChange,
    error,
    onBlur,
}) => {
    return (
        <div className={styles.wrapper}>
            <label className={styles.label} htmlFor={name}>
                {label}
            </label>
            <input
                className={styles.input}
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            {error && <p className={styles.error}>{error}</p>}
        </div>
    );
};
