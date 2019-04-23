import React, { Component } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { createEvent } from "../actions/eventActions";

class CreateEventModal extends Component {
  state = {
    title: "",
    tag: "",
    place_name: "",
    country: "",
    city: "",
    address: "",
    event_date: "",
    max_amount_of_people: ""
  };
  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };
  handleCreateEvent = e => {
    e.preventDefault();
    const {
      title,
      tag,
      place_name,
      country,
      city,
      address,
      event_date,
      max_amount_of_people
    } = this.state;
    const { tags, userInfo, createEvent, toggle } = this.props;
    const selectedTag = tags.filter(tagItem => tagItem.tag_name === tag);
    const selectedTagID = parseInt(selectedTag[0].id);
    const userID = userInfo.id;
    const amountToNumber = parseInt(max_amount_of_people);

    const event = {
      tag: selectedTagID,
      title,
      place_name,
      country,
      city,
      address,
      event_date,
      max_amount_of_people: amountToNumber,
      creator: userID
    };
    console.log(selectedTag);
    createEvent(event);
    toggle();
  };
  render() {
    const { isOpen, toggle, tags } = this.props;
    return (
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Event</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.handleCreateEvent}>
            <FormGroup>
              <Label htmlFor="title">Title</Label>
              <Input
                type="title"
                id="title"
                name="title"
                onChange={e => {
                  this.handleChange(e.target.name, e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="tag">Tag</Label>
              <Input
                type="select"
                name="tag"
                id="tag"
                onChange={e => {
                  this.handleChange(e.target.name, e.target.value);
                }}
              >
                {tags.map(tag => {
                  return <option key={tag.id}>{tag.tag_name}</option>;
                })}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="place_name">Place name</Label>
              <Input
                type="text"
                id="place_name"
                name="place_name"
                onChange={e => {
                  this.handleChange(e.target.name, e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="country">Country</Label>
              <Input
                type="text"
                id="country"
                name="country"
                onChange={e => {
                  this.handleChange(e.target.name, e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="city">City</Label>
              <Input
                type="text"
                id="city"
                name="city"
                onChange={e => {
                  this.handleChange(e.target.name, e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="address">Address</Label>
              <Input
                type="text"
                id="address"
                name="address"
                onChange={e => {
                  this.handleChange(e.target.name, e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="event_date">Event date</Label>
              <Input
                type="date"
                id="event_date"
                name="event_date"
                onChange={e => {
                  this.handleChange(e.target.name, e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="max_amount_of_people">Max amount of people</Label>
              <Input
                type="text"
                id="max_amount_of_people"
                name="max_amount_of_people"
                onChange={e => {
                  this.handleChange(e.target.name, e.target.value);
                }}
              />
            </FormGroup>
            <input type="submit" value="Create" />
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
const mapStateToProps = state => ({
  userInfo: state.users.loggedUser
});
export default connect(
  mapStateToProps,
  { createEvent }
)(CreateEventModal);
