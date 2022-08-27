
import React from 'react'
import { useState } from 'react'
import { ChevronLeftIcon ,ChevronRightIcon} from '@chakra-ui/icons'
const TopCompany = () => {
    const[index,setindex]=useState(0)
 
    const handleAdd=()=>{
        
            setindex(index+1)
       
    }
    const handleSub=()=>{
        setindex(index-1)
    }
    const images=[
        
        "https://i.im.ge/2022/08/24/O5IGCF.Screenshot-6.png",
        "https://i.im.ge/2022/08/24/O5IJcS.Screenshot-5.png",
    ]
  return (
    <div style={{cursor:"pointer",width:"100%"}}>
        <div style={{width:"85%",margin:"auto",display:"flex"}}>
        <button disabled={index===0} onClick={handleSub}>{<ChevronLeftIcon color="#9060ff" borderColor="9060ff" borderRadius="100%" border="1px solid gray" w="40px" h="40px"/>}</button>
        <div style={{width:"100%",margin:"auto"}}>
        <img src={images[index]}/>
    </div>
    <button disabled={index===1} onClick={handleAdd}>{<ChevronRightIcon color="#9060ff" borderColor="9060ff" borderRadius="100%" border="1px solid gray" w="40px" h="40px"/>}</button>
    </div>
    </div>
  )
}

export default TopCompany
// setindex(index+1)