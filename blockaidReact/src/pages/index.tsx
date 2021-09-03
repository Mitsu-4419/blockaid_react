import React, {memo, useState} from "react"
import { Box, Text,Flex} from "@chakra-ui/react";

import Seo from "../components/seo"
import  Layout from "../components/Layout";
import { RadarChart } from "../js/RadarChart.js";
import topPageGif from '../media/topPage.gif';
import FadeIn from 'react-fade-in';

const IndexPage = memo(() => {
  console.log("Home Page 読み込み")
  const [fadeinFlag, setfadeinFlag]= useState(false)
  setTimeout(() => { setfadeinFlag(true) },11000)
  return(
   <>
    <Seo title='Home'/>
    <Layout>
    <Box bgColor='white' pb='100' >
      <Flex w='95%' h={fadeinFlag?"400px":"800px"} mr='auto' ml='auto'  justify='center' alignItems='center'>
          <Box w={fadeinFlag?"300px":"550px"} >
            <img  src={topPageGif} alt='topPageGif' width="100%"></img>
          </Box>
      </Flex>
      {fadeinFlag?
         <FadeIn>
         <Box w='100%' textAlign='center' h='20' mt='10'>
           <Text fontSize='42' color='gray.700' fontWeight='bold'>Skills</Text>
         </Box>
         <Flex w="95%" mr='auto' ml='auto' justify='center' height={{xl:400, lg:300}} direction={{xl:"row", lg:"row", md:"column", sm:"column"}}>
           <Box m={{xl:'35', lg:'25', md:'35', sm:'35'}} w={{xl:"30%", lg:"30%", md:"90%", sm:"90%"}}>
             <RadarChart chartType='front'/>
           </Box>
           <Box m={{xl:'35', lg:'25', md:'35', sm:'35'}}  w={{xl:"30%", lg:"30%", md:"90%", sm:"90%"}}>
             <RadarChart chartType='backend'/>
           </Box>
           <Box m={{xl:'35', lg:'25', md:'35', sm:'35'}}  w={{xl:"30%", lg:"30%", md:"90%", sm:"90%"}}>
             <RadarChart chartType='others'/>
           </Box>
         </Flex>
       </FadeIn>:""
      }

    </Box>
  </Layout>
  </>
  )
})

export default IndexPage
