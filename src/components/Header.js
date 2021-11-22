import React, { Component } from "react";
import Toggle from './Toggle';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem } from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar dark sticky="top" expand="md" className="h-100" style={{ "backgroundColor": "black" }}>
          <div className="container">

            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem className="nav-link">
                  <a href="#home">Home</a>
                </NavItem>
                <NavItem className="nav-link">
                  <a href="#skill">Skills</a>
                </NavItem>
                <NavItem className="nav-link">
                  <a href="#project">Projects</a>
                </NavItem>
                <NavItem className="nav-link">
                  <a href="#contact">Contact</a>
                </NavItem>
                <NavItem className="nav-link">
                  <a href="assets/Michael_Baglio_Resume_2021.pdf" target="_blank" download>Resume</a>
                </NavItem>
                <Toggle />
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    )
  }
}

export default Header;

