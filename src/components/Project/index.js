import React from "react";

function Project({ project }) {
  const { title, tech, description, link, gitHub, type } = project;
  return (
    <section key={title}>
      <a
        href={link}
        className={`project ${type}`}
        target="_blank"
        rel="noreferrer"
      ></a>
      <div>
        <a href={link} target="_blank" rel="noreferrer">
          <button type="button">Live</button>
        </a>
        <a href={gitHub} target="_blank" rel="noreferrer">
          <button type="button">GitHub</button>
        </a>
        <h2>{title}:</h2>
        <h3>{tech}</h3>
        <p>{description}</p>
      </div>
    </section>
  );
}
export default Project;
