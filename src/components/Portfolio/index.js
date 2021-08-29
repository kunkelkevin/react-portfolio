import React, { useState } from "react";
import Project from "../Project";

const Portfolio = () => {
  const [projects] = useState([
    {
      title: "Movie Fusion",
      tech: "Interactive Full Stack MERN Project using google maps api",
      description:
        "Interactive website that allows you to login to access a map feature showing fields where you can join or create games.",
      link: "https://kunkelkevin.github.io/Ready-Set-Goal/",
      gitHub: "https://ready-set-goal.herokuapp.com/",
      type: "ready-set-goal",
    },
    {
      title: "Movie Fusion",
      tech: "Interactive Front End Project using JavaScript, CSS, HTML, APIs, Bulma, LocalStorage",
      description:
        "Interactive website that allows you to search and store movies, tv shows and actors and find what providers they can be streamed from.",
      link: "https://kunkelkevin.github.io/Movie-Fusion/",
      gitHub: "https://github.com/kunkelkevin/Movie-Fusion",
      type: "movie-fusion",
    },
    {
      title: "Trade Up",
      tech: "Full Stack project using MySQL database, Node, Express, Javascript, Handlebars, CSS",
      description:
        "Full stack project used to trade video games. Users are able to post games available for trade, and browse through posts to make offers and comments on the postings.",
      link: "https://p2g3-trade-up.herokuapp.com/",
      gitHub: "https://github.com/kunkelkevin/trade-up",
      type: "trade-up",
    },
    {
      title: "Password Generator",
      tech: "JavaScript",
      description:
        "Generates a random password decided by user input, ensuring all character types are used in password creation",
      link: "https://kunkelkevin.github.io/password-generator/",
      gitHub: "https://github.com/kunkelkevin/password-generator",
      type: "password-generator",
    },
    {
      title: "Weather Forecast",
      tech: "HTML, CSS, JavaScript, API",
      description:
        "Pulls weather data based on searched city and displays current and extended forecast information.",
      link: "https://kunkelkevin.github.io/weather/",
      gitHub: "https://github.com/kunkelkevin/weather",
      type: "weather",
    },
    {
      title: "Daily Planner",
      tech: "HTML, CSS, JavaScript",
      description:
        "A daily task planner that uses Moment to dynamically change the display based on the time tasks are scheduled.",
      link: "https://kunkelkevin.github.io/daily-planner/",
      gitHub: "https://github.com/kunkelkevin/daily-planner",
      type: "daily-planner",
    },
    {
      title: "Code Quiz",
      tech: "JavaScript, LocalStorage",
      description:
        "A javaScript quiz about javaScript that randomly displays questions and answer order.  Uses a timer to get and store a highscore table.",
      link: "https://kunkelkevin.github.io/code-quiz/",
      gitHub: "https://github.com/kunkelkevin/code-quiz",
      type: "code-quiz",
    },
  ]);

  return (
    <section id="projects">
      <h2> Projects:</h2>
      {projects.map((project) => (
        <Project key={project.title} project={project} />
      ))}
    </section>
  );
};

export default Portfolio;
