import axios from "axios";
import { FETCH_USER } from "./types";

let BASE_URL = process.env.REACT_APP_URL;

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get(`${BASE_URL}/api/users/current_user`, {
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
