import React, { Component } from "react";
import "../portfolio/Portfolio.css";

class Portfolio extends Component {
  render() {
    return (
      <div className="projects">
        <h1 className="projects-title">Projects</h1>
        <hr />
        <div className="project-container">
          <div className="project">
            <div className="project-details">
              <div className="project-description">
                <h2>Simon Says</h2>
                <p>Follow the pattern of the colors! :) </p>
              </div>
              <div className="project-links">
                <div className="project-links-icon">
                  <a href="https://aiyentam.github.io/Simon-Says/">
                    <img
                      src="/images/globe.svg"
                      className="icon"
                      alt="github"
                    />
                    <span>Website</span>
                  </a>
                </div>
                <div className="project-links-icon">
                  <a href="https://github.com/aiyentam/Simon-Says">
                    <img
                      src="/images/github_icon.png"
                      className="icon"
                      alt="github"
                    />
                    <span>Github</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="section-image">
              <img src="/images/simon.png" className="project-img" />
            </div>
          </div>
          <hr />
          <div className="project">
            <div className="project-details">
              <div className="project-description">
                <h2>Wedding Day</h2>
                <p>Need a place to help you keep track of your Big Day?</p>
              </div>
              <div className="project-links">
                <div className="project-links-icon">
                  <a href="https://infinite-sierra-97558.herokuapp.com/">
                    <img
                      src="/images/globe.svg"
                      className="icon"
                      alt="github"
                    />
                    <span>Website</span>
                  </a>
                </div>
                <div className="project-links-icon">
                  <a href="https://github.com/aiyentam/wedding_day">
                    <img
                      src="/images/github_icon.png"
                      className="icon"
                      alt="github"
                    />
                    <span>Github</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="section-image">
              <img src="/images/wedding.png" className="project-img" />
            </div>
          </div>
          <hr />
          <div className="project">
            <div className="project-details">
              <div className="project-description">
                <h2>Coffee Runs Right Though Me</h2>
                <p>Need to track your daily caffeine intake?</p>
              </div>
              <div className="project-links">
                <div className="project-links-icon">
                  <a href="http://woozy-answer.surge.sh/">
                    <img
                      src="/images/globe.svg"
                      className="icon"
                      alt="github"
                    />
                    <span>Website</span>
                  </a>
                </div>
                <div className="project-links-icon">
                  <a href="https://coffeerunsthroughme.herokuapp.com/main">
                    <img
                      src="/images/globe.svg"
                      className="icon"
                      alt="github"
                    />
                    <span>Api</span>
                  </a>
                </div>
                <div className="project-links-icon">
                  <a href="https://github.com/hyojinsarchet/coffeerunsthroughme-frontend">
                    <img
                      src="/images/github_icon.png"
                      className="icon"
                      alt="github"
                    />
                    <span>Front-End</span>
                  </a>
                </div>
                <div className="project-links-icon">
                  <a href="https://github.com/KBuck2018/coffeerunsthroughme-backend">
                    <img
                      src="/images/github_icon.png"
                      className="icon"
                      alt="github"
                    />
                    <span>Back-End</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="section-image">
              <img src="/images/coffee.png" className="project-img" />
            </div>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}

export default Portfolio;
