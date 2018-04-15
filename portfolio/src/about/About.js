import React, { Component } from "react";
import "../about/About.css";

class About extends Component {
  render() {
    return (
      <div>
        <h1 className="about-title">About</h1>
        <hr />
        <div className="skills">
          <h2 className="tech-title">Technical Skills</h2>
          <div className="skill-list">
            <p>
              HTML | CSS | JavaScript (Node, React & Redux, Express, Vue2, ES6)
            </p>
            <p>| Markdown | Unix | Git | MongoDB | Ruby | Ruby on Rails |</p>
            <p>
              Rest API | AJAX | JSON | BootStrap | WordPress | Relational
              Databases (MySql, Postgres)
            </p>
            <p>| Cloud Platform (AWS, Heroku, mLab) |</p>
          </div>
        </div>
        <hr />
        <br />
      </div>
    );
  }
}

export default About;
