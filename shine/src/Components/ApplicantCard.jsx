import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const ApplicantCard = ({id,heading,company,location,exp,tag,type}) => {
  return (
    <Box boxShadow= "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;" key={id}>
        <Flex>
            <Text>Hot</Text>
            <Text>1 day ago</Text>
        </Flex>
        <Text>{heading}</Text>
        <Text>{company}</Text>
        <Flex>
            <span><i class="fa-solid fa-location-dot"></i></span><Text>{location}</Text>
            <span><i class="fa-solid fa-briefcase"></i></span><Text>{exp}</Text>
        </Flex>
        <Flex>
            <Text>{tag} </Text>
            <Text>{type}</Text>
        </Flex>
    </Box>
  )
}

export default ApplicantCard
