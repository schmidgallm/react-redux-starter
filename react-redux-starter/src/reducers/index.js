import { combineReducers } from "redux";
import postReducer from "./postReducer";

// use combineReducers to combine all reducers we have.
// since we only have one there is only one but most apps will have multiple reducers
// a reducer is basically a functino that tells what to do with any part apps state
// here we bring in our postRecuer and call it posts
export default combineReducers({
  posts: postReducer
});
