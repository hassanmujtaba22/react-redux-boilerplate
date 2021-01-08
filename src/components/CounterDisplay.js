import React from "react";
import { useSelector } from "react-redux";
const CounterDisplay = () => {
  const counter = useSelector((state) => {
    return state.counter;
  });
  return (
    <>
      <h1>Counter: {counter}</h1>
    </>
  );
};
export default CounterDisplay;
