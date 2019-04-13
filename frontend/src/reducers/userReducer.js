import { GET_USER, ADD_USER, LOG_IN } from "../actions/types";
const initialState = {
  users: [],
  loggedUser: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        users: action.payload
      };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    case LOG_IN:
      return {
        ...state,
        loggedUser: { ...action.payload }
      };
    default:
      return state;
  }
};
