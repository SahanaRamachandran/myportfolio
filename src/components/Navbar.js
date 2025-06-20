import React, { useEffect, useState } from "react";
import "../Navbar.css";

const sections = ["home", "projects", "skills", "education", "contact"];

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionElements = sections.map((id) => document.getElementById(id));
    let prevRatio = 0;
    const observer = new window.IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let mostVisible = activeSection;
        entries.forEach(entry => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisible = entry.target.id;
          }
        });
        setActiveSection(mostVisible);
      },
      {
        root: null,
        threshold: Array.from({length: 101}, (_, i) => i / 100),
      }
    );
    sectionElements.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
    // eslint-disable-next-line
  }, []);

  const handleNavClick = (e, section) => {
    e.preventDefault();
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        {sections.map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={activeSection === section ? "active" : ""}
              onClick={(e) => handleNavClick(e, section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;

