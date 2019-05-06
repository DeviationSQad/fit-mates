import React from "react";
import styled from "styled-components";
const BtnStyled = styled.button`
  border: 1px solid
    ${({ theme, secondary }) =>
      secondary ? theme.colors.white : theme.colors.secondary};
  padding: 0.8rem 1.8rem;
  min-width: 20rem;
  color: ${({ theme, secondary }) =>
    secondary ? theme.colors.white : theme.colors.secondary};
  font-size: ${({ theme }) => theme.font.size.s};
  background-color: transparent;
  position: relative;
  z-index: 1;
  transition: 0.2s color ease-in-out;

  ::after {
    content: "";
    position: absolute;
    opacity: 0;
    transform: scaleX(0);
    height: 100%;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
    top: 0;
    left: 0;
    z-index: -1;
    transform-origin: left;
    transition: 0.2s opacity ease-in-out, 0.2s transform ease-in-out;
  }
  :hover::after {
    opacity: 1;
    transform: scaleX(1);
  }
  :hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;
const Button = ({ children, secondary }) => {
  return <BtnStyled secondary={secondary}>{children}</BtnStyled>;
};

export default Button;
