import { useState, useContext } from "react";
import axios from "axios";
import { NoteContext } from "./NoteProvider";
import { useNavigate } from "react-router-dom";

function Note() {
  const initialValue = {
    title: "",
    description: "",
    colour: "",
  };
  const [formData, setFormData] = useState(initialValue);
  const { setNote, note } = useContext(NoteContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const addNotes = async () => {
      try {
        const response = await axios.post("http://localhost:5000/note", {
          title: formData.title,
          description: formData.description,
          color: formData.colour,
        });
        console.log(response.data);

        setNote([...note, response.data]);
        setFormData(initialValue);
        console.log(note);
      } catch (err) {
        console.error("add note:", err);
      }
    };
    addNotes();
    navigate("/note");
  };

  return (
    <div>
      <h2>Note APP</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <input
            name="colour"
            value={formData.colour}
            onChange={handleChange}
            type="color"
            required
          />

          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}

export default Note;
