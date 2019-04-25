import React, { Component } from "react";
import {
  NavStyled,
  MenuStyled,
  MenuWrapper,
  HamburgerBtn,
  Line,
  LogoStyled,
  LogoText,
  LogoSpanStyled
} from "../assets/styles/NavStyledComponents";
import { NavLink } from "react-router-dom";
class MainNavbar extends Component {
  render() {
    return (
      <NavStyled>
        <LogoStyled to="/">
          <LogoText>
            Fit<LogoSpanStyled>mates</LogoSpanStyled>
          </LogoText>
        </LogoStyled>

        <MenuWrapper>
          <HamburgerBtn>
            <Line />
          </HamburgerBtn>
          <MenuStyled>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </MenuStyled>
        </MenuWrapper>
      </NavStyled>
    );
  }
}

export default MainNavbar;
