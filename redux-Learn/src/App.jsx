import TodoCreator from "./TodoList/TodoCreator";
import TodoHeader from "./TodoList/TodoHeader";
import TodoDisplay from "./TodoList/TodoDisplay";
function App() {
  return (
    <div>
      <TodoHeader />
      <TodoCreator />
      <TodoDisplay />
    </div>
  );
}

export default App;
