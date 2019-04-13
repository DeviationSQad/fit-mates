import {
  ADD_USER,
  LOG_IN,
  USER_LOADING,
  USER_LOADED,
  GET_TAGS,
  LOG_OUT
} from "../actions/types";
const initialState = {
  loggedUser: {},
  isLoading: false,
  availableTags: []
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
    case ADD_USER:
    case LOG_IN:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        loggedUser: { ...action.payload }
      };
    case GET_TAGS: {
      return {
        ...state,
        availableTags: [...action.payload]
      };
    }
    case LOG_OUT: {
      localStorage.removeItem("user");
      return {
        ...state,
        loggedUser: {}
      };
    }
    default:
      return state;
  }
};
