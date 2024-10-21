import { useContext, useState } from "react";
import { NoteContext } from "../NoteProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function EachNote() {
  const { editNote, note, setNote } = useContext(NoteContext);
  const initialValue = {
    title: editNote.title,
    description: editNote.description,
    color: editNote.color,
  };
  console.log(initialValue.color);
  const [formData, setFormData] = useState(initialValue);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const edditNotes = async () => {
      try {
        const response = await axios.patch(
          `http://localhost:5000/note/${editNote.id}`,
          {
            title: formData.title,
            description: formData.description,
            color: formData.colour,
          }
        );
        console.log(note);

        console.log(response.data);
        const updatedNotes = note.map((val) => {
          if (val.id === response.data.id) {
            return response.data;
          }
          return val;
        });
        console.log(updatedNotes);
        setNote(updatedNotes);
        navigate("/note");
        return;
      } catch (err) {
        console.error("add note:", err);
      }
    };
    edditNotes();
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
            value={formData.color}
            onChange={handleChange}
            type="color"
            required
          />

          <button type="submit">Edit</button>
        </form>
      </div>
      <button onClick={() => navigate("/note")}>Go back</button>
    </div>
  );
}

export default EachNote;
