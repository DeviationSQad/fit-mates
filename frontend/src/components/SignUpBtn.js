import React from "react";
import styled from "styled-components";
const SignUpBtnStyled = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  padding: 0.8rem 1.8rem;
  width: 20rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.font.size.s};
  position: relative;
  z-index: 999;
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
const SignUpBtn = () => {
  return <SignUpBtnStyled>Sign Up!</SignUpBtnStyled>;
};

export default SignUpBtn;
