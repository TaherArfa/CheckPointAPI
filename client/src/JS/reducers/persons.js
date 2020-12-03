// import constants
// import { Types } from "mongoose";
import {
  GET_PERSON_FAIL,
  GET_PERSON_SUCCESS,
  GET_PERSON_LOADING,
  GET_PERSON,
} from "../constantes/persons";

// Initial state

const initialState = {
  persons: [],
  loading: false,
  error: null,
  // edit: false,
  user: {},
};

export const personReducer = (state = initialState, { type, payload }) => {
  console.log(initialState);
  switch (type) {
    case GET_PERSON_LOADING:
      return { ...state, loading: true };
    case GET_PERSON_SUCCESS:
      return { ...state, persons: payload.response, loading: false };
    case GET_PERSON_FAIL:
      return { ...state, loading: false, error: payload };
    case GET_PERSON:
      return { ...state, user: payload };
    // console.log(error);
    default:
      return state;
  }
};
