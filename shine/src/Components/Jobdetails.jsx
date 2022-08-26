import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getTasks } from '../Redux/action'
import {Link} from "react-router-dom"
const Jobdetails = () => {
    const {id}=useParams()
     
    const dispatch=useDispatch()
    const applicant=useSelector((state)=>state.applicants)
    const[data,setdata]=useState({})
   
    useEffect(()=>{
        if(applicant.length===0)
        {
          dispatch(getTasks())
        }
      },[dispatch,applicant.length])
      useEffect(()=>{
        if(id)
        {
            const found = applicant.find(element => {
                return element.id == id;
              })
              setdata(found)
        }
      },[id,applicant])   
      const styles={
        color:"#919ba2",
        
      }
      console.log(data)
  return (
        <Box  ml="5rem" w="65%">
        <Box className='upper-div' cursor="pointer" key={id} p="1rem" lineHeight="2.5rem" backgroundColor="#f3fbfd" w="100%" height="275px" >
        <Flex style={styles} fontSize="13px" justifyContent="space-between">
            <Text>Hot</Text>
            <Text>1 day ago</Text>
        </Flex>
        <Text noOfLines={2} fontSize="18px" fontWeight="bold" align="left">{data.heading}</Text>
        <Text style={styles} align="left">{data.company}</Text>
        <Flex style={styles} gap="2rem">
          <Flex>
          <span><i className="fa-solid fa-location-dot"></i></span><Text ml="4px" > {data.location}</Text>
          </Flex>
            <Flex>
            <span><i className="fa-solid fa-briefcase"></i></span><Text ml="4px" > {data.exp}</Text>
            </Flex>
           
        </Flex>
        <Flex style={styles} fontSize="13px">
             
            <Text>{data.type}</Text>
        </Flex>
        <Flex justifyContent="flex-start"  >
            <Link to="/login">
        <Text fontWeight="bold" color="#9263ff" >Apply</Text>
        </Link>
        </Flex>
        </Box>  
        <Text mt="2rem" className='jobDetails border-sha' p="1.5rem" align="left">
                <Box color="black" fontWeight="bold" fontSize="3xl">
                Job Details
                
                </Box>
                <Text mb="2rem">
                Responsibilities
                </Text>
               
                <Text lineHeight="3rem" >-Develop a product vision that draws from the evolving technology landscape and anticipates hard problems of the future while planning for solutions that leverage Adobes strengths.<br/>

-Collect and analyze feedback from customers, stakeholders and other teams to shape requirements and features <br/>

-Create short- and long-term roadmaps with detailed user stories. <br/>

-Lead and collaborate with Engineering, XD to implement your vision. <br/>

-Drive product revenue through Sales/Marketing teams while ensuring Customer Success <br/>

-Suggest ways to track product use and impact on end users</Text> <br/>
 <Text mb="2rem">Requirements</Text>
 <Text lineHeight="3rem">
 -Proven experience of 10+ years as a Product Manager or similar role<br/>

-Hands on experience building Enterprise grade products with attention to user experience, using ML/AI techniques to solve for search, recommendation, or other such issues and to developing an overall product ecosystem.<br/>

-Knowledge of the Digital marketing landscape would be an additional plus<br/>

-Excellent communication and interpersonal skills<br/>

-Problem-solving aptitude<br/>

-Creative thinking skill<br/>

-Background in software development is preferred<br/>

-An MBA degree may help though it is not mandatory.<br/>
 </Text>

        </Text>
        <Box className='jobDetails' p="1.5rem" align="left">
            <Text  color="black" fontWeight="bold" fontSize="3xl">Company Details</Text>
            <Text>Adobe is the global leader in digital media and digital marketing solutions. Our creative, marketing and document solutions empower everyone – from emerging artists to global brands – to bring digital creations to life and deliver immersive, compelling experiences to the right person at the right moment for the best results. In short, Adobe is everywhere, and we’re changing the world through digital experiences.</Text>
        </Box>
        </Box>
  )
}

export default Jobdetails
