import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import AppC2 from "./AppC2.jsx";
import "./index.css";
import { Provider } from "react-redux";
// import store from "./Store c3.jsx";

import store from "./Store.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <Provider store={store}>
  //     <AppC2 />
  //   </Provider>
  // </StrictMode>
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
