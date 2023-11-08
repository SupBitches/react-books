import React, { useContext } from "react";
import CounterContext from "../context/Counter";

export const Counter = () => {
  const { count, incrementCount } = useContext(CounterContext);
  return (
    <div style={{ float: "right" }}>
      <label>Counter</label>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};
