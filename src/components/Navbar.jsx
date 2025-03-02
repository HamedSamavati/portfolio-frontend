import React, { useState, useEffect } from "react";
import "../styles/Navbar.scss";
import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  // Predefined color schemes for different routes
  const routeColors = {
    "/": ["#FF6B6B", "#4ECDC4", "#45B7D1"], // Home
    "/about": ["#FF61D2", "#FE9090", "#FFC674"], // About
    "/projects": ["#4158D0", "#C850C0", "#FFCC70"], // Projects
    "/contact": ["#43C6AC", "#191654", "#43C6AC"], // Contact
    "/news": ["#8EC5FC", "#E0C3FC", "#FF9A8B"], // News
    "/experience": ["#0093E9", "#80D0C7", "#A7F3D0"], // Experience
    "/resume": ["#8BC6EC", "#9599E2", "#B5FFFC"], // Resume
  };

  const [gradientColors, setGradientColors] = useState(routeColors["/"]);

  useEffect(() => {
    // Update colors based on current route
    const newColors = routeColors[location.pathname] || routeColors["/"];
    setGradientColors(newColors);
  }, [location]);

  const gradientStyle = {
    "--gradient-color-1": gradientColors[0],
    "--gradient-color-2": gradientColors[1],
    "--gradient-color-3": gradientColors[2],
  };

  return (
    <nav className="navbar" style={gradientStyle}>
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
