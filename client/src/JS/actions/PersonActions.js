import {
  GET_PERSON_FAIL,
  GET_PERSON_LOADING,
  GET_PERSON_SUCCESS,
  DELETE_PERSON,
  GET_PERSON,
} from "../constantes/persons";
import axios from "axios";

export const GetAllPerson = () => async (dispatch) => {
  dispatch({ type: GET_PERSON_LOADING });
  try {
    let result = await axios.get("/api/person");
    dispatch({
      type: GET_PERSON_SUCCESS,
      payload: result.data,
    });
  } catch (error) {
    dispatch({ type: GET_PERSON_FAIL, payload: error });
    console.log(error);
  }
};

export const DeletePerson = (id) => (dispatch) => {
  axios
    .delete(`/api/person/${id}`)
    .then((res) => dispatch(GetAllPerson()))
    .catch((err) => console.log(err));
};

export const GetPerson = (id) => (dispatch) => {
  axios
    .get(`/api/person/${id}`)
    .then((res) => dispatch({ type: GET_PERSON, payload: res.data.response }))
    .catch((err) => console.log(err));
};

export const postPerson = (user) => (dispatch) => {
  axios
    .post("/api/person", user)
    .then((res) => dispatch(GetAllPerson()))
    .catch((err) => console.log(err));
};

export const editPerson = (id, user) => (dispatch) => {
  axios
    .put(`/api/person/${id}`, user)
    .then((res) => console.log("action dispatched"))
    .then((res) => dispatch(GetAllPerson()))
    .catch((err) => console.log(err));
};
