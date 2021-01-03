import { FETCH_USER } from "../actions/types";

const initialState = {
  user: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      //return action.payload || false;
      return {
        user: action.payload || false
      };
    default:
      return state;
  }
};

export default auth;
