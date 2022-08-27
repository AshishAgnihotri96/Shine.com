import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Box
} from '@chakra-ui/react' 
 import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getTasks } from '../Redux/AppReducer/action'
 
 const BackdropExample=()=> {
  const namee=useSelector((state)=>state.AuthReducer.token)
  const OverlayOne = () => (
      <ModalOverlay 
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
    )
  
    const OverlayTwo = () => (
      <ModalOverlay
        bg='none'
        backdropFilter='auto'
        backdropInvert='80%'
        backdropBlur='2px'
      />
    )
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)
    const {id}=useParams()
    const applicant=useSelector((state)=>state.AppReducer.applicants)
    const[data,setdata]=useState([])
      const dispatch=useDispatch()
    useEffect(()=>{
        if(applicant.length===0)
        {
          dispatch(getTasks())
        }
      },[dispatch,applicant.length])
      useEffect(()=>{
        if(id)
        {
            const found = applicant.find(element => {
                return element.id == id;
              })
              setdata(found)
        }
      },[id])
      console.log(id)
          return (
      <>
      <Box ml="4rem">
      <Text align="left" fontWeight="bold"  mt="2rem">Applying For:{data.heading}</Text>
      <Text align="left"   mt="2rem">Type:{data.type}</Text>
      </Box>
       <Button mb="13.5rem"
  ml='4'
  onClick={() => {
    setOverlay(<OverlayTwo />)
    onOpen()
  }}
>
  Apply Here
</Button>

        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>Hi {namee}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Applied Successfull</Text>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default BackdropExample;




