import React, { Component } from "react";
import "../main/Main.css";

class Main extends Component {
  render() {
    return (
      <div>
        <h1 className="hello">Hello!</h1>
        <h2 className="name">My name is Ai Yen Tam.</h2>
        <p className="titles">developer || baker || creative</p>
        <div className="icons">
          <a href="https://www.linkedin.com/in/ai-yen-tam-533121b2/">
            <img src="/images/linkedin.png" className="icon" alt="linkedin" />
          </a>
          <a href="https://github.com/aiyentam">
            <img src="/images/github_icon.png" className="icon" alt="github" />
          </a>
          <a href="mailto:tam.aiyen@gmail.com">
            <img src="/images/email.png" className="icon" alt="email" />
          </a>
        </div>
      </div>
    );
  }
}

export default Main;
