import React, { Component } from "react";
import "../contact/Contact.css";

class Contact extends Component {
  render() {
    return (
      <div>
        <h1 className="about-title">Contact</h1>
        <hr />
        <div className="contact">
          <span>
            <img src="./images/email.png" className="contact-icon" />
            <a href="mailto:tam.aiyen@gmail.com"> Email</a>
          </span>
          <span>
            <img src="./images/linkedin.png" className="contact-icon" />
            <a href="https://www.linkedin.com/in/ai-yen-tam-533121b2/">
              {" "}
              LinkedIn
            </a>
          </span>
          <span>
            <img src="./images/github_icon.png" className="contact-icon" />
            <a href="https://github.com/aiyentam"> GitHub</a>
          </span>
        </div>
      </div>
    );
  }
}

export default Contact;
