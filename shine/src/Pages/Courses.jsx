import { Box } from '@chakra-ui/react';
import React from 'react'
import Applicants from '../Components/Applicants';

const Courses = () => {
    var counters = 1;
    
    setInterval(function(){
      document.getElementById('o' + counters).checked = true;
      counters++;
      if(counters > 3){
        counters = 1;
      }
    }, 2000);
    
  return (
    <Box>
    <div id="main-1">
    <div className="slider">
      <div className="slides">
         
        <input type="radio" name="radio-btn" id="o5"/>
        <input type="radio" name="radio-btn" id="o6"/>
        <input type="radio" name="radio-btn" id="o7"/>
        <input type="radio" name="radio-btn" id="o8"/>
         
       
        
        <div className="slide first">
          <img src="https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fimages%2Fhomepage%2Fbanner%2FDesktop_banner_2.png&w=1920&q=75" />
        </div>
        <div className="slide">
          <img src="https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fimages%2Fhomepage%2Fbanner%2Fexcellent.png&w=1920&q=75" />
        </div>
        <div className="slide">
          <img src="https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fimages%2Fhomepage%2Fbanner%2Flearning__Desktop1.png&w=1920&q=75" />
        </div>
        <div className="slide">
          <img src="https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fimages%2Fhomepage%2Fbanner%2Flearning__Desktop1.png&w=1920&q=75" />
        </div>
     
      </div>
    
      <div className="navigation-manual">
        <label htmlFor="o5" className="manual-btn"></label>
        <label htmlFor="o6" className="manual-btn"></label>
        <label htmlFor="o7" className="manual-btn"></label>
        <label htmlFor="o8" className="manual-btn"></label>
      
      </div>
      
    </div>
  
</div>
<img src="https://i.im.ge/2022/08/26/Owg8JJ.Screenshot-8.png" alt="Screenshot_8" border="0"/>
<img src="https://i.im.ge/2022/08/26/Ow8noc.Screenshot-9.png" alt="Screenshot_9" border="0"></img>
<img src="https://i.im.ge/2022/08/26/OwRrZ6.Screenshot-10.png" alt="Screenshot_10" border="0"></img>
<Applicants elem="/purchase" btn="Buy" jobs="119 More Courses"  heading="Popular Courses"/>
</Box> 
  )
}

export default Courses
