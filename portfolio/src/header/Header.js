import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "../header/Header.css";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div className="header">
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle className="btn btn btn-secondary">A</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Home</DropdownItem>
            <DropdownItem>About</DropdownItem>
            <DropdownItem>Projects</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default Header;
