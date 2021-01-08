import React, { useState } from "react";
import CounterDisplay from "./CounterDisplay";
import { useDispatch } from "react-redux";
import { increament, decreament, increamentByValue } from "../Store/action";
const Counter = () => {
  // const [counter, setCounter] = useState(0);
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  // const counter = useSelector((state) => {
  //   return state.counter;
  // });
  return (
    <>
      <CounterDisplay />
      <button
        onClick={
          // () => setCounter(counter + 1)
          // () => dispatch({ type: "INCREMENT" })
          () => {
            dispatch(increament());
          }
        }
      >
        Increment
      </button>
      <button
        onClick={
          // () => setCounter(counter - 1)
          // () => dispatch({ type: "DECREMENT" })
          () => {
            dispatch(decreament());
          }
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
            // () => dispatch({ type: "INCREMENTBYVALUE", payload: Number(value) })
            () => {
              dispatch(increamentByValue(Number(value)));
            }
          }
        >
          Increment by Input value
        </button>
      </div>
    </>
  );
};
export default Counter;
