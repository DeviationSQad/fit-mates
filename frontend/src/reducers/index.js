import { combineReducers } from "redux";
import userReducer from "./userReducer";
import eventReducer from "./eventReducer";
export default combineReducers({
  users: userReducer,
  event: eventReducer
});
