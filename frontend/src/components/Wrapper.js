import React from "react";
import { Container, Row } from "reactstrap";

const Wrapper = ({ children }) => {
  return (
    <Container className="h-100 d-flex justify-content-center">
      <Row className="my-auto">{children}</Row>
    </Container>
  );
};

export default Wrapper;
