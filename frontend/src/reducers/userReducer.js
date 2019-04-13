import {
  GET_USER,
  ADD_USER,
  LOG_IN,
  USER_LOADING,
  USER_LOADED
} from "../actions/types";
const initialState = {
  loggedUser: {},
  isLoading: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case USER_LOADED:
      return {
        ...state,
        isLoading: false
      };
    case GET_USER:
      return {
        ...state,
        users: action.payload
      };
    case ADD_USER:
    case LOG_IN:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        loggedUser: { ...action.payload }
      };
    default:
      return state;
  }
};
