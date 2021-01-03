import { FETCH_USER } from "../actions/types";

const initialState = {
  user: {},
  loggedIn: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      //return action.payload || false;
      return {
        user: action.payload,
        loggedIn: true,
      };
    default:
      return state;
  }
};

export default auth;
