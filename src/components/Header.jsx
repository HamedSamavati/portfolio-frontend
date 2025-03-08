import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { PiSunDimLight, PiMoonStarsLight } from "react-icons/pi";
import { FaChevronDown } from "react-icons/fa";
import "../styles/Header.scss";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("En");
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY <= 0 || currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Handle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "";
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "";
  };

  const languages = [
    { value: "English", label: "En" },
    { value: "French", label: "Fr" },
  ];

  return (
    <>
      <header className={`header ${isVisible ? "visible" : ""}`}>
        <div className="header-left">
          {/* Hamburger Button - Shown on Mobile */}
          <button
            className={`hamburger-button ${isMobileMenuOpen ? "active" : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <button className="theme-button" onClick={toggleTheme}>
            {theme === "dark" ? (
              <PiSunDimLight fill="#e1c16e" />
            ) : (
              <PiMoonStarsLight fill="#e1c16e" />
            )}
          </button>
        </div>

        {/* Regular Navigation - Hidden on Mobile */}
        <nav className="header-center">
          <Navbar onLinkClick={closeMobileMenu} />
        </nav>

        <div className="header-right">
          <Link
            to="/contact"
            className="contact-button"
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
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
        </div>

        <div className="login-register-buttons">
          <button className="login-button">Login</button>
          <button className="register-button">Register</button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <div className="mobile-menu-items">
          <Navbar onLinkClick={closeMobileMenu} />
          <Link
            to="/contact"
            className="contact-button-mobile"
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
          <div className="login-register-buttons-mobile">
            <button className="login-button" onClick={closeMobileMenu}>
              Login
            </button>
            <button className="register-button" onClick={closeMobileMenu}>
              Register
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop Overlay */}
      <div
        className={`mobile-menu-backdrop ${isMobileMenuOpen ? "active" : ""}`}
        onClick={closeMobileMenu}
      />
    </>
  );
}

export default Header;
