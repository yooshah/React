import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addActivity } from "./TodoSlice";

function TodoCreator() {
  const [formData, setFormData] = useState("");

  const todoActivites = useSelector((store) => store.todo.todo);
  console.log(todoActivites);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleClick = () => {
    if (!formData.trim()) return;
    dispatch(addActivity(formData));
    setFormData("");
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="What to do next?"
          value={formData}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Add</button>
      </div>
    </>
  );
}

export default TodoCreator;
