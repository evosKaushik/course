import '../style.css'

const Button = ({arrowIcon, buttonTitle}) => {
  return (
    <button title={buttonTitle}>
        <i className={arrowIcon}></i>
    </button>
  )
}

export default Button
