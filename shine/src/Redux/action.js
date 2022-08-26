import * as types from "./actionTypes"

import axios from "axios"

export const getTasks = () => (dispatch) => {
  dispatch({ type: types.GET_APPLICANT_REQUEST });
  return axios
    .get("http://localhost:8080/applicants")
    .then((r) => {
     
      dispatch({ type: types.GET_APPLICANT_SUCCESS, payload: r.data });
    })
    .catch((e) => {
      dispatch({ type: types.GET_APPLICANT_FAILURE, payload: e });
    });
};

