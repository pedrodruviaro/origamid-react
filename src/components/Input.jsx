export const Input = ({ label, id, value, setValue, ...rest }) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                type="text"
                id={id}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                {...rest}
            />
        </>
    );
};
