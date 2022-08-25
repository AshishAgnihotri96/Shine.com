import { Box , Button, Container, Heading, HStack} from '@chakra-ui/react'

import React from 'react'
import Career from './Career'
import Dataslider from './Dataslider'
import Slider from './Slider'

const Assistance = () => {
  return (
    <div>
       <Slider/>
       <Box border={"1px solid blue"}>
             <Heading as='h3' size='lg' paddingTop={"30px"}>
             Increase Your Recruiter Reach By 10x
             </Heading>

           <HStack spacing='24px' border={"1px solid black"}>
           <Dataslider  />
                 
           </HStack>


          {/* 2nd slider */}


           <HStack spacing='50px' marginTop={"30px"} >
             <Box marginLeft={"140px"} border={"1px solid blue"}>
                  <img width={"300px"} src='https://resume.shine.com/next/static/images/check-resume-score.png' />
              </Box>
             <Box marginRight={"140px"}  border={"1px solid red"} >
                <Heading as='h4' size='md' paddingTop={"30px"}>
                 Are Recruiters Impressed By <br/> 
                  Your Resume?
                </Heading> <br/>
                <Container color={"#606060"}>
                Get the <span style={{color:'#2c4152'}} > free review</span>  of your resume in just 30 sec
                </Container>  <br/>    
                <Button  style={{backgroundColor:"orange", color:"while"}} >Check Resume Score</Button>            
             </Box>             
             </HStack>                       
          </Box>

          {/* CAREER GUIDE */}
          <Career/>


    </div>
  )
}

export default Assistance
