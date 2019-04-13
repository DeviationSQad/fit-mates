import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers, addUser } from "../actions/userActions";
import { Form, FormGroup, Label, Input, Container } from "reactstrap";
class RegisterForm extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <Container>
        <Form>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              onChange={e => {
                handleChange(e.target.name, e.target.value);
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="first_name">First name</Label>
            <Input
              type="text"
              id="first_name"
              name="first_name"
              onChange={e => {
                handleChange(e.target.name, e.target.value);
              }}
            />
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
        </Form>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  users: state.users.users
});
export default connect(
  mapStateToProps,
  { getUsers, addUser }
)(RegisterForm);
