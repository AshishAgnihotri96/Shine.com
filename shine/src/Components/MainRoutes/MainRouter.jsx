import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Courses from '../../Pages/Courses'
import { Footer } from '../../Pages/Footer/Footer'
import { Footer1 } from '../../Pages/Footer/Footer1'
import HomePage from '../../Pages/HomePage'
import { Login } from '../../Pages/Login'
import { Navbar } from '../../Pages/Navbar/navbar'
import { Register } from '../../Pages/Register'
import BackdropExample from '../BackdropExample'

import { Job } from '../Job/Job'
import Jobdetails from '../Jobdetails'
export const MainRouter = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<HomePage/>}>  </Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/job" element={<Job/>}></Route>
            <Route path="/jobdetail/:id" element={<Jobdetails/>} />
            <Route path="/courses" element={<Courses/>}/>
            <Route path="/modal/:id" element={<BackdropExample/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
        
        <Footer/>
        <Footer1/>
    </div>
  )
}
