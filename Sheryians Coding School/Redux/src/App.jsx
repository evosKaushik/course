import { useDispatch, useSelector } from "react-redux";
import {
  clearCounter,
  decrement,
  increment,
  incrementByAmount,
} from "./redux/Slice/counterSlice";
import { useState } from "react";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [num, setNum] = useState(1);

  return (
    <>
      <h1>{count}</h1>
      <div className="btnContainer">
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrement
        </button>
        <div>
          <input
            type="number"
            value={num}
            onChange={(e) => setNum(e.target.value)}
          />
          <button
            onClick={() => {
              dispatch(incrementByAmount(parseInt(num)));
            }}
          >
            Increment by Amount
          </button>
        </div>
        <button
          onClick={() => {
            dispatch(clearCounter());
          }}
        >
          Clear
        </button>
      </div>
    </>
  );
};

export default App;
