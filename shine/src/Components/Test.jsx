import React, { useEffect } from 'react'

const Test = () => {
    
    var counter = 1;
    setInterval(function(){
      // document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 4){
        counter = 1;
      }
    }, 2000);
    
  return (
    <div id="main">
    <div class="slider">
      <div class="slides">
         
        <input type="radio" name="radio-btn" id="radio1"/>
        <input type="radio" name="radio-btn" id="radio2"/>
        <input type="radio" name="radio-btn" id="radio3"/>
        <input type="radio" name="radio-btn" id="radio4"/>
       
        
        <div class="slide first">
          <img src="https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FDesktop_Banner_Shine.png&w=1920&q=75" alt=""/>
        </div>
        <div class="slide">
          <img src="https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FShine_2nd_pos_Desktop.png&w=1920&q=75" alt=""/>
        </div>
        <div class="slide">
          <img src="https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FReliance_Desktop.png&w=1920&q=75" alt=""/>
        </div>
        <div class="slide">
          <img src="https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FInfosys.png&w=1920&q=75" alt=""/>
        </div>
        
       
        
        
      </div>
    
      <div class="navigation-manual">
        <label for="radio1" class="manual-btn"></label>
        <label for="radio2" class="manual-btn"></label>
        <label for="radio3" class="manual-btn"></label>
        <label for="radio4" class="manual-btn"></label>
      
      </div>
      
    </div>
  
</div> 
  )
}

export default Test
