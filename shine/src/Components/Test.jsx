import React from 'react'

const Slider = () => {
    
    var counter = 1;
    setInterval(function(){
      document.getElementById('radio'+counter).checked = true;
      counter++;
      if(counter > 4){
        counter = 1;
      }
    }, 2000);
    
  return (
    <div id="main">
    <div className="slider">
      <div className="slides">
         
        <input type="radio" name="radio-btn" id="radio1"/>
        <input type="radio" name="radio-btn" id="radio2"/>
        <input type="radio" name="radio-btn" id="radio3"/>
        <input type="radio" name="radio-btn" id="radio4"/>
       
        
        <div className="slide first">
          <img src="https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FDesktop_Banner_Shine.png&w=1920&q=75" />
        </div>
        <div className="slide">
          <img src="https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FShine_2nd_pos_Desktop.png&w=1920&q=75" />
        </div>
        <div className="slide">
          <img src="https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FReliance_Desktop.png&w=1920&q=75" />
        </div>
        <div className="slide">
          <img src="https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2FInfosys.png&w=1920&q=75" />
        </div>
        
       
        
        
      </div>
    
      <div className="navigation-manual">
        <label htmlFor="radio1" className="manual-btn"></label>
        <label htmlFor="radio2" className="manual-btn"></label>
        <label htmlFor="radio3" className="manual-btn"></label>
        <label htmlFor="radio4" className="manual-btn"></label>
      
      </div>
      
    </div>
  
</div> 
  )
}

export default Slider
