export const Radio = ({ options, value, setValue, ...rest }) => {
    // reatividade => relacionada ao checked
    return (
        <>
            {options.map((option) => (
                <label key={option}>
                    <input
                        type="radio"
                        value={option}
                        checked={value === option}
                        onChange={(e) => setValue(e.target.value)}
                        {...rest}
                    />
                    {option}
                </label>
            ))}
        </>
    );
};
