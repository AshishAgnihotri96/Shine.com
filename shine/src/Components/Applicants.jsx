import Carousel from 'react-elastic-carousel';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ApplicantCard from './ApplicantCard'
import { Center, Text } from '@chakra-ui/react';
import { getTasks } from '../Redux/AppReducer/action';

const Applicants = ({heading,jobs,btn,elem}) => {
    const dispatch=useDispatch()
    const breakPoints=[
        
       
        {width:768,itemsToShow:3},
        
    ]

    const applicant=useSelector((state)=>state.AppReducer.applicants) 
    
    useEffect(()=>{
        if(applicant.length===0)
        {
            dispatch(getTasks())
        }
        
    },[dispatch,applicant.length])
  return (
    <Center>
        
    <div  style={{width:"85%"}}>
        <Text style={{textAlign:"center"}} fontWeight="bold" fontSize="5xl">{heading}</Text>
          <Carousel breakPoints={breakPoints}>
            {applicant.length>0 && applicant.map((item)=>{
                return(
                    <ApplicantCard elem={elem} btn={btn} key={item.id} {...item}/>
                )
            })}
            </Carousel>  
            <Text cursor="pointer" fontSize="14px" fontWeight="bold" mt="-25px" mb="2rem" color="#8b59ff">{jobs}</Text> 
    </div>
    
    </Center>
  )
}

export default Applicants
