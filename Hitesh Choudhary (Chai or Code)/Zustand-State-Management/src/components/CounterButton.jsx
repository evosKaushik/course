import { useCounterStore } from "../store/counterStore";

const CounterButton = () => {
  const increase = useCounterStore((state) => state.increase);
  const decrease = useCounterStore((state) => state.decrease);
  return (
    <>
      <button type="button" onClick={decrease}>
        -
      </button>
      <button type="button" onClick={increase}>
        +
      </button>
    </>
  );
};

export default CounterButton;
