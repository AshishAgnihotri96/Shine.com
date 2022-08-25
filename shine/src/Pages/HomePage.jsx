import React from 'react'
import {Button} from "@chakra-ui/react"
import { Login } from './Login'
import {useSelector,useDispatch} from "react-redux"
import { loginOutData } from '../Redux/action'
import {Link as RouterLink, useNavigate} from "react-router-dom"
import { LOGOUT_SUCESS } from '../Redux/actionTypes'
export const HomePage = () => {
  const store=useSelector(state=>state.AuthReducer);
  const navigate=useNavigate();
  console.log(store,"storeatlogout");
  const dispatch=useDispatch();
  console.log(store);
  const handleLogOut=()=>{
    dispatch(loginOutData())
    
  }

  return (
    <div>
            
      {/* register*/}

      <Button><RouterLink to="/register">Register</RouterLink></Button>
       {/* calling here login modal component */}
      <Login/>
      <Button onClick={handleLogOut}>Logout</Button>
    </div>
  )
}
