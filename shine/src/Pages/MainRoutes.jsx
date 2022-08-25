import React from 'react'
import {Route,Routes} from "react-router-dom"
import { HomePage } from './HomePage'
import { Register } from './Register'

export const MainRoutes = () => {
  return (
  <Routes>
    <Route path="/" element={<HomePage/>}></Route>
    <Route path="/register" element={<Register/>}></Route>
  </Routes>
  )
}
