import ReducerHookTest from "./ReducerHookTest";
import "./styles.css";

import { useState, useRef, useReducer } from "react";

export default function App() {
  return (
    <div className="App">
      <RefHookTest />
      <ReducerHookTest />
    </div>
  );
}

function RefHookTest() {
  const inputRef = useRef(null);
  const colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#F3FF33",
    "#FF33A1",
    "plum",
  ];

  function handleFocus() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    inputRef.current.style.backgroundColor = colors[randomIndex];
  }

  return (
    <div className="ref-test" ref={inputRef}>
      <button onClick={handleFocus}>Change Color</button>
    </div>
  );
}
