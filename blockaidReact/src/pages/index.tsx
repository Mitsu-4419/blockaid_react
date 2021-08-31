import React, {memo} from "react"
import { Box, Text,Flex, Image } from "@chakra-ui/react";

import Seo from "../components/seo"
import  Layout from "../components/Layout";
import { RadarChart } from "../js/RadarChart.js";
import topPageGif from '../media/intro3.gif';


const IndexPage = memo(() => {
  
  return(
   <>
    <Seo title="Home" />
    <Layout>
    <Box bgColor='#fcfcfc' pb='100'>
      <Flex w='95%' mr='auto' ml='auto' h='400px' justify='center' alignItems='center'>
          <Box w='280px' >
            <img  src={topPageGif} alt='topPageGif'></img>
          </Box>
          {/* <StaticImage
                  src="../media/intro.gif"
                  width={250}
                  quality={95}
                  alt="topPageSurgeon"
              /> */}
      </Flex>
      <Box w='100%' textAlign='center' h='20' mt='10'>
        <Text fontSize='42' color='gray.700' fontWeight='bold'>Skills</Text>
      </Box>
      <Flex w="95%" mr='auto' ml='auto' justify='center' height={{xl:400, lg:300, md:280, sm:250}}>
        <Box m={{xl:'35', lg:'25', md:'5', sm:'0'}}>
          <RadarChart chartType='front'/>
        </Box>
        <Box m={{xl:'35', lg:'25', md:'5', sm:'0'}}>
          <RadarChart chartType='backend'/>
        </Box>
        <Box m={{xl:'35', lg:'25', md:'5', sm:'0'}}>
          <RadarChart chartType='others'/>
        </Box>
      </Flex>
    </Box>
  </Layout>
  </>
  )
})

export default IndexPage
