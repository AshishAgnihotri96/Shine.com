import * as types from "./actionTypes"

import axios from "axios"

export const getTasks = () => (dispatch) => {
  dispatch({ type: types.GET_APPLICANT_REQUEST });
  return axios
    .get("http://localhost:8080/applicant")
    .then((r) => {
      
      dispatch({ type: types.GET_APPLICANT_SUCCESS, payload: r.data });
    })
    .catch((e) => {
      dispatch({ type: types.GET_APPLICANT_FAILURE, payload: e });
    });
};


// job section part
const todorequest=()=>{
  return{
      type:types.GET_TODO_REQUEST
  }
}
const todosucess=(payload)=>{
  return{
      type:types.GET_TODO_SUCCESS,
      payload,
  }
}
const todoerror=()=>{
      return{
          type:types.GET_TODO_FAILURE
      }
}
export {todoerror,todorequest,todosucess }


// end here
