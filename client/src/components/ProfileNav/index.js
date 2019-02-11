import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import style from "./index.css";
import AuthHelperMethods from "../AuthHelperMethods";
import withAuth from "../withAuth";

class ProfileNav extends React.Component {
  Auth = new AuthHelperMethods();
  _handleLogout = () => {
    this.Auth.logout();
    this.props.history.replace("/Login");
  };
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar
          className="navbar navbar-expand-lg navbar-dark bg-dark"
          light
          expand="md"
        >
          <NavbarBrand href="/">R E C L U S I A M</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/Profile/">Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Find">Find</NavLink>
              </NavItem>{" "}
              <NavItem>
                <NavLink href="/Groups">Groups</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Events">Events</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Meta">Meta</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/ProfileSettings">Settings</NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/Login"
                  onClick={this._handleLogout}
                  className={style.logoutButton}
                >
                  Logout
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withAuth(ProfileNav);
