import React from "react";
import Nav from "../Navigation";

function Header(props) {
  const { sections = [], setCurrentSection, currentSection } = props;

  return (
    <header>
      <h1>Kevin Kunkel</h1>
      <Nav
        sections={sections}
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
      ></Nav>
      {/* <nav>
        <ul>
                    <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            <a href="#">Resume</a>
          </li>
        </ul>
      </nav> */}
    </header>
  );
}

export default Header;
