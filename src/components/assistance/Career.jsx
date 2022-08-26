import React from 'react'
import { Box , Button, Container, Heading, HStack, Link} from '@chakra-ui/react'
import {ViewIcon} from "@chakra-ui/icons";
import { careerData , careerDatas} from './data';

const Career = () => {
    // console.log(careerData)
  return (
    <div style={{backgroundColor:"#f2f3f8"}}>
      <Heading as='h3' size='lg' paddingTop={"50px"}>Career Guides</Heading>
      <div style={{display:"flex", margin:"50px"}}>
      {
        careerData.map((e)=>{
          return(
            
            <Box border={"1px solid black"} width={"280px"} marginLeft={"30px"} height={"170px"} bgColor={"white"} textAlign={"left"}>
            <Heading  as='h4' size='md' padding={"20px"}>{e.head}</Heading>
            <Container fontSize={"10px"}>{e.content}</Container>
    
               <HStack fontFamily={"heading"} color="#606060">
                <HStack spacing='24px' padding={"20px"}>
                  <Box fontSize={"10px"}> <ViewIcon/></Box>
                  <Box fontSize={"10px"}> {e.num} </Box> 
                </HStack>
                <Link>
                <Box fontSize={"11px"} color={"purple.500"} paddingLeft={"90px"}>Explore</Box>
                </Link>
                </HStack>
          </Box>
          )
        })
      } 
      </div>

      <div style={{display:"flex", margin:"50px"}}>
      {
        careerDatas.map((e)=>{
          return(
            
            <Box border={"1px solid black"} width={"280px"} height={"170px"} marginLeft={"30px"} bgColor={"white"} textAlign={"left"}>
            <Heading  as='h4' size='md' padding={"20px"}>{e.head}</Heading>
            <Container fontSize={"10px"}>{e.content}</Container>
    
               <HStack fontFamily={"heading"} color="#606060">
                <HStack spacing='24px' padding={"20px"}>
                  <Box fontSize={"10px"}> <ViewIcon/></Box>
                  <Box fontSize={"10px"}> {e.num} </Box> 
                </HStack>
                <Link>
                <Box fontSize={"11px"} color={"purple.500"} paddingLeft={"90px"}>Explore</Box>
                </Link>
                </HStack>
          </Box>
          )
        })
      } 
      </div>
    
    
     
    </div>
  )
}

export default Career
