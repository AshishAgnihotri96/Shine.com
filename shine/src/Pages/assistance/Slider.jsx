import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const Slider = () => {
    const images = [
        { url: "https://static1.shine.com/l/m/images/homepage/banner/Desktop_1.png" },
        { url: "https://static1.shine.com/l/m/images/homepage/banner/excellent_-_Copy.png" },
        { url: "https://static1.shine.com/l/m/images/homepage/banner/Desktop_ServicesBanner_Content_revised.png" },
        { url: "https://static1.shine.com/l/m/images/homepage/banner/Recruiters_not_noticing_your_application-.png" },
        { url: "https://static1.shine.com/l/m/images/homepage/banner/Recruiters_not_noticing_your__application-_Content.png" },
        // { url: "images/6.jpg" },
        // { url: "images/7.jpg" },
      ];
  return (
    <div style={{}}>
        <SimpleImageSlider 
     
        width={"100%"}
        height={"50vh"}
        images={images}
        showBullets={true}
        showNavs={true}
        slideDuration={0.5}
        loop={true}
        autoPlay={true}
      />
    </div>
  )
}

export default Slider
