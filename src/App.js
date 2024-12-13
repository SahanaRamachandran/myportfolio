import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Projects from "./components/Projects"; // Import your Projects page
import "./App.css";
import Skills from "./components/Skills";
import Education from "./components/Education";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <Router> {/* Wrap your app with Router */}
      <div className="App">
        <Navbar />
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<Herosection />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
