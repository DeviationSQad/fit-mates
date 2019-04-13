import React from "react";
import { Nav } from "reactstrap";
import styled from "styled-components";
const NavStyled = styled(Nav)`
  flex-direction: row;
  align-items: center;
`;
const NavMenu = ({ children }) => {
  return <NavStyled navbar>{children}</NavStyled>;
};

export default NavMenu;
