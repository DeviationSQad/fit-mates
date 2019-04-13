import { CREATE_EVENT } from "./types";
import axios from "axios";
export const createEvent = event => dispatch => {
  axios
    .post("http://192.168.43.131:8080/api/events/", event, {
      auth: {
        username: "admin@admin.pl",
        password: "Kapelusz123!"
      }
    })
    .then(res => {
      dispatch({
        type: CREATE_EVENT,
        payload: res.data
      });
    });
};
