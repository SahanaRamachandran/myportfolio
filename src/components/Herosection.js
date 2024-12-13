import React from "react";
import "../Herosection.css";
import profilePic from "../assets/profile.jpg"; 
import background from "../assets/background.mp4"; 

function Herosection() {
  return (
    <section className="hero">
      <video autoPlay muted loop playsInline>
        <source src={background} type="video/mp4" />
        <source src={background.replace(".mp4", ".webm")} type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <img 
        src={profilePic} 
        alt="Profile picture of Sahana Ramachandran" 
        className="profile-pic" 
      />
      <h1 style={{color:"white"}}>Hello, I'm Sahana.</h1>
      <p>
        I'm an <strong>engineering student</strong> at <strong>Sri Krishna College of Engineering and Technology</strong>, Coimbatore.
        I am currently a third-year B.Tech student specializing in Information Technology.
      </p>
      <div className="buttons">
        <a href="https://github.com/SahanaRamachandran" className="btn">GitHub</a>
        <a href="https://www.linkedin.com/in/sahana-c-r-0899782a8/" className="btn">LinkedIn</a>
      </div>
    </section>
  );
}

export default Herosection;
