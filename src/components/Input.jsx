export const Input = ({
    label,
    id,
    value,
    onChange,
    onBlur,
    type,
    placeholder,
    error,
}) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
            />
            {error && <p>{error}</p>}
        </>
    );
};
