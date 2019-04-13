import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";
class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">FitMates</h1>
            <p className="lead">Love your workout</p>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
