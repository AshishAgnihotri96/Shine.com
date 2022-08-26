import { Box, Heading , Container, HStack, Link} from '@chakra-ui/react'
import React from 'react'
import {data} from "./data"
const Dataslider = () => {
  //  console.log(data)
  return (
    <div style={{display:"flex", gap:"4%", marginTop:"50px",padding:"30px", marginLeft:"130px"}}>
        {data.map((e)=>{
            return(

    <Box boxShadow={ "black 0px 3px 8px"} width={"250px"} >
           <img width={"100%"} src={`${e.imgSrc}`}/>   
        <Box textAlign={"left"} >
             <Heading as='h5' size='sm' padding={"10px 20px"} marginLeft={"7%"} >{e.heading}</Heading>
            <Container border={""} padding={"5%"} fontSize={"9px"} color={"#606060"}>{e.para}</Container>
            <HStack>
               <Heading as='h6' size='xs' paddingLeft={"5%"}>{e.price}</Heading>
               <Link>
                   <Box fontSize={"11px"} color={"purple.500"} paddingLeft={"90px"}>Explore</Box>
               </Link>
              </HStack> 
        </Box>   
    </Box>
            )
        })}
         
    </div>
  )
}

export default Dataslider
