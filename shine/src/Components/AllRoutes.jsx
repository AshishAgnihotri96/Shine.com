import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from '../Pages/HomePage'
import Jobdetails from './Jobdetails'
import Login from './Login'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/jobdetail/:id" element={<Jobdetails/>} />
        <Route path="/login" element={<Login/>}/>
    </Routes>
  )
}

export default AllRoutes
