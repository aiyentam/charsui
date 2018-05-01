import React, { Component } from "react";
import Education from "./Education";

class Skills extends Component {
  render() {
    return (
      <div>
        <div className="skill-list">
          <h2 className="sub-title">Technical Skills</h2>
          <p>
            HTML | CSS | JavaScript (Node, React & Redux, Express, Handlebars
            Vue2, ES6)
          </p>
          <p> Markdown | Unix | Git | MongoDB | Ruby | Ruby on Rails | p5</p>
          <p>
            Rest API | AJAX | JSON | BootStrap | WordPress | Relational
            Databases (MySql, Postgres)
          </p>
          <p> Cloud Platform (AWS, Heroku, mLab) </p>
        </div>
        <Education />
      </div>
    );
  }
}

export default Skills;
