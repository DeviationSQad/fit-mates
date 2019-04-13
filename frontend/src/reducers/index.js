import { combineReducers } from "redux";
import userReducer from "./userReducer";
import formReducer from "./formReducer";
import eventReducer from "./eventReducer";
export default combineReducers({
  users: userReducer,
  form: formReducer,
  event: eventReducer
});
