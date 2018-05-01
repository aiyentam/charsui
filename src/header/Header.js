import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../header/Header.css";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false
    };
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }
  openNav() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  closeNav() {
    document.getElementById("navbar").style.height = "0%";
  }

  render() {
    const openNavBar = this.state.isOpen ? (
      <div className="overlay-contents">
        <a
          href="javascript:void(0)"
          className="closebtn"
          onClick={this.closeNav}
        />
        <Link to="/">Home</Link>

        <Link to="/about">About</Link>

        <Link to="/projects">Projects</Link>

        <Link to="/contact">Contact</Link>
      </div>
    ) : (
      <div className="overlay-contents" />
    );

    return (
      <div id="navbar" className="header overlay">
        <span onClick={this.openNav} className="btn">
          <img src="./images/hamburger.png" className="img" />
          {openNavBar}
        </span>
      </div>
    );
  }
}

export default Header;
