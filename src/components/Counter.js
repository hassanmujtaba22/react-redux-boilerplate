import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
  // const [counter, setCounter] = useState(0);
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const counter = useSelector((state) => {
    return state.counter;
  });
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button
        onClick={
          // () => setCounter(counter + 1)
          () => dispatch({ type: "INCREMENT" })
        }
      >
        Increment
      </button>
      <button
        onClick={
          // () => setCounter(counter - 1)
          () => dispatch({ type: "DECREMENT" })
        }
      >
        Decrement
      </button>
      <div>
        Input value to Increment the counter
        <input type="text" onChange={(e) => setValue(e.target.value)} />
        <button
          onClick={
            // () => setCounter(counter + Number(value))
            () => dispatch({ type: "INCREMENTBYVALUE", payload: Number(value) })
          }
        >
          Increment by Input value
        </button>
      </div>
    </>
  );
};
export default Counter;
