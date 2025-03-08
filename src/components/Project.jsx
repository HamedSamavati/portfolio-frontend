import React from "react";

function Project({ project }) {
  return (
    <>
      <li>project title: {project.title}</li>
      <li>Description: {project.description}</li>
      <li>
        <a href={project.github_link}>Github Link</a>
      </li>
      <li>
        <a href={project.live_demo_link}>Live Demo Link</a>
      </li>
      <li>Technologies Used: {project.tech_stack}</li>
      <li>
        snapshot:
        <img src={project.image_url} alt={project.title} />
      </li>
    </>
  );
}

export default Project;
