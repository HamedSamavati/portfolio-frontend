import React from "react";
import Navbar from "./Navbar";
import { PiSunDimLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import "../styles/Header.scss";
function Header() {
  return (
    <>
      <header>
        <button className="theme-button">
          <PiSunDimLight />
        </button>
        <Navbar />
        <button className="contact-button">
          <Link to="/contact">Contact</Link>
        </button>
        <select name="language" id="language">
          <option value="English" defaultValue>
            En
          </option>
          <option value="French">Fr</option>
          <option value="Persian">Fa</option>
        </select>
        <div>
          <button className="login-button">Login</button>
          <button className="register-button">Register</button>
        </div>
      </header>
    </>
  );
}

export default Header;
