import React from 'react'
import {Route,Routes} from 'react-router-dom'
import { Footer } from '../../Pages/Footer/Footer'
import HomePage from '../../Pages/HomePage'
import { Navbar } from '../../Pages/Navbar/navbar'
export const MainRouter = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<HomePage/>}>  </Route>
        </Routes>
        
        <Footer/>
    </div>
  )
}
