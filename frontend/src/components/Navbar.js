import React from "react";
import { Navbar as Nav } from "reactstrap";
import styled from "styled-components";
const NavStyled = styled(Nav)`
  background-color: ${({ theme }) => theme.colors.secondary};
`;
const Navbar = ({ children }) => {
  return <NavStyled>{children}</NavStyled>;
};

export default Navbar;
