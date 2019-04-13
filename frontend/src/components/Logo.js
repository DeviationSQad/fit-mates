import React from "react";
import { NavbarBrand } from "reactstrap";
import styled from "styled-components";
const LogoStyled = styled(NavbarBrand)`
  color: ${({ theme }) => theme.colors.primary};
`;
const Logo = ({ name }) => {
  return (
    <LogoStyled href="/profile" className="mr-auto">
      {name}
    </LogoStyled>
  );
};

export default Logo;
