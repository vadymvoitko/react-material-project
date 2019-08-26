import {combineReducers} from "redux";
import exercise from "../../Exercises/reducer";
import layout from "../../Layouts/reducer";

export default combineReducers({
  exercise,
  layout,
})