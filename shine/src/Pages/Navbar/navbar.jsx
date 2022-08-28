import React from 'react'
import './navbar.css'

import { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import { useState } from 'react'
import { Button,Box,Text } from '@chakra-ui/react'
import { Login } from '../Login'
import { useDispatch, useSelector } from 'react-redux'
import { loginOutData } from '../../Redux/AuthReducer/action'
import { LOGOUT_SUCESS } from '../../Redux/AuthReducer/actionTypes'
import { Authcontext } from '../../Components/Authcontext'

export const Navbar = () => {
  const [state, setstate] = useState("")
  const [searchjob, setSearchjob] = useState("");
  const value=useContext(Authcontext)
  console.log(value)
  const handelclick=()=>{
    setstate(searchjob)
    value.authclick(state)
  }




  const isAuth=useSelector(state=>state.AuthReducer.isAuth)
  const namee=useSelector(state=>state.AuthReducer.token)
  const dispatch=useDispatch();
  // console.log(namee,"na")
  console.log(isAuth,"isAuth")
  const navigate=useNavigate();

  const handleLogOut=()=>{
      dispatch(loginOutData()).then((res)=>{
        if(res===LOGOUT_SUCESS)
        {
             navigate("/",{replace:true})
        }
      })
  }

    const jobenter=()=>{
    console.log("a")
   let a=document.getElementById("job").style.display="block"
  }
  const jobleave=()=>{
    console.log("b")
    let a=document.getElementById("job").style.display="none"
    
  }

  const jobseekingenter=()=>{

   let a=document.getElementById("jobseeking").style.display="block"
  }
  const jobseekingleave=()=>{
 
    let a=document.getElementById("jobseeking").style.display="none"
    
  }

  const coursesenter=()=>{

   let a=document.getElementById("courses").style.display="block"
  }
  const coursesleave=()=>{

    let a=document.getElementById("courses").style.display="none"
    
  }

  const profileenter=()=>{
 
   let a=document.getElementById("nav-icon-profile-dropdown").style.display="block"
  }
  const profileleave=()=>{
 
    let a=document.getElementById("nav-icon-profile-dropdown").style.display="none"
    
  }
  const notifyenter=()=>{
 
    let a=document.getElementById("nav-icon-notify").style.display="block"
   }
   const notifyleave=()=>{
  
     let a=document.getElementById("nav-icon-notify").style.display="none"
     
   }

  return (
    <div>
    <div className='navbarhead'>
    <div className='navbarhead-icon1'></div>
    <div className='navbarhead-icon'>
    <div className='navbarhead-icon-android'>
      <div className='navbarhead-icon-android-mobileicon'>
        <img style={{width:"80%"}} src="https://cdn-icons-png.flaticon.com/128/823/823929.png" alt="" />
      </div>
      <div className='navbarhead-icon-android-mobile'>
        <h2>Download App</h2>
      </div>
    </div>
    <div className='navbarhead-icon-employers'>
      <div className='navbarhead-icon-employers-icon'>
        <img style={{width:"80%"}}  src="https://cdn-icons-png.flaticon.com/128/848/848043.png" alt="" />
      </div>
      <div className='navbarhead-icon-employers-text'>
        <h2>For Employers</h2>
      </div>
    </div>
    <div className='navbarhead-icon-help'>
      <div className='navbarhead-icon-help-icon'>
     
        <img style={{width:"80%"}}  src="https://cdn-icons-png.flaticon.com/128/1034/1034131.png" alt="" />
        {/* <Text>{isAuth && namee?namee.user.name :""}</Text>  */}
      </div>
      <div className='navbarhead-icon-help-text'>
        <h2>Help</h2>
      </div>
    </div>
</div>
    
    </div>
    <div className='navbarsearch'>
      <div className='nav-logo'>
      <Link to="/">
        <img src="https://www.shine.com/next/static/images/shine-logo.png" alt="" />
      </Link>
      {/* input search */}
      </div>
      <div className='nav-search'>
        <div className='nav-searchbar'>
        <input style={{width:"100%",height:"100%",outline:"none",font:"5px"}} type="text" placeholder='     job title, skills'
          onChange={(e) => setSearchjob(e.target.value)} />
        </div>
        <div className='nav-searchbutton'>
          <NavLink to="/job">

          <img onClick={handelclick} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSsZcoKPB2KSMEMedlz0c1nBE-AvclKIh8YA&usqp=CAU" alt="" />
          </NavLink>
        </div>
      </div>
      <div className='nav-icon'>
      <div className='nav-icon-notification' onMouseEnter={notifyenter} onMouseLeave={notifyleave}>
          <img  style={{width:"68%"}} src="https://cdn-icons-png.flaticon.com/128/3602/3602145.png" alt="" />
          <div id='nav-icon-notify'>
            
            <h2 style={{fontSize:"25px",fontWeight:"bold",marginTop:"10px",marginLeft:"15px"}}>Notification</h2>
            <div className='notify'>
              <img style={{width:"30%",margin:"auto"}} src="https://cdn-icons-png.flaticon.com/128/5441/5441280.png" alt="" />
              <h2 style={{textAlign:"center",fontWeight:"500",fontSize:"14px"}}>No Notifications</h2>
              <h2 style={{textAlign:"center"}}>We Will Notify You Once We Have Something For You</h2>
            </div>
          </div>
        </div>
        <div className='nav-icon-cart'>
          <img style={{width:"82%"}} src="https://cdn-icons-png.flaticon.com/128/2252/2252291.png" alt="" />
        </div>
        <div className='nav-icon-profile' onMouseEnter={profileenter} onMouseLeave={profileleave}>
          <img style={{width:"70%"}} src="https://cdn-icons-png.flaticon.com/128/848/848043.png" alt="" />
          <div id='nav-icon-profile-dropdown'>
              <h1 style={{fontWeight:"bold",fontSize:"23px"}}>HELLO User!</h1>
              <h3>New To Shine?</h3>
              <Link to="/register">
              <Button 
              style={{background:"rgb(53, 176, 225)",color:"white",marginTop:"8px",marginBottom:"5px"}}>
                Register</Button>
              </Link>
              <hr />
              {/* login logout */}
              <Box>{isAuth && namee? <Button  onClick={handleLogOut}
              backgroundColor={"rgb(53, 176, 225)"}
              height="20px" border={"none"} color={"white"} >LOGOUT</Button> 
              
              :<Login/>}
              
              </Box>
              
                <Text marginTop={"0px"}>{isAuth && namee? <Text>{namee.user.name}</Text>:""}</Text>
              
             
             </div>

        </div>
      </div>
  
     
    </div>
    <div className='navbar'>
      <div className='nav-button'>
        <NavLink to="/">
          <div >HOME</div>
        </NavLink>
          <div onMouseEnter={jobenter} onMouseLeave={jobleave} >JOBS
             <div id='job'>
              <h2>Search</h2>
              <h2>Job Alert</h2>
             </div>

          </div>
          <Link to="/assistance">
          <div onMouseEnter={jobseekingenter} onMouseLeave={jobseekingleave}>JOBS SEEKING ASSISTANCE
          <div id='jobseeking'>
            <h2>Profile Booster</h2>
            <h2>Application Highlighter</h2>
            <h2>Resume Writing</h2>
            <h2 style={{color:"blue"}}>View All</h2>
          </div>
          </div>
          </Link>
          <Link to="/courses">
          <div onMouseEnter={coursesenter} onMouseLeave={coursesleave}>COURSES
            <div id="courses">
              <h2>Sales and Marketing</h2>
              <h2>Information and Technology</h2>
              <h2>Operation Management</h2>
              <h2>Human Resources</h2>
              <h2>View All</h2>
            </div>
          </div>
          </Link>
          <div>CAREER GUIDANCE</div>
          <div>BLOG</div>
      </div>
    </div>
    </div>
  )
}
