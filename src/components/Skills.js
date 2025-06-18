import React from "react";
import "../Skills.css";


import cplusplusIcon from "../assets/cplusplus.png"; // Add appropriate icons in your assets folder
import javaIcon from "../assets/java.jpeg";
import pythonIcon from "../assets/python.png";
import sqlIcon from "../assets/sql.png";
import springbootIcon from "../assets/springboot.png";

import reactjsIcon from "../assets/reactjs.png";
import javascriptIcon from "../assets/javascript.jpeg";
import cssIcon from "../assets/css.jpeg";
import htmlIcon from "../assets/html.png";
import testingIcon from "../assets/testing.png";
import awsIcon from "../assets/aws.png";

import linuxIcon from "../assets/linux.jpeg";

import excelIcon from "../assets/excel.jpeg";

// Skills data
const skills = [
  { name: "C++", icon: cplusplusIcon },
  { name: "Java", icon: javaIcon },
  { name: "Python", icon: pythonIcon },
  { name: "SQL", icon: sqlIcon },
  { name: "Spring Boot", icon: springbootIcon },
 
  { name: "React.js", icon: reactjsIcon },
  { name: "JavaScript", icon: javascriptIcon },
  { name: "CSS", icon: cssIcon },
  { name: "HTML", icon: htmlIcon },
  { name: "Testing", icon: testingIcon },
  { name: "AWS", icon: awsIcon },

  { name: "Linux", icon: linuxIcon },

  { name: "Excel", icon: excelIcon },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
