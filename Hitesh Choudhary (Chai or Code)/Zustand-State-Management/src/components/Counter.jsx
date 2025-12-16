
import CounterButton from "./CounterButton.jsx";
import CounterReset from "./CounterReset.jsx";
import CounterValue from "./CounterValue.jsx";

const Counter = () => {
  return (
    <div>
      <CounterValue />
      <CounterButton />
      <CounterReset />
    </div>
  );
};

export default Counter;
