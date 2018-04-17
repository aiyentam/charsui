import React, { Component } from "react";
import Extracurricular from "./Extracurricular";
import Work from "./Work";
import EducationTwo from "./EducationTwo";

class Education extends Component {
  render() {
    return (
      <div className="education">
        <h2 className="sub-title">Web Developer Experience</h2>
        <div className="details">
          <h3>General Assembly Web Development Immersive Washington, DC</h3>
          <h4>WDI Student January 2018 – April 2018</h4>
          <div className="sub-details">
            <ul>
              <li>
                Created multiple full-stack applications which include
                technologies like: React, Node.js, MongoDB, and Ruby.
              </li>
              <li>
                Designed, wireframe, and developed user-friendly websites.
              </li>
              <li>
                Solve complex problems through careful planning, problem
                breakdown and debugging.
              </li>
              <li>Build and deploy applications to a cloud platform.</li>
            </ul>
            <h3>Hackathons MEANS DATABASE – The Hack to End Hunger</h3>
            <h4>March 2018</h4>
            <ul>
              <li>
                Designed and created a streamlined, user-friendly application
                for people of all background and literacy levels.
              </li>
              <li> Languages used:</li>
              <ul>
                <li> React.js </li>
              </ul>
            </ul>
            <h3>CAPTIAL ONE – Code {"<FAM />"}</h3>
            <h4>November 2017</h4>
            <ul>
              <li>Participated in a 24-hour hackathon></li>
              <li>
                Created a front-end application for families and friends to save
                money to travel together at ease
              </li>
              <li>Languages used:</li>
              <ul>
                <li> Vue.js </li>
                <li>MongoDB</li>
                <li> Node.js </li>
                <li>Express.js</li>
              </ul>
            </ul>
          </div>
        </div>

        <Work />
        <EducationTwo />

        <Extracurricular />
      </div>
    );
  }
}
export default Education;
