import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, division, multiplication } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(division())}>/</button>
        <button onClick={() => dispatch(multiplication())}>*</button>
      </div>
    </section>
  );
};

export default Counter;
