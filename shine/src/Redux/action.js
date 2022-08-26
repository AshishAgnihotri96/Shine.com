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

import * as Types from "./actionTypes";
import axios from "axios";


// thunk functiion
export const loginData=(payload)=>(dispatch)=>{
    console.log(payload)
    dispatch({type:Types.LOGIN_REQUEST})
    return axios.post("https://reqres.in/api/login",payload).then((res)=>{
       dispatch({type:Types.LOGIN_SUCCESS,payload:res.data.token})
       return Types.LOGIN_SUCCESS
    }).catch((err)=>{
        dispatch({type:Types.LOGIN_FALIURE,payload:err})
        return Types.LOGIN_FALIURE
    })
}
// 
export const loginOutData=()=>(dispatch)=>{
   
    dispatch({type:Types.LOGOUT_REQUEST})
    dispatch({type:Types.LOGOUT_SUCESS})
        return Types.LOGOUT_SUCESS
}

    
    


