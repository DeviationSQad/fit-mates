import React from "react";
import { NavItem } from "reactstrap";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
const LinkStyled = styled(Link)`
  margin-left: 2rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
`;
const NavLink = ({ name, children }) => {
  return (
    <NavItem>
      <LinkStyled to="/profile/:name">{children}</LinkStyled>
    </NavItem>
  );
};

export default NavLink;
