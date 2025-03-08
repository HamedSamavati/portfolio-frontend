import React, { useState, useEffect } from "react";
import { getSkills } from "../services/api";
// import Loader from "./Loader";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await getSkills();
        setSkills(response);
        console.log(response);
      } catch (error) {
        console.error("Error fetching skills:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSkills();
  }, []);

  return (
    <section className="skills-container">
      <h2>Skills</h2>
      {/* {loading && <Loader />} */}
      {skills && (
        <div className="skills-list">
          {skills.map((skill) => (
            <div key={skill.id}>
              <h3>{skill.name}</h3>
              <p>{skill.proficiency}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Skills;
