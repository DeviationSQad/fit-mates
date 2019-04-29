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
  MenuNavLinkStyled,
  MenuLinkStyled
} from "../assets/styles/NavStyledComponents";
class MainNavbar extends Component {
  state = {
    isOpen: false
  };

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <NavStyled>
        <LogoStyled to="/">
          <LogoText>
            Fit<LogoSpanStyled>mates</LogoSpanStyled>
          </LogoText>
        </LogoStyled>

        <MenuWrapper>
          <HamburgerBtn onClick={this.toggleMenu}>
            <Line />
          </HamburgerBtn>
          <MenuStyled open={this.state.isOpen}>
            <MenuItemStyled>
              <MenuLinkStyled href="/">Home</MenuLinkStyled>
            </MenuItemStyled>
            <MenuItemStyled>
              <MenuLinkStyled href="#about">About us</MenuLinkStyled>
            </MenuItemStyled>
            <MenuItemStyled>
              <MenuLinkStyled href="#contact">Contact</MenuLinkStyled>
            </MenuItemStyled>
            <MenuItemStyled>
              <MenuNavLinkStyled to="/register">Register</MenuNavLinkStyled>
            </MenuItemStyled>
            <MenuItemStyled>
              <MenuNavLinkStyled to="/login">Login</MenuNavLinkStyled>
            </MenuItemStyled>
          </MenuStyled>
        </MenuWrapper>
      </NavStyled>
    );
  }
}

export default MainNavbar;
