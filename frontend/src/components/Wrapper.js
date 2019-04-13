import React from "react";
import { Container, Row } from "reactstrap";
import styled from "styled-components";
// const ContainerStyled = styled(Container)`
//   height: 100%;
// `;
const Wrapper = ({ children }) => {
  return (
    <Container className="h-100 d-flex justify-content-center">
      <Row className="my-auto">{children}</Row>
    </Container>
  );
};

export default Wrapper;
