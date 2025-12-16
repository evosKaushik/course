import "../style.css";

const Button = ({ arrowIcon, onClickHandler, children }) => {
  return (
    <button title={children} onClick={onClickHandler}>
      {children}
      <i className={arrowIcon}></i>
    </button>
  );
};

export default Button;
