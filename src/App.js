import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [sections] = useState([
    {
      name: "About Me",
    },
    { name: "Portfolio" },
    { name: "Contact Me" },
    { name: "Resume" },
  ]);

  const [currentSection, setCurrentSection] = useState(0);

  return (
    <div>
      <Header
        sections={sections}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      ></Header>
      <main></main>
    </div>
  );
}

export default App;
