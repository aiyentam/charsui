import React, { Component } from "react";
import Extracurricular from "./Extracurricular";
import Work from "./Work";

class Education extends Component {
  render() {
    return (
      <div className="education">
        <h2 className="sub-title">Education</h2>
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
            <h3>Virginia Commonwealth University Richmond, VA</h3>
            <h4>BA International Studies May 2015</h4>
            <ul>
              <li>
                Concentration in Social Justice with a minor in Asia and Chinese
                Studies.
              </li>
            </ul>
            <h3>National Taiwan Normal University Taipei, Taiwan</h3>
            <h4>Study Aboard August 2012</h4>
            <ul>
              <li>
                An immersive program in studying the traditional arts and
                culture.
              </li>
            </ul>
          </div>
        </div>
        <Extracurricular />
        <Work />
      </div>
    );
  }
}
export default Education;
