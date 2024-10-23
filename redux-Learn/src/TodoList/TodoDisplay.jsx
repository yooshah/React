import { useSelector } from "react-redux";
import TodoList from "./TodoList";

function TodoDisplay() {
  const todoActivites = useSelector((store) => store.todo.todo);
  console.log(todoActivites);

  return (
    <>
      {" "}
      {todoActivites.length > 0 && (
        <div>
          <ul>
            {todoActivites.map((item, ind) => (
              <TodoList activity={item} id={ind} key={ind} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default TodoDisplay;
