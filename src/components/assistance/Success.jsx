import React from 'react'
import { Box, Container, Heading, HStack } from '@chakra-ui/react'
import { successData } from './data'

const Success = () => {
    console.log("ss",successData)
  return (
    <Box >
       <Heading as='h3' size='lg' paddingTop={"50px"}>Success Stories</Heading> <br/>
       <HStack justifyContent={"center"} > 
        {
            successData.map((e)=>{
                return (
                    <Box   padding={"10px"} width="27%"  boxShadow={ "black 0px 3px 8px"}>
                         <HStack>
                         <img width={"15%"} src={`${e.srcOne}`}/> 
                         <img width={"15%"} style={{ marginLeft:"50%"}} src={`${e.srcTwo}`}/>   
                         </HStack>
                         <Container padding={"2px"} fontSize={"10px"}>{e.paragraph}</Container>
                         <Heading as='h5' size='sm'  textAlign={"left"} paddingLeft={"15px"}>{e.name}</Heading>
                         <Container paddingLeft={"15px"} textAlign={"left"} fontSize={"10px"}>{e.designation}</Container>
                    </Box>
                )
            })

        }
       </HStack>

    </Box>
  )
}

export default Success
