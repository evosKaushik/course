import { useState } from "react";

export default function Counter({ counterName }) {
  const [count, setCount] = useState(2);
  const [name, setName] = useState(counterName);
  const [handleBtn, setHandleBtn] = useState(false)
  console.log("rendering");

  return (
    <div style={{ textAlign: "center", paddingTop: "2rem" }}>
      <h1>{count}</h1>
      <button
        style={{
          fontSize: "20px",
          marginTop: "20px",
        }}
        onClick={() => {
          console.log(count);
          setCount((previousState) => previousState + 1);
          setCount((previousState) => previousState + 1);
          setCount((previousState) => previousState + 1);
          console.log(count);
          setHandleBtn(!handleBtn)
        }}
      >
        Increase Count
      </button>
      <div className="box"
      style={{
        height: '200px',
        width: '200px',
        backgroundColor: 'red',
      }}
      
      ></div>
    </div>
  );
}
