import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "../actions/userActions";
import { Form, FormGroup, Label, Input, FormFeedback, Col } from "reactstrap";

class RegisterForm extends Component {
  state = {
    validate: {
      emailState: ""
    }
  };
  validateEmail(e) {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = this.state;
    if (emailRex.test(e.target.value)) {
      validate.emailState = "has-success";
    } else {
      validate.emailState = "has-danger";
    }
    this.setState({ validate });
  }
  render() {
    const { handleChange } = this.props;
    return (
      <Form>
        <Col>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              valid={this.state.validate.emailState === "has-success"}
              invalid={this.state.validate.emailState === "has-danger"}
              onChange={e => {
                handleChange(e.target.name, e.target.value);
              }}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label htmlFor="first_name">First name</Label>
            <Input
              type="text"
              id="first_name"
              name="first_name"
              onChange={e => {
                this.validateEmail(e);
                handleChange(e.target.name, e.target.value);
              }}
            />
            <FormFeedback valid>
              That's a tasty looking email you've got there.
            </FormFeedback>
            <FormFeedback>
              Uh oh! Looks like there is an issue with your email. Please input
              a correct email.
            </FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="last_name">Last name</Label>
            <Input
              type="text"
              id="last_name"
              name="last_name"
              onChange={e => {
                handleChange(e.target.name, e.target.value);
              }}
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              onChange={e => {
                handleChange(e.target.name, e.target.value);
              }}
            />
          </FormGroup>
        </Col>
      </Form>
    );
  }
}
const mapStateToProps = state => ({
  users: state.users.users
});
export default connect(
  mapStateToProps,
  { addUser }
)(RegisterForm);
