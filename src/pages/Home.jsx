import React from "react";
import { Link } from "react-router-dom";
// import DynamicBackground from "../components/DynamicBackground";
import ThreeBackground from "../components/ThreeBackground";

function Home() {
  return (
    <ThreeBackground>
      {/* <div className="home-container">
        <div className="hero">
          <h1>Crafting High-End Web/Software Solution Excellence</h1>
          <h2>Full-Stack Solutions Tailored for Your Success</h2>
          <p>
            In today’s digital landscape, a powerful, seamless, and elegant
            software solution is the key to success.
          </p>
          <p>
            I design and implement bespoke full-stack solutions that bring
            innovation, efficiency, and scalability to your business. Whether
            you need a stunning website, a dynamic web application, or a
            full-fledged business system, I turn your vision into reality.
          </p> */}
      {/* <section>
            <ul>
              <li>
                <h3>Tailored Full-Stack Development</h3>
                <p>Custom solutions for your unique needs.</p>
              </li>
              <li>
                <h3>Performance & Security First</h3>
                <p>Optimized and future-proof applications.</p>
              </li>
              <li>
                <h3>Seamless User Experience</h3>
                <p>Elegant, intuitive, and responsive UI/UX.</p>
              </li>
              <li>
                <h3>Proven Track Record</h3>
                <p> Successfully delivered projects across industries.</p>
              </li>
            </ul>
          </section> */}
      <>
        <section className="hero">
          <h1>Crafting High-End Web/Software Solution Excellence</h1>
          <h2>Full-Stack Solutions Tailored for Your Success</h2>
          <p>Minimal. Elegant. Powerful.</p>
          <Link to="/projects" className="cta-button">
            View My Work
          </Link>
        </section>

        <div className="contact-cta">
          <p>Looking for a high-end developer?</p>
          <Link to="/contact" className="contact-button">
            Let’s Talk
          </Link>
        </div>
      </>

      {/* </div> */}
      {/* </div> */}
    </ThreeBackground>
  );
}

export default Home;
