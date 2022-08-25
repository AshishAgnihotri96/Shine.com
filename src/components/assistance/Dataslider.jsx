import { Box, Heading , Container} from '@chakra-ui/react'
import React from 'react'
import data from "./data"
const Dataslider = () => {
   console.log(data)
  return (
    <div style={{display:"flex", gap:"4%", marginTop:"50px"}}>
        {data.map((e)=>{
            return(

    <Box border={"1px solid red"} width={"250px"} >
           <img width={"100%"} src={`${e.imgSrc}`}/>   
        <Box textAlign={"left"} >
             <Heading as='h5' size='sm' padding={"10px 20px"} marginLeft={"7%"} >{e.heading}</Heading>
            <Container border={"1px solid red"} padding={"5%"} fontSize={"9px"} color={"#606060"}>{e.para}</Container>
             <Heading as='h6' size='xs' paddingLeft={"5%"}>{e.price}</Heading>
        </Box>   
    </Box>
            )
        })}
         
    </div>
  )
}

export default Dataslider
