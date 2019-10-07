// in order to use a reducer we first need to tell redux what action we want to perform.
// we import our actions and declare an inital state.
// from there we create a function that uses a switch statment to see what action we are performing

import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
