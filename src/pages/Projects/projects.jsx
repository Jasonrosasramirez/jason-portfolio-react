import "./projects.css";
import MyProject from "../../components/Project/MyProject.jsx";
import React, { useState } from "react";

const Projects = () => {
  const [projects] = useState([
    {
      id: "Project1",
      projectTitle: "The one and only password generator",
      projectLink: "https://jasonrosasramirez.github.io/03-The-One-and-Only-Password-Generator/",
      githubLink: " ",
    },

    {
      id: "Project2",
      projectTitle: "Gotta Catch a Vibe",
      projectLink: "https://jasonrosasramirez.github.io/Gotta-Catch-A-Vibe/",
      githubLink: "https://github.com/Jasonrosasramirez/Gotta-Catch-A-Vibe",
    }
  ]);

  return (
    <div className = "projectsPage">
        <h1>Projects</h1>


    </div>
  );
};

export default Projects;