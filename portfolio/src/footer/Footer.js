import React, { Component } from "react";
import "../footer/Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <span className="footer-text">&copy; Ai Yen Tam </span>
        <span className="footer-text-two">
          <a href="https://www.linkedin.com/in/ai-yen-tam-533121b2/">
            <img
              src="/images/linkedin.png"
              className="footer-icon"
              alt="linkedin"
            />
          </a>
          <a href="https://github.com/aiyentam">
            <img
              src="/images/github_icon.png"
              className="footer-icon"
              alt="github"
            />
          </a>
          <a href="mailto:tam.aiyen@gmail.com">
            <img src="/images/email.png" className="footer-icon" alt="email" />
          </a>
        </span>
      </div>
    );
  }
}
export default Footer;
