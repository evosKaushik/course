import AppleBasket from "./AppleBasket";
import Button from "./Button";
import { useState, Fragment} from "react";
import "../style.css";


console.log(<Fragment></Fragment>)


const AppleCounter = () => {
  const totalAppleCount = 10;

  const [rightAppleCount, setRightAppleCount] = useState(0);
  const [leftAppleCount, setLeftAppleCount] = useState(
    totalAppleCount - rightAppleCount
  );

  const leftClickHandler = () => { 
    if (leftAppleCount === 0) return 
    setRightAppleCount(rightAppleCount + 1);
    setLeftAppleCount(leftAppleCount - 1);
  };
  
  const rightClickHandler = () => {
    if (rightAppleCount === 0) return 
    setLeftAppleCount(leftAppleCount + 1);
    setRightAppleCount(rightAppleCount - 1);
  };

  return (
    <Fragment>
      <section>
        <AppleBasket noOfApples={leftAppleCount} noOfApplesInBasket="1" /> 

        <Button
          onClickHandler={leftClickHandler}
          arrowIcon="ri-arrow-right-line"
          buttonTitle="Left Arrow"
        />

        <Button
          onClickHandler={rightClickHandler}
          arrowIcon="ri-arrow-left-line"
          buttonTitle="Right Arrow"
        />

        <AppleBasket noOfApples={rightAppleCount} noOfApplesInBasket="2" />
      </section>
    </Fragment>
  );
};

export default AppleCounter;
