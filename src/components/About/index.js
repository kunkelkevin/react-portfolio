import React from "react";
import profileImage from "../../assets/img/profile-pic.jpg";

function About() {
  return (
    <section id="about">
      <img src={profileImage} alt="Profile Pic" />
      <p>
        I am a dynamic full stack web developer with over 15 years of management
        and leadership experience. Currently pursuing an intensive Full Stack
        Web Development Coding Certificate at the University of Austin, gaining
        expertise in JavaScript, CSS, HTML, Node.js, MySQL, Firebase, MongoDB,
        Express, Handelbars.js and ReactJS. I have experience using test-driven
        development (TDD), object-oriented programming (OOP) and using the
        documentation necessary to implement third party libraries such as
        jQuery, Bootstrap, Bulma and Jest. I really enjoy solving puzzles and
        finding solutions to complex problems or finding ways to improve
        processes and methods for better efficiency and user experience. I have
        the ability to handle multiple tasks independently or as a team, quickly
        find creative solutions to complex issues and have worked as a project
        leader to implement the Movie Fusion and Trade Up websites seen in the
        portfolio section.
      </p>
    </section>
  );
}

export default About;
