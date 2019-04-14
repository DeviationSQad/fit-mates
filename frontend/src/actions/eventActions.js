import axios from "axios";
import { FIND_EVENT } from "./types";
export const createEvent = event => dispatch => {
  axios.post("http://192.168.43.131:8080/api/events/", event, {
    auth: {
      username: "admin@admin.pl",
      password: "Kapelusz123!"
    }
  });
};
export const findEvent = tag_name => dispatch => {
  fetch(`http://192.168.43.131:8080/api/userEvents/?tag=${tag_name}`)
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FIND_EVENT,
        payload: data
      })
    );
};
