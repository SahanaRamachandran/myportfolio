import React from "react";
import "../Herosection.css";
import profilePic from "../assets/profile.jpg";



function Herosection() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="section-title align-left">ABOUT ME</h1>
        <h2>
          I'm <span className="highlight">Sahana</span>
        </h2>
        <p>
           An engineering student with a strong interest in software development and problem-solving. I am passionate about building practical and user-focused applications. I am a quick learner with strong collaboration skills and a commitment to continuous improvement. I am currently seeking opportunities where I can apply my skills, contribute to impactful projects, and grow as a software developer in a professional environment.
        </p>
        <div className="hero-buttons">
          <a
            href="https://github.com/SahanaRamachandran"
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary-btn"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sahana312"
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary-btn"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src={profilePic} alt="Sahana" />
      </div>
    </div>
  );
}


export default Herosection;
