import { useContext } from "react";
import { NoteContext } from "../NoteProvider";
import { useNavigate } from "react-router-dom";
/* eslint-disable react/prop-types */
function NoteList({ item, deleteNote }) {
  const { setEditNote } = useContext(NoteContext);
  const navigate = useNavigate();
  const handleDelete = () => {
    deleteNote(item.id);
  };

  const handleEditnote = () => {
    setEditNote({
      id: item.id,
      title: item.title,
      description: item.description,
      color: item.color,
    });
    navigate("/editnote");
  };
  return (
    <>
      <div
        style={{ backgroundColor: `${item.color}` }}
        onClick={handleEditnote}
      >
        <h2> Title{item.title}</h2>
        <h4>{item.description}</h4>
        <h4>{item.color}</h4>
      </div>
      <button onClick={handleDelete}> delete Note</button>
    </>
  );
}

export default NoteList;
