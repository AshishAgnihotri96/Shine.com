import Carousel from 'react-elastic-carousel';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTasks } from '../Redux/action'
import ApplicantCard from './ApplicantCard'
import { Center, Text } from '@chakra-ui/react';

const Applicants = ({heading,jobs}) => {
    const dispatch=useDispatch()
    const breakPoints=[
        
       
        {width:768,itemsToShow:3},
        
    ]

    const applicant=useSelector((state)=>state.applicants)
    
    useEffect(()=>{
        if(applicant.length===0)
        {
            dispatch(getTasks())
        }
        
    },[dispatch,applicant.length])
  return (
    <Center>
        
    <div  style={{width:"85%"}}>
        <Text fontWeight="bold" fontSize="5xl">{heading}</Text>
          <Carousel breakPoints={breakPoints}>
            {applicant.length>0 && applicant.map((item)=>{
                return(
                    <ApplicantCard key={item.id} {...item}/>
                )
            })}
            </Carousel>  
            <Text cursor="pointer" fontSize="14px" fontWeight="bold" mt="-25px" mb="2rem" color="#8b59ff">{jobs}</Text> 
    </div>
    
    </Center>
  )
}

export default Applicants
