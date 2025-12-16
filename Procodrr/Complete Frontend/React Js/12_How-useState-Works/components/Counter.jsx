import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(2);
  const [name, setName] = useState("Kaushik");
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
        }}
      >
        Increase Count
      </button>
    </div>
  );
}
