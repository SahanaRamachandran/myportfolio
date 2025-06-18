import React from "react";
import "../Herosection.css";
import profilePic from "../assets/profile.jpg";



function Herosection() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>HELLO!</h1>
        <h2>
          I Am <span className="highlight">Sahana</span>
        </h2>
        <p>
          I am an engineering student with expertise in building web applications and a passion for technology. Currently pursuing my B.Tech in Information Technology at Sri Krishna College of Engineering and Technology, Coimbatore.
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
            href="https://www.linkedin.com/in/sahana-c-r-0899782a8/"
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
