import React, { useState, useEffect } from "react";
import { getProjects } from "../services/api";
import Project from "../components/Project";
// import Loader from "../components/Loader";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const LoadProjects = async () => {
      try {
        const fetchedProjects = await getProjects();
        setProjects(fetchedProjects.data);
        console.log(fetchedProjects.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    LoadProjects();
  }, []);

  return (
    <>
      {/* {loading && <Loader />} */}
      <div className="projects-container">
        {projects &&
          projects.map((project) => (
            <ul key={project.id}>
              <Project project={project} />
            </ul>
          ))}
      </div>
    </>
  );
}

export default Projects;
