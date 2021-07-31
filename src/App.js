import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";

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
        {currentSection.name === "About Me" && <About />}
        {currentSection.name === "Portfolio" && <Portfolio />}
        {currentSection.name === "Contact Me" && <ContactForm />}
        {currentSection.name === "Resume" && <Resume />}
        <Footer />
      </main>
    </div>
  );
}

export default App;
