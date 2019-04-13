import { CHANGE_INPUT } from "../actions/types";
const initialState = {
  email: "",
  first_name: "",
  last_name: "",
  password: "",
  dob: "",
  city: "",
  country: "",
  bio: "",
  tag1: "",
  tag2: "",
  tag3: "",
  tag4: ""
};
export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        [action.key]: action.value
      };
    default:
      return state;
  }
};
