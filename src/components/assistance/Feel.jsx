import React from 'react'
import { Heading , Container, HStack, Box, Button, Input} from '@chakra-ui/react'

const Feel = () => {
  return (
    <div>
     <Heading as='h3' size='lg' paddingTop={"50px"}>Feeling Lost?</Heading> 
     <Container color={"#3299960"} paddingTop={"10px"}>
           Our experts would love to assist you
     </Container> 
     <HStack justifyContent={"center"}>
        <HStack width={"45%"} border={"1px solid grey"} padding={"55px"}>
           <img width={"80px"} src='https://resume.shine.com/next/static/images/call-experts.png'/>
           <Box>
           <Container fontSize={"20px"} fontFamily={"bold"}>Call our expert immediately</Container>
           <Button backgroundColor={"rgb(144,96,255)"} marginLeft={"0px"}>
            <Container textColor={"white"}  fontSize={"10px"}>
                   Call Now
            </Container>             
           </Button>
           </Box>
            
        </HStack>
        <Box>or</Box>
        <HStack width={"45%"} border={"1px solid grey"} padding={"6px"}>
           <img width={"80px"} src='https://resume.shine.com/next/static/images/callback-detail.png'/>
           <Box>
           <Container fontSize={"20px"} fontFamily={"bold"}>Provide your details and we will call back</Container>
            <Input  placeholder='Name'/>
            <Input marginTop={"5px"} placeholder='Mobile'/>

           <Button backgroundColor={"rgb(144,96,255)"} marginLeft={"0px"}  marginTop={"5px"} >
            <Container textColor={"white"}fontSize={"10px"}>
                   Request Callback
            </Container>             
           </Button>           
           </Box>
            
        </HStack>
     </HStack>
    </div>
  )
}

export default Feel
