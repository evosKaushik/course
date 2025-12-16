const Input = ({ id, name, value, onChange, error, label }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} value={value} onChange={onChange} />
      <p className="error">{error}</p>
    </>
  );
};

export default Input;
