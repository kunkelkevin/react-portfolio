import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const [sections] = useState([
    { name: "About Me" },
    { name: "Portfolio" },
    { name: "Contact Me" },
    { name: "Resume" },
  ]);

  const [currentSection, setCurrentSection] = useState(sections[0]);

  return (
    <div>
      <Header
        sections={sections}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      ></Header>
      <main>
        <About />
        <Footer />
      </main>
    </div>
  );
}

export default App;
