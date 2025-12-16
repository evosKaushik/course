import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

 return (
    <div style={{ textAlign: "center" }}>
      <p>{count}</p>
      <button
        style={{ fontSize: "20px", marginTop: "16px" }}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase Count
      </button>
    </div>
  );
};

export default Counter;
