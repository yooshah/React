import React, { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div>
      <TodoApp />
    </div>
  );
}

function TodoApp() {
  const [input, setInput] = useState([]);

  console.log(input);

  return (
    <div>
      <Header />
      <ActivityForm Addinput={setInput} input={input} />
      <Activity input={input} Addinput={setInput} />
      <Footer Addinput={setInput} />
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1>Todo App</h1>
    </div>
  );
}

function ActivityForm({ input, Addinput }) {
  const [addWork, setAddWork] = useState("");

  function handleAddWork(work) {
    let id = Date.now();
    work = { work: work, completed: false, key: id };
    Addinput([...input, work]);
    setAddWork(" ");
  }

  return (
    <div className="add-form">
      <input
        type="text"
        placeholder="Add Works"
        value={addWork}
        onChange={(e) => setAddWork(e.target.value)}
      />
      <button onClick={() => handleAddWork(addWork)}>Add</button>
    </div>
  );
}

function Activity({ input, Addinput }) {
  function handleToggle(key) {
    let toggleinput = input.map((val) => {
      if (val.key == key) return { ...val, completed: !val.completed };
    });
    Addinput(toggleinput);
  }
  function handleRemove(key) {
    const updatedInput = input.filter((val) => val.key !== key);
    Addinput(updatedInput);
  }
  return (
    <div>
      <ul className="list">
        {input.map((workItems) => (
          <WorkItem
            key={workItems.key}
            workItems={workItems}
            onToggleItem={handleToggle}
            onRemove={handleRemove}
          />
        ))}
      </ul>
    </div>
  );
}
function WorkItem({ workItems, onToggleItem, onRemove }) {
  console.log(workItems.completed);
  return (
    <li>
      <input
        type="checkbox"
        value={workItems.completed}
        onChange={() => onToggleItem(workItems.key)}
      />
      <span
        style={workItems.completed ? { textDecoration: "line-through" } : {}}
      >
        {" "}
        {workItems.work}
      </span>
      <button onClick={() => onRemove(workItems.key)}>❌</button>
    </li>
  );
}

function Footer({ Addinput }) {
  return (
    <footer className="stats ">
      <button onClick={() => Addinput([])}>Clear All</button>
    </footer>
  );
}
