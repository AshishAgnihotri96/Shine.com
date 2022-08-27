import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'



const ApplicantCard = ({id,heading,company,location,exp,tag,type,btn,elem}) => {
  const styles={
    color:"#919ba2",
    
  }
  return (
    <Link to={`/jobdetail/${id}`}>
    <Box  cursor="pointer" className='main-div' lineHeight="1.75rem" h="215px"  p="1rem" w="355px"  key={id}>
        <Flex style={styles} fontSize="13px" justifyContent="space-between">
            <Text>Hot</Text>
            <Text>1 day ago</Text>
        </Flex>
        <Text noOfLines={2} fontSize="18px" fontWeight="bold" align="left">{heading}</Text>
        <Text style={styles} align="left">{company}</Text>
        <Flex style={styles} gap="2rem">
          <Flex>
          <span><i className="fa-solid fa-location-dot"></i></span><Text ml="4px" > {location}</Text>
          </Flex>
            <Flex>
            <span><i className="fa-solid fa-briefcase"></i></span><Text ml="4px" > {exp}</Text>
            </Flex>
           
        </Flex>
        <Flex style={styles} fontSize="13px" gap="2rem">
            <Text>{tag} </Text>
            <Text>{type}</Text>
        </Flex>
        <Flex className='sub-div' >
        <Link to={`${elem}/${id}`}>
        <Text fontWeight="bold" color="#9263ff" >{btn}</Text>
        </Link>
        </Flex>
        
    </Box>
    </Link>
  )
}

export default ApplicantCard
