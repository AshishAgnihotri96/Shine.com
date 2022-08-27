import React from 'react'
import {Button, Center, Flex} from "@chakra-ui/react"
import Hiring from './Hiring'
import TopCompany from './TopCompany'
import { useState } from 'react'

const Head = () => {
    const [active,setactive]=useState(true)
 
  
    const handleClick=()=>{
           setactive(!active)
           
    }
    const asses={
        display:"flex",
        width:"100%",
        margin:"auto",
        
    }
  return (
    <div  className='head-class'  >
        <center>
        <img  style={{cursor:"pointer",marginTop:"-3rem"}} src="https://i.im.ge/2022/08/25/O9HRrY.Screenshot-7.png" alt="Screenshot_7" border="0"></img>
        </center>
        <Flex mt="4rem" gap="30px" justifyContent="center">
        <Button onClick={handleClick}  fontWeight="bold" variant="outline">COOL PLACE TO WORK</Button>
        <Button onClick={handleClick}  fontWeight="bold" variant="outline">TOP COMPANIES HIRING</Button>
        </Flex>
            <div>
                {active?<Hiring/>:<TopCompany/>}
            </div>
    </div>
  )
}

export default Head


