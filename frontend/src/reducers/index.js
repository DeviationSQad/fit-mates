import { combineReducers } from "redux";
import userReducer from "./userReducer";
import formReducer from "./formReducer";

export default combineReducers({
  users: userReducer,
  form: formReducer
});
