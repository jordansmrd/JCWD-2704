/** @format */

import { useContext } from "react";
import { CounterContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { types } from "../redux/reducers/counterReducers";
import { decrement, increment } from "../redux/slices/counterSlice";

function ContextCounterComponent() {
  const { setCount } = useContext(CounterContext);
  const counterSelector = useSelector((state) => state.counter);
  const counterSelector2 = useSelector((state) => state.counter2);

  const dispatch = useDispatch();
  const dynamicChange = (type) => {
    dispatch({
      type,
    });
  };

  return (
    <div
      style={{
        background: "black",
        width: "100%",
        padding: "20px",
        color: "white",
      }}
    >
      <button onClick={() => setCount((c) => c + 1)}>count up</button>
      <h1>{counterSelector.value}</h1>

      <button onClick={() => dynamicChange(types.increment)}>increment</button>
      <button onClick={() => dynamicChange(types.decrement)}>decrement</button>

      <h1>{counterSelector2.value}</h1>

      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
}
export default ContextCounterComponent;
