import React from 'react'
import {Route,Routes} from 'react-router-dom'
import { Footer } from '../../Pages/Footer/Footer'
import HomePage from '../../Pages/HomePage'
import { Navbar } from '../../Pages/Navbar/navbar'
import { Register } from '../../Pages/Register'
import { Job } from '../Job/Job'
export const MainRouter = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<HomePage/>}>  </Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/job" element={<Job/>}></Route>
        </Routes>
        
        <Footer/>
    </div>
  )
}
