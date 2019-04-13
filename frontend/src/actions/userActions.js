import { GET_USER, ADD_USER, LOG_IN } from "./types";
import axios from "axios";
export const getUsers = () => dispatch => {
  axios
    .get("http://192.168.43.131:8080/api/users/")
    .then(res => {
      dispatch({
        type: GET_USER,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const addUser = user => dispatch => {
  axios
    .post(`http://172.20.10.5:8080/api/users/`, user)
    .then(res => {
      dispatch({
        type: ADD_USER,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const logInUser = (email, password) => dispatch => {
  const user = {
    email,
    password
  };
  axios
    .post(`http://192.168.43.131:8080/api/auth/login/`, user)
    .then(res => {
      dispatch({
        type: LOG_IN,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
