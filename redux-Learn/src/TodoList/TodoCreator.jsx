import { useState } from "react";

function TodoCreator() {
  const [formData, setFormData] = useState("");

  const handleChange = (e) => {
    setFormData(e.target.value);
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
        <button>Add</button>
      </div>
    </>
  );
}

export default TodoCreator;
