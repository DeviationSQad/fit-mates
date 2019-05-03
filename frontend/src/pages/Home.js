import React, { Component } from "react";
import MainNavbar from "../templates/MainNavbar";
import Header from "../templates/Header";
import About from "../templates/About";

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
        <Header />
        <About />
      </div>
    );
  }
}

export default connect(
  null,
  { checkIfLogged }
)(Home);
