import '../style.css'

const Button = ({arrowIcon, buttonTitle, onClickHandler}) => {
  return (
    <button title={buttonTitle} onClick={onClickHandler}>
        <i className={arrowIcon}></i>
    </button>
  )
}

export default Button
