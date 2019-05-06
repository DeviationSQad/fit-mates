import React from "react";
import styled from "styled-components";

const TextStyled = styled.p`
  font-weight: 300;
  font-size: ${({ theme }) => theme.font.size.s};
  line-height: 1.5;
  max-width: 90%;
  margin-bottom: 5rem;
`;
const TextContent = ({ children }) => {
  return <TextStyled>{children}</TextStyled>;
};

export default TextContent;
