import React from "react";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import ContactPage from "./components/ContactPage";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="app-bg">
        <section id="home">
          <Herosection />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="contact">
          <ContactPage />
        </section>
      </div>
    </>
  );
}

export default App;
