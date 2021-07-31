import React from "react";

function Resume() {
  return (
    <div className="resume">
      <h1>Resume:</h1>
      <p>
        Downdload resume{" "}
        <span>
          <a
            href={require("../../assets/files/kevin-kunkel-resume.pdf").default}
            download
          >
            here.
          </a>
        </span>
      </p>
      <h2>Backend Proficiencies:</h2>
      <ul>
        <li>MongoDB, Mongoose</li>
        <li>MySQL, Sequelize</li>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>REST</li>
        <li>Insomnia Testing</li>
      </ul>
      <h2>Frontend Proficiencies:</h2>
      <ul>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>React</li>
        <li>Bootstrap</li>
        <li>Bulma</li>
        <li>JQuery</li>
      </ul>
    </div>
  );
}

export default Resume;
