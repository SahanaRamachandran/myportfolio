import React from "react";
import "../Projects.css";

// Import images from assets folder
import AccidentImg from "../assets/Accident.jpg";
import MedicalImg from "../assets/Medical.jpg";
import HomeServiceImg from "../assets/homeservice.jpg";

const projects = [
  {
    title: "HOMERX",
    description:
      "An intuitive home services app developed with React, Spring Boot, SQL, and REST API. It simplifies hiring for home services by connecting users with professionals, managing service bookings, and enabling seamless communication.",
    tools: ["React", "Spring Boot", "REST API", "SQL"],
    image: HomeServiceImg,
    github: "https://github.com/SahanaRamachandran/home.git",
  },
  {
    title: "MEDSCAPE",
    description:
      "A healthcare application designed using React, Spring Boot, AWS, and SQL. Provides medical service booking, emergency contacts, patient records management, and doctor-patient communication features, ensuring a seamless healthcare experience.",
    tools: ["React", "Spring Boot", "AWS", "SQL"],
    image: MedicalImg,
    github: "https://github.com/SahanaRamachandran/MedApplicationProject.git",
  },
  {
    title: "SAFETRACK",
    description:
      "A safety-focused accident detection, prevention, and alert system. Developed using React, Spring Boot, and sensors (e.g., Force, Impact, and Vibration sensors), it includes accident detection with real-time alerts via a GSM module. A robust system for monitoring vehicle safety and preventing mishaps.",
    tools: ["React", "Spring Boot", "SQL", "Sensors", "MicroController", "GSM Module"],
    image: AccidentImg,
    github: "https://github.com/SahanaRamachandran/accidentapp.git",
  },
];

const Projects = () => {
  return (
    <div className="projects-page">
      <h1 className="projects-titles" style={{color:"#f5f5f5"}}>My Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={`${project.title} screenshot`} className="project-image" />
            <div className="project-info">
              <h2 style={{ color: "#f5f5f5" }}>{project.title}</h2>
              <h2 style={{ color: "#f5f5f5" }}>{project.titles}</h2>
              <p>{project.description}</p>
              <div className="tools">
                {project.tools.map((tool, idx) => (
                  <span key={idx} className="tool">{tool}</span>
                ))}
              </div>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
