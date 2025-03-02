import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/news">News</NavLink>
      <NavLink to="/experience">Experience</NavLink>
      <NavLink to="/resume">Resume</NavLink>
    </nav>
  );
}

export default Navbar;
