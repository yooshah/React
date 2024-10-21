import { NoteContext } from "../NoteProvider";
import { useContext } from "react";
import NoteList from "./NoteList";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const { note, setNote } = useContext(NoteContext);
  const navigate = useNavigate();
  console.log(note);
  const deleteNote = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/note/${id}`);
      console.log(response);
      const filteredNote = note.filter((val) => val.id !== response.data.id);
      setNote(filteredNote);
    } catch (err) {
      console.error("delete note error", err);
    }
  };
  return (
    <div>
      <ul>
        {note.map((val, ind) => (
          <NoteList item={val} key={ind} deleteNote={deleteNote} />
        ))}
      </ul>
      <button onClick={() => navigate("/")}>bacK to Note📝</button>
    </div>
  );
}

export default Home;
