import React from 'react'
import Applicants from '../Components/Applicants'

import Head from '../Components/Head'
import Slider from '../Components/Test'



 

const HomePage = () => {
  return (
    <div>
         <Slider/>
        <Head/>
        <Applicants jobs="22742+ More Jobs" heading="Be An Early Applicant"/>
        <Applicants jobs="1191+ More Jobs" heading="Remote Jobs"/>
        <Applicants jobs="106+ More Jobs" heading="Walkin Jobs"/>
        
        
    </div>
  )
}

export default HomePage
