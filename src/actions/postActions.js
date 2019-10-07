import { FETCH_POSTS, NEW_POST } from "./types";

// function that dispatches what we want to do with state.
// here we fetch some data and then dispatch that data with the FETCH_POSTS action and then give it payload of requested data
export const fetchPosts = () => async dispatch => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  dispatch({
    type: FETCH_POSTS,
    payload: posts
  });
};

// function that dispatches what we want to do with state.
// here we post some data and then dispatch that data with the NEW_POST action and then give it payload of posted data
export const createPost = postData => async dispatch => {
  const request = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(postData)
  });
  const post = await request.json();
  dispatch({
    type: NEW_POST,
    payload: post
  });
};
