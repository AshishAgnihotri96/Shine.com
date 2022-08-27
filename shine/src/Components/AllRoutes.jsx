import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from '../Pages/HomePage'
import Jobdetails from './Jobdetails'
import Login from './Login'
import Purchase from './Purchase'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/jobdetail/:id" element={<Jobdetails/>} />
        <Route path="/login/:id" element={<Login/>}/>
        <Route path="/purchase/:id" element={<Purchase/>}/>
    </Routes>
  )
}

export default AllRoutes
