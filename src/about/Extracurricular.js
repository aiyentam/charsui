import React, { Component } from "react";

class Extracurricular extends Component {
  render() {
    return (
      <div>
        <h2 className="sub-title">Extracurricular</h2>
        <div className="details">
          <h3>
            alpha Kappa Delta Phi International Sorority Inc. Richmond, VA
          </h3>
          <h4>Virginia Commonwealth University Chapter Fall 2013</h4>
          <ul>
            <li>Social Media Specialist</li>
            <ul>
              <li>
                Managed all social media outlets (Facebook, Instagram, Twitter,
                and Website).
              </li>
              <li> Knowledgeable in social media analytics. </li>
              <li>
                Executed and help strategize recruiting and promotional events.
              </li>
            </ul>
          </ul>
          <ul>
            <li>Recruiter/Event Organizer </li>
            <ul>
              <li>Organized and hosted multiple events. </li>
              <li>Developed and implemented recruitment metrics. </li>
              <li>Trained and coached new/junior recruitment specialists. </li>
              <li>
                Networked with potential candidates using Facebook, LinkedIn,
                and other social media outlets.
              </li>
            </ul>
          </ul>
        </div>
      </div>
    );
  }
}
export default Extracurricular;
