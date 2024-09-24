import { useReducer } from "react";

function reducer(state, action) {
  const initialState = { count: 0, step: 1 };
  console.log(action, state);
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step };
    case "dec":
      return { ...state, count: state.count - state.step };
    case "typeCount":
      return { ...state, count: action.payload };
    case "defineStep":
      return { ...state, step: action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error("Unknown action");
  }
}
export default function ReducerHookTest() {
  const initialState = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, initialState);

  const { count, step } = state;

  function defineCount(e) {
    dispatch({ type: "typeCount", payload: Number(e.target.value) });
  }
  const inc = function () {
    dispatch({ type: "inc" });
  };
  const dec = function () {
    dispatch({ type: "dec" });
  };

  function defineStep(e) {
    dispatch({ type: "defineStep", payload: Number(e.target.value) });
  }

  return (
    <div className="reducer-test">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <h4 className="count-display">steps: {state.step}</h4>
      </div>
      <button onClick={dec}>➖</button>
      <input type="text" onChange={defineCount} value={count} />
      <button onClick={inc}>➕</button>
      <h3 className="count-display">{count}</h3>
      <div>
        <button onClick={() => dispatch({ type: "reset" })}> Reset</button>
      </div>
    </div>
  );
}
