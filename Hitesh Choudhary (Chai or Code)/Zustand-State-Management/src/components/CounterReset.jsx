import { useCounterStore } from "../store/counterStore";

const CounterReset = () => {
  const reset = useCounterStore((state) => state.reset);
  return (
    <button type="button" onClick={reset}>
      Rest
    </button>
  );
};

export default CounterReset;
