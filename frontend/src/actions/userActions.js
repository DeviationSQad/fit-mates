import {
  ADD_USER,
  LOG_IN,
  USER_LOADING,
  USER_LOADED,
  GET_TAGS,
  LOG_OUT,
  CHECK_IF_LOGGED
} from "./types";
import axios from "axios";
export const addUser = user => dispatch => {
  dispatch({ type: USER_LOADING });
  axios
    .post(`http://fitmates.pythonanywhere.com/api/users/`, user)
    .then(res => {
      dispatch({
        type: ADD_USER,
        payload: res.data
      });
      dispatch({ type: USER_LOADED });
    })
    .catch(err => console.log(err));
};

export const logInUser = (email, password) => dispatch => {
  dispatch({ type: USER_LOADING });
  axios
    .get("http://fitmates.pythonanywhere.com/api/auth/user/", {
      auth: {
        username: email,
        password: password
      }
    })
    .then(res => {
      dispatch({
        type: LOG_IN,
        payload: res.data
      });
      dispatch({ type: USER_LOADED });
    })
    .catch(err => console.log(err));
};

export const getTags = () => dispatch => {
  axios
    .get("http://fitmates.pythonanywhere.com/api/tags/")
    .then(res => {
      dispatch({
        type: GET_TAGS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const logOutUser = () => {
  return {
    type: LOG_OUT
  };
};
export const checkIfLogged = userInfo => {
  return {
    type: CHECK_IF_LOGGED,
    payload: userInfo
  };
};
