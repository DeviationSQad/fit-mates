import React, { Component } from "react";
import Claim from "../components/Claim";
import SignUpBtn from "../components/SignUpBtn";
import LearnMoreBtn from "../components/LearnMoreBtn";
import Overlay from "../components/Overlay";
import Img from "../components/Img";
import MainNavbar from "../components/MainNavbar";
import { connect } from "react-redux";
import { checkIfLogged } from "../actions/userActions";
import { HomeStyled, HomeWrapper } from "../assets/styles/HomeStyledComponents";

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
          <HomeWrapper>
            <Claim />
            <SignUpBtn />
            <LearnMoreBtn />
          </HomeWrapper>
          <div>
            <Overlay>
              <Img />
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
