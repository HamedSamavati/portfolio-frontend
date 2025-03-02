import React from "react";
import Navbar from "./Navbar";
import { PiSunDimLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import "../styles/Header.scss";

import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("En");

  const languages = [
    { value: "English", label: "En" },
    { value: "French", label: "Fr" },
    { value: "Persian", label: "Fa" },
  ];
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
        <div className="custom-select" onClick={() => setIsOpen(!isOpen)}>
          <span>
            {selectedLang}
            <FaChevronDown />
          </span>
          {isOpen && (
            <div className="select-options">
              {languages.map((lang) => (
                <div
                  key={lang.value}
                  className="option"
                  onClick={() => setSelectedLang(lang.label)}
                >
                  {lang.label}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="login-register-buttons">
          <button className="login-button">Login</button>
          <button className="register-button">Register</button>
        </div>
      </header>
    </>
  );
}

export default Header;
