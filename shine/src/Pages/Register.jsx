import React from 'react'
import {Box,Text} from "@chakra-ui/react";
import { ArrowUpIcon } from '@chakra-ui/icons'

export const Register = () => {
  return (
    <Box width={"80%"} height={"600px"} border="1px solid green" marginLeft={"10%"} marginTop={"5%"}
    boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" padding={"0px"} textAlign="left"> 
        <Text fontWeight={"600"} fontSize={"22px"} marginTop={"2%"}
         marginLeft={"22%"}>Register Now</Text>
         {/* autofill option */}
         <Box width={"30%"} borderRadius={"8px"} textAlign={"center"} display={"flex"}
          height={"45px"} border={"1px solid purple"} marginLeft={"14%"} marginTop={"2%"} cursor={"pointer"}
          >

            <Text marginLeft={"2%"} 
            marginTop={"4%"}>Autofill by Resume</Text>

            <ArrowUpIcon 
             marginTop={"4.5%"}
             width={"10%"}
             height={"20px"}
             color={"purple.500"}
             marginLeft={"24%"}
             fontWeight={"700"}
           ></ArrowUpIcon>
           <Text  marginTop={"4%"} fontWeight={"700"}
           color={"purple.500"}>Upload</Text>
          </Box>
          <Box width={""}></Box>
    </Box>
  )
}
