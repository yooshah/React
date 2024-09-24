import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2 className="home">Home Page</h2>
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/contactUs">contact </Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
}

export default Home;
