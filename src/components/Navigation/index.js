import React from "react";

function Nav(props) {
  const { sections = [], setCurrentSection, currentSection } = props;

  return (
    <nav>
      <ul>
        {sections.map((section) => (
          <li key={section.name}>
            <span
              className={`mx-1 ${
                currentSection.name === section.name && "navActive"
              }`}
              onClick={() => {
                setCurrentSection(section);
              }}
            >
              {section.name}
            </span>
          </li>
        ))}
        {/* <li>
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
          </li> */}
      </ul>
    </nav>
  );
}

export default Nav;
