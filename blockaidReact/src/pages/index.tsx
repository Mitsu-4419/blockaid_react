import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Box,Flex,Text } from "@chakra-ui/layout"


import Seo from "../components/seo"
import { Header } from "../components/organisms/layout/Header"
import { Footer} from "../components/organisms/layout/Footer"
import { RadarChart } from "../js/RadarChart.js";

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <Header></Header>
    <Flex w='95%' mr='auto' ml='auto' h='400px' justify='center' alignItems='center'>
        <StaticImage
                src="../images/surgeon.png"
                width={250}
                quality={95}
                alt="topPageSurgeon"
            />
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
    <Footer></Footer>
  </>
)

export default IndexPage
