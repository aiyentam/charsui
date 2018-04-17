import React, { Component } from "react";
import "../about/About.css";
import Skills from "./Skills";

class About extends Component {
  render() {
    return (
      <div>
        <h1 className="about-title">About</h1>
        <hr />
        <p className="statement">
          “I am a highly motivated full stack web developer​ with the ability to
          work effectively and efficiently in a team. I have strong
          organizational and multitasking skills with the innate ability to
          grasp concepts quickly and interact with individuals at all levels. I
          enjoy problem solving, and building applications. I love tackling
          challenges!”
        </p>
        <hr />
        <div className="resume">
          <Skills />
        </div>
      </div>
    );
  }
}

export default About;
