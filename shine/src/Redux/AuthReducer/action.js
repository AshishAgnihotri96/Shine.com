import * as Types from "./actionTypes";
import axios from "axios";

// thunk functiion
export const loginData=(payload)=>(dispatch)=>{
    console.log(payload)
    dispatch({type:Types.LOGIN_REQUEST})
    return axios.post("https://reqres.in/api/login",payload).then((res)=>{
       dispatch({type:Types.LOGIN_SUCCESS,payload:res.data})
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

    
    