import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NoteProvider } from "./NoteProvider.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NoteProvider>
      <App />
    </NoteProvider>
  </StrictMode>
);
