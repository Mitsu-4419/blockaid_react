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
    <Seo title='Home' description="元医師、現エンジニアのKorin Yamada のPortofolio Site, Blog です。"/>
    <Layout>
    <Box bgColor='white' pb='100' >
      <Flex w='95%' h={{xl:fadeinFlag?"400px":"800px",lg:fadeinFlag?"400px":"800px",md:fadeinFlag?"350px":"700px",sm:fadeinFlag?"300px":"500px", base:fadeinFlag?"280px":"480px"}} mr='auto' ml='auto'  justify='center' alignItems='center'>
          <Box w={{xl:fadeinFlag?"280px":"500px",lg:fadeinFlag?"280px":"500px",md:fadeinFlag?"240px":"420px",sm:fadeinFlag?"220px":"350px",base:fadeinFlag?"200px":"330px"}} >
            <img  src={topPageGif} alt='topPageGif' width="100%"></img>
          </Box>
      </Flex>
      {fadeinFlag?
         <FadeIn>
         <Box w='100%' textAlign='center' h='20' mt='10'>
           <Text fontSize={{xl:42,lg:42,md:38, sm:38}} color='gray.700' fontWeight='bold'>Skills</Text>
         </Box>
         <Flex w="95%" mr='auto' ml='auto' justify='center' height={{xl:400, lg:300}} direction={{xl:"row", lg:"row", md:"column", sm:"column", base:"column"}}>
           <Box m={{xl:'35', lg:'25', md:'35', sm:'35', base:"2"}} w={{xl:"30%", lg:"30%", md:"100%", sm:"100%", base:"100%"}}>
             <RadarChart chartType='front'/>
           </Box>
           <Box m={{xl:'35', lg:'25', md:'35', sm:'35',base:"2"}}  w={{xl:"30%", lg:"30%", md:"100%", sm:"100%",base:"100%"}}>
             <RadarChart chartType='backend' />
           </Box>
           <Box m={{xl:'35', lg:'25', md:'35', sm:'35', base:"2"}}  w={{xl:"30%", lg:"30%", md:"100%", sm:"100%", base:"100%"}}>
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
