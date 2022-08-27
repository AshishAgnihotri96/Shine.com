import React, { Children } from 'react'
import { createContext } from 'react'
import { todosucess,todorequest,todoerror } from "../Redux/AppReducer/action"
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { Job } from './Job/Job'

export const Authcontext=createContext()
export const Authcontextprovider = ({children}) => {
const [state, setstate] = useState("")


    // const [loading, setLoading] = useState(false);

    const dispatch=useDispatch()
    const { applicants,isLoading,isEror}=useSelector((store)=>{
  
      return{
        applicants:store.AppReducer.applicants,
        isLoading:store.AppReducer.isLoading,
        isEror:store.AppReducer.isEror
  
      }
    },shallowEqual)
    
  useEffect(() => {

    const getdata=()=>{
      dispatch(todorequest())
      
     return axios.get("http://localhost:8080/posts")
      .then((res)=>{
       console.log(res.data,"data") 
       dispatch((todosucess(res.data)))
      })   .catch((e)=>{
       console.log(e)
       dispatch(todoerror())
      })
  }
    getdata();
  }, []);

console.log(state,"iuhygfd")
const authclick=(x)=>{
setstate(x)
}

console.log(applicants,"state1")

  return (
    <div>
        <Authcontext.Provider value={{authclick,state,applicants,isLoading}}>
            {children}
        </Authcontext.Provider>
    </div>
  )
}
