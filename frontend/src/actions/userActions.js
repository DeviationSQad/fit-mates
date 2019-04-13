import {
  ADD_USER,
  LOG_IN,
  USER_LOADING,
  USER_LOADED,
  GET_TAGS,
  LOG_OUT,
  GET_USER_DATA_FROM_LS
} from "./types";
import axios from "axios";
export const getUserFromLS = () => {
  return {
    type: GET_USER_DATA_FROM_LS
  };
};
export const addUser = user => dispatch => {
  dispatch({ type: USER_LOADING });
  axios
    .post(`http://192.168.43.131:8080/api/users/`, user)
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
    .get("http://192.168.43.131:8080/api/auth/user/", {
      auth: {
        username: email,
        password: password
      }
    })
    .then(res => {
      console.log(res.data);
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
    .get("http://192.168.43.131:8080/api/tags/")
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
