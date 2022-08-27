import { Box ,Button,Flex,Text} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { addPurchase, getTasks } from '../Redux/action'

const Purchase = () => {
    const dispatch=useDispatch()
    const purchase=useSelector((state)=>state.purchase)
    const applicants=useSelector((state)=>state.applicants)
    const[priced,setprice]=useState([])
    const {id}=useParams()
    useEffect(()=>{
        if(applicants.length===0)
        {
            dispatch(getTasks())
        }
        
    },[dispatch,applicants.length])
    useEffect(()=>{
        if(id)
        {
            const found = applicants.find(element => {
                return element.id == id;
              })
              setprice(found)
              purchase.push(found)
        }
        
      },[id,priced])
  
    console.log(purchase)
     
  return (
    <div>
        <Box >
        <h1>{`Hi, User`}</h1>
        <h1>Please Check Your Cart</h1>
        <Flex mt="5rem" gap="10rem">
        <Box p="1rem" className='purchase-div' key={id}>
            
        {purchase.length>0 && purchase.map((item,i)=>{
               
               return(
                   <div style={{border:"1px solid black"}}>
                       <Text align="left">{item.heading}</Text>
                       <Text align="left">{item.price}</Text>
                   </div>
               )
           
       })}
        </Box>
        <Box>
            <Box lineHeight="3rem">
                <Text fontWeight="bold" fontSize="3xl">Order Summary</Text>
                <Text>SubTotal:{priced.price}</Text>
                <Text fontWeight="bold" fontSize="18px">Total Payable:{priced.price}</Text>
            </Box>
            <Button color="white" backgroundColor="purple" >Proceed To Buy</Button>
        </Box>
        </Flex>
        <div>
           
            </div>
        </Box>
        
    </div>
  )
}

export default Purchase
