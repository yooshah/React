import { useState } from "react";
import TodoEdit from "./TodoEdit";
import { useDispatch } from "react-redux";
import { deleteActivity, editActivity } from "./TodoSlice";

function TodoList({ activity, id }) {
  const [editForm, setEditForm] = useState("");
  const [editToggle, setEditToggle] = useState(false);

  const dispatch = useDispatch();

  const handleEdit = () => {
    setEditForm(activity);
    setEditToggle(true);
  };

  console.log(editToggle);
  console.log(editForm);
  const handleSave = () => {
    const editData = editForm;
    dispatch(editActivity(id, editData));
    setEditForm("");
    setEditToggle(false);
  };

  const handleDelete = () => {
    dispatch(deleteActivity(id));
    setEditForm("");
    setEditToggle(false);
  };

  return (
    <li>
      <div>
        {activity} &nbsp; &nbsp; <button onClick={handleEdit}> Edit🖋️</button>{" "}
        &nbsp; &nbsp;{" "}
        <span style={{ cursor: "pointer" }} onClick={handleDelete}>
          ❌
        </span>{" "}
        &nbsp; &nbsp; &nbsp;
        {editToggle && editForm.length > 0 && (
          <TodoEdit
            setEditForm={setEditForm}
            editForm={editForm}
            handleSave={handleSave}
          />
        )}
      </div>
    </li>
  );
}

export default TodoList;
