import React, { Component } from "react";
import LogOutButton from "../components/LogOutButton";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
import NavMenu from "../components/NavMenu";
import NavLink from "../components/NavLink";
import Wrapper from "../components/Wrapper";
import EventList from "../components/EventList";
import ProfileInfo from "../components/ProfileInfo";
import CreateEventModal from "../components/CreateEventModal";
import { connect } from "react-redux";
import { logOutUser, logInUser, getUserFromLS } from "../actions/userActions";
import { changeInput } from "../actions/formActions";

import { Col } from "reactstrap";
class Profile extends Component {
  state = {
    modal: false
  };
  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };
  handleFindEvent = () => {};
  componentDidMount() {
    getUserFromLS();
  }
  render() {
    const { userInfo, logOutUser, history, changeInput, tags } = this.props;

    return (
      <>
        <Navbar>
          <Logo name="FitMates" />
          <NavMenu>
            <NavLink func={this.toggleModal}>Create event</NavLink>
            <NavLink func={this.handleFindEvent}>Find events</NavLink>
            <LogOutButton text="Logout" func={logOutUser} history={history} />
          </NavMenu>
        </Navbar>
        <Wrapper>
          <CreateEventModal
            isOpen={this.state.modal}
            toggle={this.toggleModal}
            changeInput={changeInput}
            tags={tags}
          />
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
  userInfo: state.users.loggedUser,
  tags: state.users.availableTags
});
export default connect(
  mapStateToProps,
  { logOutUser, logInUser, getUserFromLS, changeInput }
)(Profile);
