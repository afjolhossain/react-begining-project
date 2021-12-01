import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav-container">
      <div>
        <p className="concert-name">Concert Of Genious</p>
      </div>

      <nav className="concert-route">
        <a href="/home">Home</a>
        <a href="/About-Us">About-Us</a>
        <a href="/Contact-us">Contact-Us</a>
      </nav>
    </div>
  );
};

export default Nav;
