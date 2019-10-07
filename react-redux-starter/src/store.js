import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// in order to create store we need to pass it three things:
// 1. Root reducer which holds all of our reducers
// 2. An initial state
// 3. Any middleware
const initialState = {};

const middleware = [thunk];

// init store and pass all three required params including redux dev tools
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
