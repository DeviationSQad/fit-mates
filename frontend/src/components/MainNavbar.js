import React, { Component } from "react";
import {
  NavStyled,
  MenuStyled,
  MenuWrapper,
  HamburgerBtn,
  Line,
  LogoStyled,
  LogoText,
  LogoSpanStyled,
  MenuItemStyled,
  MenuLinkStyled
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
            <MenuItemStyled>
              <MenuLinkStyled to="/">Home</MenuLinkStyled>
            </MenuItemStyled>
            <MenuItemStyled>
              <MenuLinkStyled to="/register">Register</MenuLinkStyled>
            </MenuItemStyled>
            <MenuItemStyled>
              <MenuLinkStyled to="/login">Login</MenuLinkStyled>
            </MenuItemStyled>
          </MenuStyled>
        </MenuWrapper>
      </NavStyled>
    );
  }
}

export default MainNavbar;
