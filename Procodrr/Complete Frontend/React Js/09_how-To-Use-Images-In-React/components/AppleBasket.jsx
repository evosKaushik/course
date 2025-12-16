import '../style.css'


const AppleBasket = ({noOfApples, noOfApplesInBasket}) => {
  return (
    <div>
      <h1><span>{noOfApples}</span> Apples</h1>
      <p>Basket: <b>{noOfApplesInBasket}</b></p>
    </div>
  )
}

export default AppleBasket
