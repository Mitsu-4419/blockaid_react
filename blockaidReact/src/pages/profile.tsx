import * as React from "react"
import { Link } from "gatsby"
import { Grid, GridItem, Box, Divider,Text, Heading, Flex,VStack } from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import { Header } from "../components/organisms/layout/Header"

const ProfilePage = () => (
  <>
    <Header/>
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
      <GridItem rowSpan={20} colSpan={11}  bg='white' >
        <Flex w='100%' h='100%' justify='center' alignItems='center'>
            <StaticImage
                src="../images/CEOFace.png"
                width={230}
                quality={95}
                alt="CEOFace"
            />
        </Flex>
      </GridItem>
      <GridItem rowSpan={20} colSpan={19}  bg='white' >
        <Flex h='100%' alignItems='center' p='4'>
          <VStack align='start' spacing={3}>
            <Flex>
              <Text w='120px'>1983年</Text>
              <Text>神戸市生まれ</Text>
            </Flex>
            <Flex>
              <Text w='120px'>2001年</Text>
              <Text>私立灘高校卒業</Text>
            </Flex>
            <Flex>
              <Text w='120px'>2009年</Text>
              <Text>大阪大学医学部医学科卒業</Text>
            </Flex>
            <Flex>
              <Text w='120px'>2009年〜</Text>
              <Text>亀田総合病院初期研修、太田記念病院一般外科、<br/>大阪大学医学部心臓外科で外科医として研鑽を積む<br/>その間にUSMLE1、２、3を取得</Text>
            </Flex>
            <Flex>
              <Text w='120px'>2017年~2018年</Text>
              <Text>Yale University Hospital CT Surgery Clinical Fellow</Text>
            </Flex>
            <Text>アメリカ留学を機に自分の人生を見つめ直し、外科医を辞め新しい道を模索する決意をする</Text>
            <Flex>
              <Text w='120px'>2019年4月</Text>
              <Text>Tokyo Gs Academy に入学。<br/>プログラミングに出会いその魅力に取り憑かれる</Text>
            </Flex>
            <Flex>
              <Text w='120px'>2020年1月</Text>
              <Text>BlockAidを起業、複数のWebサービスを運営</Text>
            </Flex>
            <Flex>
              <Text w='120px'>2021年3月〜</Text>
              <Text>株式会社AMIにエンジニアとしてJoin</Text>
            </Flex>
            <Flex>
              <Text w='120px'>2021年6月〜</Text>
              <Text>York University(UK) Computer Science Master Cource 就学中</Text>
            </Flex>
          </VStack>
        </Flex>
      </GridItem>
      <GridItem rowSpan={6} colSpan={30}  bg='white' p='4'>
        <Box m='2'>
          <Text>主な資格</Text>
          <Text>
              医師免許、USMLE Step1,2,3, 外科専門医、心臓外科専門医、産業医専門医<br/>
              Duolingo English Test 120, 統計検定２級、AtCoder 緑
          </Text>
        </Box>
        <Box m='2'>
          <Text>趣味</Text>
          <Text>ピアノ、ランニング、釣り、ラグビー観戦、SAX</Text>
        </Box>
      </GridItem>
      <GridItem rowSpan={2} colSpan={30}></GridItem>
    </Grid>
  </>
)

export default ProfilePage
