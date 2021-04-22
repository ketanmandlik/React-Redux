/* eslint-disable default-case */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// //ACTION -> INCREMENT / DECREMENT
// // 1. Action is a simple function that returns object
// const increment = () => {
//   return {
//     type: "INCREMENT",
//   };
// };

// const decrement = () => {
//   return {
//     type: "DECREMENT",
//   };
// };

// //REDUCER -> MODIFY STATE AS PER ACTION

// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;

//     case "DECREMENT":
//       return state - 1;
//   }
// };

// // STORE -> GLOBALIZED STATE WHICH HOLDS DATA AND STATE FOR THE APP
// let store = createStore(counter);

// //Display in the console

// store.subscribe(() => console.log(store.getState()));

// //DISPATCH -> DISPATCHED ACTION TO REDUCER
// store.dispatch(increment());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
