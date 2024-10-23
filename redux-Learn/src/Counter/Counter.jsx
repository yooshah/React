import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  // Get count from the Redux store
  const count = useSelector((state) => state.count);
  // Use dispatch to send actions
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch({ type: "counter/increment" })}>
        INCREMENT
      </button>
      <h3>{count}</h3>
      <button onClick={() => dispatch({ type: "counter/decrement" })}>
        DECREMENT
      </button>
    </div>
  );
}

export { Counter };
