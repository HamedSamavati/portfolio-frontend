import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.scss";
import Subscription from "./Subscription";
import SocialLink from "./SocialLink";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-grid">
          {/* About Column */}
          <div className="footer-col">
            <h4>About Me</h4>
            <p>
              Full-Stack Developer specializing in creating innovative and
              efficient web solutions.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <nav className="footer-nav">
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/experience">Experience</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>

          {/* Connect Column */}
          <div className="footer-col">
            <h4>Stay Inspired. Stay Ahead.</h4>
            <Subscription />
            <div className="footer-social">
              <p>Let's connect</p>
              <SocialLink />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Hamed Samavati. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
