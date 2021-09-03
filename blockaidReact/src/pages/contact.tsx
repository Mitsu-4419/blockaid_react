import * as React from "react"
// import { Link } from "gatsby"
import { Box,Text,Flex,VStack  } from "@chakra-ui/react"

import Seo from "../components/seo"
import  Layout from "../components/Layout";
import { useIntl } from "gatsby-plugin-intl"

const ContactPage = () => {
  const intl = useIntl()
  return(
  <>
    <Seo title='contact'/>
    <Layout>
    <Flex h='70vh' w='100%' justify='center' alignItems='center'>
        <Box boxShadow='xl' w='60%' h='350px'>
            <Flex bgColor='white'  w='100%' h='100%' textAlign='center' alignItems='center' justify='center' fontSize='xl'>
                <VStack spacing={12} fontSize={{xl:"28px", lg:"24px", md:"22px", sm:"18px"}}>
                    <Text> {intl.formatMessage({ id:"contact1" })}</Text>
                    <Text> {intl.formatMessage({ id:"contact2" })}</Text>
                    <Text fontSize={{xl:"30px", lg:"25px", md:"23px", sm:"15px"}}>m.yamada@blockaid-tokyo.com</Text>
                </VStack>
            </Flex>
        </Box>
    </Flex>
    </Layout>
  </>)
}

export default ContactPage
