import React from "react";
import { NavItem, Button } from "reactstrap";
import styled from "styled-components";
const ButtonStyled = styled(Button)`
  margin-left: 2rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
`;
const NavLink = ({ children, func }) => {
  return (
    <NavItem>
      <ButtonStyled onClick={func}>{children}</ButtonStyled>
    </NavItem>
  );
};

export default NavLink;
