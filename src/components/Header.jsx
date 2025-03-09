import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { PiSunDimLight, PiMoonStarsLight } from "react-icons/pi";
import { FaChevronDown } from "react-icons/fa";
import "../styles/Header.scss";
import Login from "./Login";
import Register from "./Register";
import { FaPowerOff } from "react-icons/fa";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("En");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

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

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

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

  const handleRegister = () => {
    setIsRegisterOpen(isRegisterOpen === true ? false : true);
    setIsLoginOpen(false);
  };
  const handleLogin = () => {
    setIsLoginOpen(isLoginOpen === true ? false : true);
    setIsRegisterOpen(false);
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

        {isLoggedIn ? (
          <div className="user-logout-container">
            <p className="user-name">Welcome, {user.firstName} </p>
            <button className="logout-button" onClick={handleLogout}>
              <FaPowerOff />
            </button>
          </div>
        ) : (
          <div className="login-register-buttons">
            <button className="login-button" onClick={handleLogin}>
              Login
            </button>
            <button className="register-button" onClick={handleRegister}>
              Register
            </button>
          </div>
        )}
      </header>

      {isLoginOpen && (
        <Login
          setUser={setUser}
          setIsLoggedIn={setIsLoggedIn}
          setIsLoginOpen={setIsLoginOpen}
        />
      )}
      {isRegisterOpen && (
        <Register
          setUser={setUser}
          setIsLoggedIn={setIsLoggedIn}
          setIsRegisterOpen={setIsRegisterOpen}
        />
      )}

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

          {!isLoggedIn && (
            <div className="login-register-buttons-mobile">
              <button
                className="login-button"
                onClick={() =>
                  setIsLoginOpen(isLoginOpen === true ? false : true)
                }
              >
                Login
              </button>
              <button
                className="register-button"
                onClick={() =>
                  setIsRegisterOpen(isRegisterOpen === true ? false : true)
                }
              >
                Register
              </button>
            </div>
          )}
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
