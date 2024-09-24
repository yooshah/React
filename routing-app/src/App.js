import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Login from "./Pages/login";
import Registration from "./Pages/registration";
import ContactUs from "./Pages/contactUs";
import PageNotFound from "./Pages/pageNotFound-1";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Registration />} />
            <Route path="home" element={<Home />} />
            <Route path="contactUs" element={<ContactUs />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
