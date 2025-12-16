import AppleBasket from "./AppleBasket";
import Button from "./Button";

import '../style.css'

const AppleCounter = () => {
  return (
    <section>
      <AppleBasket noOfApples="10" noOfApplesInBasket="1" />

      <Button arrowIcon="ri-arrow-right-line" buttonTitle='Left Arrow' />

      <Button arrowIcon="ri-arrow-left-line" buttonTitle='Right Arrow' />

      <AppleBasket noOfApples="0" noOfApplesInBasket="2" />
    </section>
  );
};

export default AppleCounter;
