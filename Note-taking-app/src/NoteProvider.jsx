import { createContext, useState, useEffect } from "react";
import axios from "axios";

const NoteContext = createContext();

function NoteProvider({ children }) {
  const [note, setNote] = useState([]);
  const [editNote, setEditNote] = useState(null);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await axios.get("http://localhost:5000/note");

        console.log(response.data);
        setNote(response.data);
      } catch (err) {
        console.error("fetch note error:", err);
      }
    };
    fetchNote();
  }, []);

  return (
    <NoteContext.Provider value={{ note, setNote, editNote, setEditNote }}>
      {children}
    </NoteContext.Provider>
  );
}

export { NoteProvider, NoteContext }; // Ensure proper casing for exports
