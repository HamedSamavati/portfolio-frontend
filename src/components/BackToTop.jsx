import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
import "../styles/BackToTop.scss";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`back-to-top ${isVisible ? "show" : "hide"}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <IoIosArrowUp className="arrow-icon" />
    </button>
  );
};

export default BackToTop;
