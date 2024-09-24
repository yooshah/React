import React from "react";
import { Link, useNavigate } from "react-router-dom";

function ContactUs() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/"); // This will navigate to the home page
  };
  return (
    <div className="contact-box">
      <div>
        <h1>contactUs</h1>
        <h4>Email: BrideGeon@gmail.com</h4>
        <h4>Phone No:161545211</h4>
        <button onClick={goToHome}>🔙</button>
      </div>
    </div>
  );
}

export default ContactUs;
