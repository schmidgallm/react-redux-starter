import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";

// Wrap entire app contents in provider and pass our store into it
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container-fluid jumbotron bg-dark">
          <h1>React and Redux Starter App</h1>
        </div>
        <PostForm />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
