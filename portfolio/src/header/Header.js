import React, { Component } from "react";
import "../header/Header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <button className="nav">
              A
              <li>Home</li>
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
            </button>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
