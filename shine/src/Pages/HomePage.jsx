import React from 'react'
import Applicants from '../Components/Applicants'

import Head from '../Components/Head'
import Slider from '../Components/Test'
import Courses from './Courses'



 

const HomePage = () => {
  return (
    <div className='home-page'>
         <Slider/>
        <Head/>
        <Applicants   btn="Apply" jobs="22742+ More Jobs" heading="Be An Early Applicant"/>
        <Applicants  btn="Apply" jobs="1191+ More Jobs" heading="Remote Jobs"/>
        <Applicants  btn="Apply" jobs="106+ More Jobs" heading="Walkin Jobs"/>
         
        
        
    </div>
  )
}

export default HomePage
