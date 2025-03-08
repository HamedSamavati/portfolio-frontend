import React, { useContext } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaDribbble,
  FaCodepen,
} from "react-icons/fa";
import "../styles/SocialLink.scss";
import { ThemeContext } from "../contexts/ThemeContext";

function SocialLink() {
  const darkColor = "#ffd700";
  const lightColor = "#e1c16e";
  const { theme } = useContext(ThemeContext);
  return (
    <div className="social-link-container">
      <a target="_blank" href="https://www.linkedin.com/in/hamed-samavati/">
        <FaLinkedin fill={theme === "dark" ? darkColor : lightColor} />
      </a>
      <a target="_blank" href="https://github.com/hamedSamavati">
        <FaGithub fill={theme === "dark" ? darkColor : lightColor} />
      </a>
      <a target="_blank" href="https://x.com/hamedsamavat">
        <FaTwitter fill={theme === "dark" ? darkColor : lightColor} />
      </a>
      <a target="_blank" href="https://www.facebook.com/hamed.samavati.5">
        <FaDribbble fill={theme === "dark" ? darkColor : lightColor} />
      </a>
      <a target="_blank" href="https://www.instagram.com/hamedSamavaty/">
        <FaInstagram fill={theme === "dark" ? darkColor : lightColor} />
      </a>
      <a target="_blank" href="https://https://codepen.io/hamed-samavati">
        <FaCodepen fill={theme === "dark" ? darkColor : lightColor} />
      </a>
    </div>
  );
}

export default SocialLink;
