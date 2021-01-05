import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "materialize-css/dist/css/materialize.min.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./components/reducers/rootReducer";
import App from "./components/App";
// import axios from "axios";
// window.axios = axios

// const survey = {
//   title: "My title",
//   subject: "My subject",
//   body: "My email body",
//   userId: "5ff27689f56d480ceb901d60",
//   recipients:
//     "assane.savadogo81@gmail.com, assan.sawadogo81@gmail.com, assane.savadogo1981@gmail.com",
// };

// const surveys = async () => {
//   const res = await axios.post(
//     `${process.env.REACT_APP_URL}/api/surveys`,
//     survey,
//     { withCredentials: true }
//   );
//   return res;
// };
// surveys()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(reduxThunk, logger))
);

ReactDOM.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
