import * as React from "react"
import { Grid, GridItem, Box,Text, Heading, Flex,VStack } from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import  Layout from "../components/Layout";
import { useIntl } from "gatsby-plugin-intl"
import { ProfileText } from "../components/molecules/profileText"

const ProfilePage = () => {
  const intl = useIntl()

  return (
  <>
     <Layout>
    <Grid
      templateRows="repeat(34, 1fr)"
      templateColumns="repeat(34, 1fr)"
      h='100vh'
    >
      <GridItem rowSpan={2} colSpan={34}></GridItem>
      <GridItem rowSpan={32} colSpan={2} ></GridItem>
      <GridItem rowSpan={4} colSpan={30}   bg='white'>
          <Flex w='95%' h='100%' ml='auto' mr='auto' borderBottom='1px' borderBottomColor='blue.200' alignItems='center'>
            <Heading fontSize='5xl' ml='12'>Profile</Heading>
          </Flex>
      </GridItem>
      <GridItem rowSpan={32} colSpan={2} ></GridItem>
      <GridItem rowSpan={{xl:20, lg:20, md:8, sm:10}} colSpan={{xl:11, lg:11, md:30, sm:30}}  bg='white' >
        <Flex w='100%' h='100%' justify='center' alignItems='center'>
            <Box w={{xl:280, lg:250, md:180, sm:150}}>
            <StaticImage
                src="../images/CEOFace.png"
                quality={95}
                alt="CEOFace"
            />
            </Box>
        </Flex>
      </GridItem>
      <GridItem rowSpan={{xl:20, lg:20, md:12, sm:10}} colSpan={{xl:19, lg:19, md:30, sm:30}}  bg='white' >
        <Flex h='100%' alignItems='center' p='4'>
          <VStack align='start' spacing={3} fontSize={{xl:"20", lg:"18", md:"16", sm:"10"}}>
            <ProfileText year='prof1-year' content='prof1-content'></ProfileText>
            <ProfileText year='prof2-year' content='prof2-content'></ProfileText>
            <ProfileText year='prof3-year' content='prof3-content'></ProfileText>
            <Flex>
              <Text w='130px'>{intl.formatMessage({ id: "prof4-year" })}</Text>
              <Text>{intl.formatMessage({ id: "prof4-1-content" })}<br/>{intl.formatMessage({ id: "prof4-2-content" })}<br/>{intl.formatMessage({ id: "prof4-3-content" })}</Text>
            </Flex>
            <ProfileText year='prof5-year' content='prof5-content'></ProfileText>
            <Box mt='10px' mb='10px'>
              <Text>{intl.formatMessage({ id: "prof6-content" })}</Text>
            </Box>
            <Flex>
              <Text w='130px'>{intl.formatMessage({ id: "prof7-year" })}</Text>
              <Text>{intl.formatMessage({ id: "prof7-1-content" })}<br/>{intl.formatMessage({ id: "prof7-2-content" })}</Text>
            </Flex>
            <ProfileText year='prof8-year' content='prof8-content'></ProfileText>
            <ProfileText year='prof9-year' content='prof9-content'></ProfileText>
            <ProfileText year='prof10-year' content='prof10-content'></ProfileText>
          </VStack>
        </Flex>
      </GridItem>
      <GridItem rowSpan={6} colSpan={18}  bg='white' p='4'>
        <Box m='2' fontSize={{xl:"20", lg:"18", md:"16", sm:"10"}}pl={{xl:"10", lg:"8", md:"6", sm:"4"}} pr={{xl:"10", lg:"8", md:"6", sm:"4"}}>
          <Text fontWeight={"bold"}>{intl.formatMessage({ id: "prof-certificate" })}</Text>
          <Text>
          {intl.formatMessage({ id: "prof-certificate-detail1" })}<br/>
          {intl.formatMessage({ id: "prof-certificate-detail2" })}
          </Text>
        </Box>
      </GridItem>
      <GridItem rowSpan={6} colSpan={12}  bg='white' p='4'>
        <Box m='2'fontSize={{xl:"20", lg:"18", md:"16", sm:"10"}} pl={{xl:"10", lg:"8", md:"6", sm:"4"}} pr={{xl:"10", lg:"8", md:"6", sm:"4"}}>
            <Text fontWeight={"bold"}>{intl.formatMessage({ id: "prof-hobby" })}</Text>
            <Text>{intl.formatMessage({ id: "prof-hobby-detail" })}</Text>
        </Box>
      </GridItem>
      <GridItem rowSpan={2} colSpan={30}></GridItem>
    </Grid>
    </Layout>
  </>)
}

export default ProfilePage
