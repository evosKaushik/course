import AppleBasket from "./AppleBasket";
import Button from "./Button";

import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));


import "../style.css";

const totalAppleCount = 10;

let rightAppleCount = 0;
let leftAppleCount = totalAppleCount - rightAppleCount;

const AppleCounter = () => {
  const leftClickHandler = () => {
    leftAppleCount--;
    rightAppleCount++;
  };
  const rightClickHandler = () => {
    rightAppleCount--;
    leftAppleCount++;
  };
  return (
    <>
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
      <p
        style={{
          textAlign: "center",
          fontSize: "16px",
          marginTop: "32px",
        }}
      >
        <button
          onClick={() => {
            root.render(<AppleCounter />);
          }}
        >
          Re - Render
        </button>
      </p>
    </>
  );
};

export default AppleCounter;
