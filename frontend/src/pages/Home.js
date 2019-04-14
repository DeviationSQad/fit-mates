import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";
import MainNavbar from "../components/MainNavbar";
import { connect } from "react-redux";
import { checkIfLogged } from "../actions/userActions";
class Home extends Component {
  componentDidMount() {
    if (localStorage.getItem("user")) {
      const userInfo = JSON.parse(localStorage.getItem("user"));
      this.props.checkIfLogged(userInfo);
      this.props.history.push("/profile");
    }
  }
  render() {
    return (
      <div>
        <MainNavbar />
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

export default connect(
  null,
  { checkIfLogged }
)(Home);
