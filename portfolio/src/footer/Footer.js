import React, { Component } from "react";
import "../footer/Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        &copy; Ai Yen Tam
        <a href="https://github.com/aiyentam">
          <img src="../images/github_icon.png" className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/ai-yen-tam-533121b2/">
          <img src="../images/linkedin.png" className="icon" />
        </a>
        <a href="mailto:tam.aiyen@gmail.com">
          <img src="../images/email.png" className="icon" />
        </a>
      </div>
    );
  }
}
export default Footer;
