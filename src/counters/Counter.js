import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, division, multiplication } from "./counterSlice";

const Counter = () => {
  const counter = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <section>
      <p>Counter = {counter}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(division())}>/</button>
        <button onClick={() => dispatch(multiplication())}>*</button>
        <div className="actions">
          <p>Add</p>
          <p>Subtract</p>
          <p>Divide</p>
          <p>Multiply</p>
        </div>
      </div>
    </section>
  );
};

export default Counter;
