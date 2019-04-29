import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import posed from "react-pose";

export const NavStyled = styled.nav`
  width: 100vw;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  padding: 2.3rem 8rem;
`;

export const LogoStyled = styled(Link)`
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

export const LogoText = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.size.s};
  padding: 1.2rem;
  margin: 0;
`;

export const LogoSpanStyled = styled.span`
  font-size: ${({ theme }) => theme.font.size.xs};
`;
export const MenuStyled = styled.ul`
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

export const MenuWrapper = styled.div`
  width: 33%;
  display: flex;
  justify-content: flex-end;
  position: relative;
`;
export const HamburgerBtn = styled.button`
  position: absolute;
  z-index: 9999;
  width: 5rem;
  height: 5rem;
  background: none;
  border: 0;
`;

export const Line = styled.span`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.white};
  display: block;
  position: relative;
  ::after,
  ::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.white};
  }
  ::after {
    bottom: 1rem;
  }
  ::before {
    top: 1rem;
  }
`;

export const MenuItemStyled = styled.li`
  text-align: center;
  width: 20rem;
`;

export const MenuNavLinkStyled = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.size.s};
  font-weight: 300;
  :hover {
    color: white;
    text-decoration: none;
  }
`;

export const MenuLinkStyled = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.size.s};
  font-weight: 300;
  :hover {
    color: white;
    text-decoration: none;
  }
`;
