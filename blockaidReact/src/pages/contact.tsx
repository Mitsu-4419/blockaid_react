import * as React from "react"
// import { Link } from "gatsby"
import { Grid, GridItem, Box, Divider,Text, Heading, Flex,VStack,Link  } from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import { Header } from "../components/organisms/layout/Header"
import { Footer } from "../components/organisms/layout/Footer"


const ContactPage = () => (
  <>
    <Header/>
    <Flex h='70vh' w='100%' justify='center' alignItems='center'>
        <Box boxShadow='xl' w='60%' h='350px'>
            <Flex bgColor='white'  w='100%' h='100%' textAlign='center' alignItems='center' justify='center' fontSize='xl'>
                <VStack spacing={12}>
                    <Text>医学＋Techに関して、こんな事できない？や、<br/>簡単なアプリ、Web制作などご気軽にご相談ください
                    </Text>
                    <Text fontSize='2xl'>m.yamada@blockaid-tokyo.com</Text>
                </VStack>
            </Flex>
        </Box>
    </Flex>
    <Footer/>
  </>
)

export default ContactPage
