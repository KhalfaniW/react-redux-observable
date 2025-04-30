import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, incrementAsync } from "../../store/reducers/counterReducer";

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counter.value);
  const loading = useSelector((state) => state.counter.loading);

  return (
    <div>
      <h1>Counter: {value}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(incrementAsync())} disabled={loading}>
        {loading ? "Loading..." : "Increment Async"}
      </button>
    </div>
  );
};

export default Counter;
