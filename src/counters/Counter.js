import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  increment,
  decrement,
  division,
  multiplication,
  reset,
  inputIncrement,
} from "./counterSlice";

const Counter = () => {
  const counter = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [inputIncrementAmount, setInputIncrementAmount] = useState(0);

  const addInputAmount = Number(inputIncrementAmount) || 0;

  const resetCounter = () => {
    setInputIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <section>
      <p id="display-counter">Counter = {counter}</p>
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
        <div className="input">
          <label>Input Amount : </label>
          <input
            type="number"
            value={inputIncrementAmount}
            onChange={(event) => setInputIncrementAmount(event.target.value)}
          />
        </div>
        <div className="extra-buttons">
          <button onClick={() => dispatch(inputIncrement(addInputAmount))}>
            Add Input Amount
          </button>
          <button onClick={resetCounter}>Reset</button>
        </div>
      </div>
    </section>
  );
};

export default Counter;
