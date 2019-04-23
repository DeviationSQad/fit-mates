import React, { Component } from "react";
import Container from "../layout/Container";
import Claim from "../components/Claim";
import SignUpBtn from "../components/SignUpBtn";
import LearnMoreBtn from "../components/LearnMoreBtn";
import Overlay from "../components/Overlay";
import Img from "../components/Img";
import MainNavbar from "../components/MainNavbar";
import homeBackground from "../assets/images/activity-adults-athletes-1855269.jpg";
import { connect } from "react-redux";
import { checkIfLogged } from "../actions/userActions";
import { HomeStyled } from "../assets/styles/home/HomeStyled";
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
        <HomeStyled>
          <div>
            <Claim />
            <SignUpBtn />
            <LearnMoreBtn />
          </div>
          <div>
            <Overlay>
              <Img src={homeBackground} />
            </Overlay>
          </div>
        </HomeStyled>
      </div>
    );
  }
}

export default connect(
  null,
  { checkIfLogged }
)(Home);
