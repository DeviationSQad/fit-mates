import React, { Component } from "react";
import LogOutButton from "../components/LogOutButton";
import {
  Navbar,
  Nav,
  Card,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Row,
  Col
} from "reactstrap";
import Logo from "../components/Logo";
import NavMenu from "../components/NavMenu";
import NavLink from "../components/NavLink";
import Wrapper from "../components/Wrapper";
import ProfileInfo from "../components/ProfileInfo";
import CreateEventModal from "../components/CreateEventModal";
import { connect } from "react-redux";
import {
  logOutUser,
  logInUser,
  getTags,
  checkIfLogged
} from "../actions/userActions";
import { findEvent } from "../actions/eventActions";

class Profile extends Component {
  state = {
    modal: false,
    show: false,
    events: []
  };
  componentDidMount() {
    if (localStorage.getItem("user")) {
      const userInfo = JSON.parse(localStorage.getItem("user"));
      this.props.checkIfLogged(userInfo);
    }
    if (this.props.tags) {
      this.props.getTags();
    }
    setTimeout(() => {
      const { userInfo, findEvent } = this.props;
      const tag1 = userInfo.profile.tag1;
      const tag2 = userInfo.profile.tag2;
      const tag3 = userInfo.profile.tag3;
      const tag4 = userInfo.profile.tag4;
      if (tag1 !== null) {
        findEvent(tag1);
      }
      if (tag2 !== null) {
        findEvent(tag2);
      }
      if (tag3 !== null) {
        findEvent(tag3);
      }
      if (tag4 !== null) {
        findEvent(tag4);
      }
    }, 2000);
  }
  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };
  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };
  handleFindEvent = () => {
    this.setState({ show: !this.state.show });
    const concateArrays = this.props.foundEvents[0].concat(
      this.props.foundEvents[1]
    );
    this.setState({ events: [...concateArrays] });
  };
  render() {
    const { userInfo, logOutUser, history, tags } = this.props;

    return (
      <>
        <Navbar color="light">
          <Logo name="FitMates" />
          <Nav navbar>
            <NavMenu>
              <NavLink func={this.toggleModal}>Create event</NavLink>
              <NavLink func={this.handleFindEvent}>Find events</NavLink>
              <LogOutButton text="Logout" func={logOutUser} history={history} />
            </NavMenu>
          </Nav>
        </Navbar>
        <Wrapper>
          <CreateEventModal
            isOpen={this.state.modal}
            toggle={this.toggleModal}
            tags={tags}
          />
          {this.state.show ? (
            this.state.events.map(event => (
              <Row key={event.id}>
                <Col>
                  <Card>
                    <CardBody>
                      <CardTitle>{event.title}</CardTitle>
                      <CardText>
                        Where? {event.address} {event.city}, {event.country}
                      </CardText>
                      <CardText>When? {event.event_date}</CardText>
                      <Button>Join!</Button>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            ))
          ) : (
            <ProfileInfo userInfo={userInfo} />
          )}
        </Wrapper>
      </>
    );
  }
}
const mapStateToProps = state => ({
  userInfo: state.users.loggedUser,
  tags: state.users.availableTags,
  foundEvents: state.event.foundEvents
});
export default connect(
  mapStateToProps,
  { logOutUser, logInUser, findEvent, getTags, checkIfLogged }
)(Profile);
