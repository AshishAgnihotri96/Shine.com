import React from 'react'
import Applicants from '../Components/Applicants'

import Head from '../Components/Head'
import Slider from '../Components/Test'
import Courses from './Courses'



 

const HomePage = () => {
  return (
    <div>
         <Slider/>
        <Head/>
        <Applicants elem="/login" btn="Apply" jobs="22742+ More Jobs" heading="Be An Early Applicant"/>
        <Applicants elem="/login" btn="Apply" jobs="1191+ More Jobs" heading="Remote Jobs"/>
        <Applicants elem="/login" btn="Apply" jobs="106+ More Jobs" heading="Walkin Jobs"/>
        <Courses/>
        
        
    </div>
  )
}

export default HomePage
