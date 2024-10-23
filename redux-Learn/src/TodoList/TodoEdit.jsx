function TodoEdit({ setEditForm, editForm, handleSave }) {
  const handleChange = (e) => {
    setEditForm(e.target.value);
  };
  return (
    <div>
      <input type="text" value={editForm} onChange={handleChange} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default TodoEdit;
