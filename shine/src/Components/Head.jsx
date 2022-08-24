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
        <div className='assesment' style={asses}>
                <div>
                    
                <img src="https://i.im.ge/2022/08/24/O5sjxK.Screenshot-1.png" alt="Screenshot_1" />
                    <h3>Assesment</h3>
                </div>
                    <div>
                    <img src="https://i.im.ge/2022/08/24/O5s8t1.Screenshot-3.png" alt="Screenshot_3" />
                <h3>Career Path</h3>
                </div>
                <div>
                <img src="https://i.im.ge/2022/08/24/O5sJqG.Screenshot-2.png" alt="Screenshot_2" />
                <h3>Dream Job</h3>
                </div>
        </div>
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
