import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
const NavStyled = styled(Nav)`
  width: 25%;
  flex-direction: row;
  justify-content: space-between;
`;
class MainNavbar extends Component {
  render() {
    return (
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">
          FitMates
        </NavbarBrand>
        <NavStyled navbar>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/register">Register</Link>
          </NavItem>
          <NavItem>
            <Link to="/login">Login</Link>
          </NavItem>
        </NavStyled>
      </Navbar>
    );
  }
}

export default MainNavbar;
