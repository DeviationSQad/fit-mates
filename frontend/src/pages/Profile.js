import React, { Component } from "react";
import LogOutButton from "../components/LogOutButton";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
import NavMenu from "../components/NavMenu";
import NavLink from "../components/NavLink";
import Wrapper from "../components/Wrapper";
import EventList from "../components/EventList";
import ProfileInfo from "../components/ProfileInfo";
import { connect } from "react-redux";
import { logOutUser } from "../actions/userActions";

import { Col } from "reactstrap";
class Profile extends Component {
  render() {
    const { userInfo, logOutUser, history } = this.props;

    return (
      <>
        <Navbar>
          <Logo name="FitMates" />
          <NavMenu>
            <NavLink name="create-event">Create event</NavLink>
            <NavLink name="find-event">Find events</NavLink>
            <LogOutButton text="Logout" func={logOutUser} history={history} />
          </NavMenu>
        </Navbar>
        <Wrapper>
          <Col>
            <EventList />
          </Col>
          <Col>
            <EventList />
          </Col>
          <Col>
            <ProfileInfo userInfo={userInfo} />
          </Col>
        </Wrapper>
      </>
    );
  }
}
const mapStateToProps = state => ({
  userInfo: state.users.loggedUser
});
export default connect(
  mapStateToProps,
  { logOutUser }
)(Profile);
