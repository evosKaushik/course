const Select = ({
  id,
  name,
  label,
  value,
  onChange,
  error,
  optionArray,
  defaultOption,
  isHidden,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} value={value} onChange={onChange}>
        {defaultOption && (
          <option value="" hidden={isHidden}>
            {defaultOption}
          </option>
        )}
        {optionArray?.map((option, index) => (
          <option key={option + index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <p className="error">{error}</p>
    </>
  );
};

export default Select;
