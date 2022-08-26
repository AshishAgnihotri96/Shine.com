import React, { useEffect } from 'react'
 
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Text,Box } from '@chakra-ui/react'
import { getTasks } from '../Redux/AppReducer/action'
import { useDispatch,useSelector } from "react-redux";
import ApplicantCard from './ApplicantCard';
 

const Applicant = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const dispatch=useDispatch()
  const apple=useSelector((state)=>state.applicants)
   
  useEffect(()=>{
    if(apple.length===0)
    {
      dispatch(getTasks()) 
    }

  },[dispatch,apple.length])

  return (
    <div>
      <Text fontWeight="bold" fontSize="4xl">Be an Early Applicant</Text>
      <Slider  {...settings}>
      {apple.length>0 && apple.map((item)=>{
        return(
          <Box className='card'>
          <ApplicantCard key={item.id} {...item}/>
          </Box>
        )
      })}
      </Slider>
    </div>
  )
}

export default Applicant
