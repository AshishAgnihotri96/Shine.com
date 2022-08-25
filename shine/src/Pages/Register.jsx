import React from 'react'
import {Box,Text,Input,Image} from "@chakra-ui/react";
import { ArrowUpIcon } from '@chakra-ui/icons'
import {useState} from "react";

export const Register = () => {
  const [selectedFile,setSelectedFile]=useState("");
  console.log(selectedFile,"selectedfle")

  return (
    <Box width={"80%"} height={"600px"} border="1px solid green" marginLeft={"10%"} marginTop={"5%"}
    boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" padding={"0px"} textAlign="left"> 
        <Text fontWeight={"600"} fontSize={"22px"} marginTop={"2%"}
         marginLeft={"22%"}>Register Now</Text>
         {/* autofill option */}
         <Box width={"30%"} borderRadius={"8px"} textAlign={"center"} display={"flex"}
          height={"45px"} border={"1px solid #7922bc"} marginLeft={"14%"} marginTop={"2%"} cursor={"pointer"}
          >

            <Text marginLeft={"2%"} 
            marginTop={"4%"}>Autofill by Resume</Text>

            <ArrowUpIcon 
             marginTop={"4.5%"}
             width={"10%"}
             height={"20px"}
             color={"purple.500"}
             marginLeft={"24%"}
             fontWeight={"700"}
           ></ArrowUpIcon>
           <Text  marginTop={"4%"} fontWeight={"700"}
           color={"purple.500"}>Upload</Text>
          </Box>
          <Box width={"25%"} height={"30px"} border={"1px solid transparent"} marginLeft="15%">
          <Text fontSize={"12px"}>File Supported: pdf, doc, docx, rtf, txt - Max. 5 MB</Text>
          </Box>
          {/* or div */}
          <Box width={"30%"} borderRadius={"8px"} textAlign={"center"} display={"flex"}
          height={"45px"} border={"1px solid transparent"} marginLeft={"14%"} marginTop={"2%"} cursor={"pointer"}
          >
            <Box marginTop={"5%"}
             width={"25%"} height={"1px"} border={"1px solid #eeeeee"}></Box>
             <Text fontWeight={"700"}
              fontSize={"13px"} marginTop={"2%"} marginLeft={"2%"} marginRight={"2%"}
             >or Register Manually</Text>
             <Box marginTop={"5%"}
             width={"25%"} height={"1px"} border={"1px solid #eeeeee"}></Box>
            
           </Box>

    <Box marginLeft={"7.5%"} marginTop={"0.5%"} width={"85%"} height={"240px"} border={"1px solid transparent"}
    display={"flex"}>
      {/* that input div */}
      <Box width={"75%"} heigh={"100%"} border={"1px solid none"} marginRight={"1%"}>
        <Input type="text" placeholder='Name*' width={"45%"} color={"blue"}/>
        <Input type="text" placeholder='Mobile*' width={"45%"} marginLeft={"3%"}/>
        <Input type="text" placeholder='Email*' width={"45%"} marginTop={"1%"}/>
        <Input type="text" placeholder='Location*' width={"45%"} marginLeft={"3%"} marginTop={"3%"}/>
        <Text fontSize={"13px"}>*Password link will be sent to this email</Text>
        <Input type="text" placeholder='Experince/Fresher*' width={"45%"} color={"blue"} marginTop={"2%"}/>
        <Input type="text" placeholder='Highest Qualification*' width={"45%"} marginLeft={"3%"} marginTop={"2%"}/>
        <Input type="text" placeholder='Skills*' width={"93%"}  marginTop={"3%"}/>
      </Box>

      {/* that or div */}
      <Box width={"5%"} height={"100%"} border={"1px solid transparent"}>
        <Box width={"1px"} height={"80px"}  border={"1px solid #eeeeee"} marginLeft={"19%"}></Box>
        <Text>or</Text>
        <Box width={"1px"} height={"80px"}  border={"1px solid #eeeeee"} marginLeft={"19%"}></Box>
      </Box>
       {/* that googlediv */}
      <Box width={"20%"} heigh={"100%"} border={"1px solid transparent"} marginLeft={"2%"}>

      <Box width={"70%"} height={"40px"}  boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" cursor={"pointer"}
                    border={"1px solid transparent"} marginTop={"10%"}
                     display={"flex"}>

                    <Image marginTop={"1.6%"} marginLeft={"3%"}
                    width={"20%"} 
                    height={"70%"}
                     src={"data:image/png;base64,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"} alt="gg"/>
                      <Text marginLeft={"5%"} marginTop={"1%"} fontWeight={'600'}
                        fontSize={"13px"}>Google</Text>
                    </Box>

               {/*  */}
                        <Box width={"70%"} height={"40px"}  boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" cursor={"pointer"}
                        border={"1px solid transparent"} marginTop={"7%"}
                         display={"flex"}>

                        <Image marginTop={"1.6%"} marginLeft={"3%"}
                        width={"20%"} height={"70%"} src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAMAAADV/VW6AAAAZlBMVEUMZMX///8AWcD3+fynvuMAUL/e5/YAXMLL2O6wxuYAWcKbt+KmwOMAXsMAYcMAYMQAVL9CesqIo9dsk9VIgMx9oNfX4vNsldLv9foycsnm7/cLZ8W7zeiPr95Whs90m9YdbMVbi8+qTZOYAAACGUlEQVRoge2Y3XKCMBBGSUCCwQTUmoKg6Pu/ZC31JxtrJ2009OI7M15IBk5Ywu6GJAEAAAAAAAAAEBGthFR6Knm9XJWLcp3wKez8rWAjTSniR4BvUnbB6Nh+9c4sTGx919h6VsZ9/qIkdta0Ue9/tqV6NlQx9bVjZ4uY0dedq+/riPpE3+llTP3M1e9ETH1dOPp91JVfrak9dt5xbn+v4uqTxFj2TfSiV3X9NeUNE5RcrY7FNk2bvGyjrvorVZ0sl23Np+p3TiGIXunBr9GfLbGuuHxWfhDc5lrtFRc3Lu+jkofVvDCm6LOjes4MMsL7+ZpiV1pkYw8k1Cq3UlQx1E+YgNNtnOvtLCeHlzrRfEPbQsa2x/DqnJIrZvyBvkrc2jjONvh99dOLAz1woQ+Nv5++c1vSC8Usgr417BGBOwMv/fyh/RSZoPh76X+imFbP9iE7k3B90NYgXL89RNLnxhg39Z1YB0TfXz/fd1LydribQMjWxFt/rMeb1OIuBYU8fE99eutDq5aew/LX6+0dgMzoWBOQ+Pz0xs4t+s2JzMuX3oasro6OpgFV109PP/kIWvvTv9v99PmBnCN7MvpyfUGfrqQV8PV6mlg4XfrQQw899NBDDz300EMP/T/Tkwux7Ptvuj/rWYA+W9gM552sLOc2O7rLUQMZXQToBZcWV434+s/HH3e/nlS3sc/hAD0AAAAAAAAAgF/xAaFoIla5hpx3AAAAAElFTkSuQmCC"} alt="gg"/>
                            <Text marginLeft={"5%"} marginTop={"1%"} fontWeight={'600'}
                            fontSize={"13px"}>Linkedin</Text>
                        </Box>
                        {/* facebook div */}
                        <Box width={"70%"} height={"40px"}  
                        boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;" cursor={"pointer"}
                    border={"1px solid transparent"} marginTop={"7%"}
                     display={"flex"}>

                    <Image marginTop={"1.6%"} marginLeft={"3%"}
                    width={"20%"} height={"70%"} src={"https://image.shutterstock.com/image-photo/valencia-spain-march-05-2017-260nw-593204357.jpg"} alt="gg"/>
                        <Text marginLeft={"5%"} marginTop={"1%"} fontWeight={'600'}
                        fontSize={"13px"}>Facebook</Text>
                    </Box>
      </Box>
      
      
      
    </Box>
    <Box marginTop={"4%"} borderRadius={"12px"} display="flex"
     width={"17%"} height={"50px"} marginLeft={"25%"} border={"1px solid #7922bc"}
  >
     <ArrowUpIcon 
             marginTop={"4.5%"}
             width={"10%"}
             height={"20px"}
             color={"purple.500"}
             marginLeft={"4%"}
             fontWeight={"700"}
           ></ArrowUpIcon>
           <Text color={"purple.500"} fontWeight={"700"} marginTop={"3%"}> Upload</Text>
           <Box marginLeft={"0%"} marginTop={"3%"}
           width={"50%"} height={"100%"} border={"1px solid none"}>
            <Input fontSize={"8px"} border="none" cursor={"pointer"}
            type={"file"} placeholder="Upload" onChange={(e)=>setSelectedFile(e.target.value)}/>
           </Box>
     
          
  </Box>
    </Box>
  )
}
