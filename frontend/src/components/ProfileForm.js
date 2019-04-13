import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Container } from "reactstrap";
class ProfileForm extends Component {
  render() {
    const { handleChange, handleSubmit } = this.props;
    return (
      <Container>
        <Form
          onSubmit={e => {
            e.preventDefault();
            handleSubmit();

            e.target.reset();
          }}
        >
          <FormGroup>
            <Label htmlFor="dob">Date of birth</Label>
            <Input
              type="date"
              name="dob"
              id="dob"
              onChange={e => {
                handleChange(e.target.name, e.target.value);
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="city">City</Label>
            <Input
              type="text"
              name="city"
              id="city"
              onChange={e => {
                handleChange(e.target.name, e.target.value);
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="country">Country</Label>
            <Input
              type="text"
              name="country"
              id="country"
              onChange={e => {
                handleChange(e.target.name, e.target.value);
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="bio">Bio</Label>
            <Input
              type="textarea"
              name="bio"
              id="bio"
              onChange={e => {
                handleChange(e.target.name, e.target.value);
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="tag1">Tag 1</Label>
            <Input
              type="text"
              name="tag1"
              id="tag1"
              onChange={e => {
                handleChange(e.target.name, e.target.value);
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="tag2">Tag 2</Label>
            <Input
              type="type"
              name="tag2"
              id="tag2"
              onChange={e => {
                handleChange(e.target.name, e.target.value);
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="tag3">Tag 3</Label>
            <Input
              type="text"
              name="tag3"
              id="tag3"
              onChange={e => {
                handleChange(e.target.name, e.target.value);
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="tag4">Tag 4</Label>
            <Input
              type="text"
              name="tag4"
              id="tag4"
              onChange={e => {
                handleChange(e.target.name, e.target.value);
              }}
            />
          </FormGroup>
          <input type="submit" value="Sign up" />
        </Form>
      </Container>
    );
  }
}

export default ProfileForm;
