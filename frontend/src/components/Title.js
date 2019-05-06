import React from "react";
import styled from "styled-components";

const TitleStyled = styled.h2`
  font-size: ${({ theme }) => theme.font.size.l};
  font-weight: 700;
  margin-bottom: 4.3rem;
`;
const Title = ({ title }) => {
  return <TitleStyled>{title}</TitleStyled>;
};
export default Title;
