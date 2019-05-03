import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 134rem;
  margin: 0 auto;
`;
const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
