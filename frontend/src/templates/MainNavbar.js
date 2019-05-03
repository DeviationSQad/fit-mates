import React, { Component } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const NavStyled = styled.nav`
  width: 100vw;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 999;
  padding: 2.3rem 8rem;
`;

const LogoStyled = styled(Link)`
  width: 8rem;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 1rem;
  text-decoration: none;
  display: flex;
  :hover {
    text-decoration: none;
  }
`;
const LogoText = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.size.s};
  padding: 1.2rem;
  margin: 0;
`;
const LogoSpanStyled = styled.span`
  font-size: ${({ theme }) => theme.font.size.xs};
`;
const MenuStyled = styled.ul`
  width: 34vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  background: ${({ theme }) => theme.colors.secondary};
  transform: translateX(${({ open }) => (open ? "0" : "100%")});
  transition: transform 0.25s ease-in-out;
`;

const MenuWrapper = styled.div`
  width: 33%;
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

const Line = styled.span`
  width: 100%;
  height: 2px;
  background-color: ${({ theme, open }) =>
    open ? "transparent" : theme.colors.white};
  display: block;
  position: relative;
  transition: background-color 0.25s ease-in;
  ::after,
  ::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.white};
    transition: transform 0.25s ease-in;
  }
  ::after {
    bottom: 1rem;
    transform: translateY(${({ open }) => (open ? "1rem" : "0")})
      rotate(${({ open }) => (open ? "45deg" : "0")});
  }
  ::before {
    top: 1rem;
    transform: translateY(${({ open }) => (open ? "-1rem" : "0")})
      rotate(${({ open }) => (open ? "-45deg" : "0")});
  }
`;

const MenuItemStyled = styled.li`
  text-align: center;
  width: 20rem;
`;
const MenuNavLinkStyled = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.size.s};
  font-weight: 300;

  :hover {
    color: white;
    text-decoration: none;
  }
`;

const HamburgerBtn = styled.button`
  position: absolute;
  z-index: 9999;
  width: 5rem;
  height: 5rem;
  background: none;
  border: 0;
`;
class MainNavbar extends Component {
  state = {
    isOpen: false
  };

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    const { isOpen } = this.state;
    return (
      <NavStyled>
        <LogoStyled to="/">
          <LogoText>
            Fit<LogoSpanStyled>mates</LogoSpanStyled>
          </LogoText>
        </LogoStyled>

        <MenuWrapper>
          <HamburgerBtn onClick={this.toggleMenu}>
            <Line open={isOpen} />
          </HamburgerBtn>
          <MenuStyled open={isOpen}>
            <MenuItemStyled>
              <MenuNavLinkStyled to="/">Home</MenuNavLinkStyled>
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
