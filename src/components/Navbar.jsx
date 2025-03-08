import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ onLinkClick }) {
  return (
    <nav className="navbar">
      <NavLink to="/" onClick={onLinkClick}>
        Home
      </NavLink>
      <NavLink to="/about" onClick={onLinkClick}>
        About
      </NavLink>
      <NavLink to="/projects" onClick={onLinkClick}>
        Projects
      </NavLink>
      <NavLink to="/news" onClick={onLinkClick}>
        News
      </NavLink>
      <NavLink to="/experience" onClick={onLinkClick}>
        Experience
      </NavLink>
      <NavLink to="/resume" onClick={onLinkClick}>
        Resume
      </NavLink>
    </nav>
  );
}

export default Navbar;
