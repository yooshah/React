import Note from "./Note";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import EachNote from "./Components/EachNote";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Note />} />
          <Route path="/note" element={<Home />} />
          <Route path="/editnote" element={<EachNote />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
