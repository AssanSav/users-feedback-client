import axios from "axios";
import { FETCH_USER } from "./types";

let BASE_URL = process.env.REACT_APP_URL;

// export const fetchUser = () => {
//   return (dispatch) => {
//     return fetch("https://users-feedback-app.herokuapp.com/", {
//       headers: {
//         "Conent-Type": "application/json",
//         Accept: "application/json",
//       },
//       credentials: "include",
//     })
//       .then((resp) => resp.json())
//       .then((data) => {
//         dispatch({ type: FETCH_USER, payload: data });
//       });
//   };
// };

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get(`${BASE_URL}/api/current_user`, {
    withCredentials: true,
  });
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post(`${BASE_URL}/api/stripe`, token, {
    withCredentials: true,
  });
  dispatch({ type: FETCH_USER, payload: res.data });
};
