import React from "react";
import styled from "styled-components";
const ButtonStyled = styled.button`
  background-color: ${({ theme }) => theme.colors.ascent};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 100;
  padding: 0.3rem 2rem;
  margin-left: 2rem;
  border: 0;
`;
const Button = ({ func, text }) => {
  return <ButtonStyled>{text}</ButtonStyled>;
};

export default Button;
