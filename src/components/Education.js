// Education.js
import React from "react";
import "../Education.css";

const educationData = [
  {
    year: "2022-2026",
    institution: "Sri Krishna College of Engineering and Technology",
    degree: "B.Tech in Information Technology",
    gpa: "CGPA: 8.68",
    color: "#007acc", // Blue theme
  },
  {
    year: "High School",
    institution: "SSVM, Coimbatore",
    degree: "High School",
    gpa: "GPA: 9.5",
    color: "#ff9800", // Orange theme
  },
];

const Education = () => {
  return (
    <div className="education-page">
      <h1 className="section-title">My Education</h1>
      <div className="education-container">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card" style={{ borderColor: edu.color }}>
            <div className="education-header" style={{ backgroundColor: edu.color }}>
              <h2>{edu.year}</h2>
            </div>
            <div className="education-content">
              <h3>{edu.institution}</h3>
              <p>{edu.degree}</p>
              <p>{edu.gpa}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
