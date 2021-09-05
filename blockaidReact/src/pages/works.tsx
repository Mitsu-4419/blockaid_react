import * as React from "react"
import { Box,Text, Heading, Flex,VStack,Link  } from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import  Layout from "../components/Layout";
import { useIntl } from "gatsby-plugin-intl"

const WorkPage = () => {
    const intl = useIntl()

    return(
  <>
    <Seo title='works'/>
    <Layout>
    <Box pb='150'>
        <Flex justify='center' h='120px' alignItems='center'>
            <Heading fontSize={{xl:"4xl",lg:"4xl",md:"3xl", sm:"3xl",base:"2xl"}}>{intl.formatMessage({ id: "work-title" })}</Heading>
        </Flex>
        <VStack bg='white'  w='90%' mr='auto' ml='auto' pb='60px'>
            <Box mr='auto' ml='auto' mt='40px' mb='40px' w='90%'>
                <Flex justify='start' w='50%'>
                    <Heading fontSize={{xl:"4xl",lg:"4xl",md:"3xl", sm:"3xl",base:"2xl"}}>{intl.formatMessage({ id: "work1-year" })}</Heading>
                </Flex>
                <Flex w='100%'  mt='10' direction={{xl:"row", lg:"row", md:"column", sm:"column", base:"column"}}>
                    <Flex w={{xl:"50%", lg:"50%", md:"100%", sm:"100%", base:"100%"}} justify='center' alignItems='center'>
                        <Link href="https://jankengame-2cfec.firebaseapp.com/" isExternal>
                        <StaticImage
                            src="../images/jankenGame.png"
                            width={260}
                            quality={95}
                            alt="jankengame"
                        />
                        </Link>
                    </Flex>
                    <Box  w={{xl:"50%", lg:"50%", md:"100%", sm:"100%", base:"100%"}} bg='gray.100' p='5' mt={{md:"20px", sm:'20px',base:"10px"}} fontSize={{md:"18px",base:"13px"}}>
                            {
                            intl.formatMessage({ id: "work1-content" }).split('\n').map((str, index)=>{
                                return <Text key={index}>{str}<br /></Text>
                            }) 
                            }
                        <Box mt='10px'>
                            <Text>{intl.formatMessage({ id: "work-main-tech" })}：</Text>
                            <Text>{intl.formatMessage({ id: "work-main-tech1" })}</Text>
                        </Box>
                    </Box>
                </Flex>
            </Box>
            <Box w='90%' mr='auto' ml='auto' mt='40px' mb='40px' >
                <Flex justify='start' w='50%'>
                    <Heading fontSize={{xl:"4xl",lg:"4xl",md:"3xl", sm:"3xl",base:"2xl"}}>{intl.formatMessage({ id: "work2-year" })}</Heading>
                </Flex>
                <Flex w='100%'  mt='10' direction={{xl:"row", lg:"row", md:"column", sm:"column",  base:"column"}}>
                    <Flex  w={{xl:"50%", lg:"50%", md:"100%", sm:"100%",base:"100%"}} justify='center' alignItems='center'>
                        <Link href="https://cryptotuber.com/#/" isExternal>
                            <StaticImage
                                src="../images/cryptotuber_logoT.jpg"
                                width={220}
                                quality={95}
                                alt="cryptotuber"
                            />
                        </Link>
                    </Flex>
                    <Box  w={{xl:"50%", lg:"50%", md:"100%", sm:"100%", base:"100%"}} bg='gray.100' p='5' mt={{md:"20px", sm:'20px',base:"10px"}} fontSize={{md:"18px",base:"13px"}}>
                        <Text>
                        {
                            intl.formatMessage({ id: "work2-content" }).split('\n').map((str, index)=>{
                                return <Text key={index}>{str}<br /></Text>
                            }) 
                            }
                        </Text>
                        <Box mt='10px'>
                            <Text>{intl.formatMessage({ id: "work-main-tech" })}：</Text>
                            <Text>{intl.formatMessage({ id: "work-main-tech2" })}</Text>
                        </Box>
                    </Box>
                </Flex>
            </Box>
            <Box w='90%' mr='auto' ml='auto' mt='40px' mb='40px' pt='30px'>
                <Flex justify='start' w='50%'>
                    <Heading fontSize={{xl:"4xl",lg:"4xl",md:"3xl", sm:"3xl",base:"2xl"}}>{intl.formatMessage({ id: "work3-year" })}</Heading>
                </Flex>
                <Flex w='100%'  mt='10' direction={{xl:"row", lg:"row", md:"column", sm:"column",  base:"column"}}>
                    <Flex  w={{xl:"50%", lg:"50%", md:"100%", sm:"100%",base:"100%"}} justify='center' alignItems='center'>
                        <Link href="https://gamelive.jp" isExternal>
                            <StaticImage
                                src="../images/gameLivelogo.png"
                                width={220}
                                quality={95}
                                alt="cryptotuber"
                            />
                        </Link>
                    </Flex>
                    <Box  w={{xl:"50%", lg:"50%", md:"100%", sm:"100%",base:"100%"}} bg='gray.100' p='5' mt={{md:"20px", sm:'20px',base:"10px"}} fontSize={{md:"18px",base:"13px"}}>
                        <Text>
                        {
                            intl.formatMessage({ id: "work3-content" }).split('\n').map((str, index)=>{
                                return <Text key={index}>{str}<br /></Text>
                            }) 
                            }<br/>
                        </Text>
                        <Box mt='10px'>
                            <Text>{intl.formatMessage({ id: "work-main-tech" })}：</Text>
                            <Text>{intl.formatMessage({ id: "work-main-tech3" })}</Text>
                        </Box>
                    </Box>
                </Flex>
            </Box>
            <Box w='90%' mr='auto' ml='auto' mt='40px' mb='40px' pt='30px'>
                <Flex justify='start' w='50%'>
                    <Heading fontSize={{xl:"4xl",lg:"4xl",md:"3xl", sm:"3xl",base:"2xl"}}>{intl.formatMessage({ id: "work4-year" })}</Heading>
                </Flex>
                <Flex w='100%'  mt='10' direction={{xl:"row", lg:"row", md:"column", sm:"column",  base:"column"}}>
                    <Flex  w={{xl:"50%", lg:"50%", md:"100%", sm:"100%",base:"100%"}} justify='center' alignItems='center'>
                        <Link href="https://cooktuber.com" isExternal>
                            <StaticImage
                                src="../images/CookTuber_logo.png"
                                width={220}
                                quality={95}
                                alt="cryptotuber"
                            />
                        </Link>
                    </Flex>
                    <Box  w={{xl:"50%", lg:"50%", md:"100%", sm:"100%",base:"100%"}} bg='gray.100' p='5' mt={{md:"20px", sm:'20px',base:"10px"}} fontSize={{md:"18px",base:"13px"}}>
                        <Text>
                        {
                            intl.formatMessage({ id: "work4-content" }).split('\n').map((str, index)=>{
                                return <Text key={index}>{str}<br /></Text>
                            }) 
                            }
                        </Text>
                        <Box mt='10px'>
                            <Text>{intl.formatMessage({ id: "work-main-tech" })}：</Text>
                            <Text>{intl.formatMessage({ id: "work-main-tech4" })}</Text>
                        </Box>
                    </Box>
                </Flex>
            </Box>
            <Box w='90%' mr='auto' ml='auto' mt='40px' mb='40px' pt='30px'>
                <Flex justify='start' w='50%'>
                    <Heading fontSize={{xl:"4xl",lg:"4xl",md:"3xl", sm:"3xl",base:"2xl"}}>{intl.formatMessage({ id: "work5-year" })}</Heading>
                </Flex>
                <Flex w='100%'  mt='10' direction={{xl:"row", lg:"row", md:"column", sm:"column", base:"column"}}>
                    <Flex  w={{xl:"50%", lg:"50%", md:"100%", sm:"100%", base:"100%"}} justify='center' alignItems='center'>
                        <Link href="" isExternal>
                            <StaticImage
                                src="../images/nonoshireLogo.png"
                                width={220}
                                quality={95}
                                alt="cryptotuber"
                            />
                        </Link>
                    </Flex>
                    <Box  w={{xl:"50%", lg:"50%", md:"100%", sm:"100%",base:"100%"}} bg='gray.100' p='5' mt={{md:"20px", sm:'20px',base:"10px"}} fontSize={{md:"18px",base:"13px"}}>
                        <Text>
                        {
                            intl.formatMessage({ id: "work5-content" }).split('\n').map((str, index)=>{
                                return <Text key={index}>{str}<br /></Text>
                            }) 
                            }
                        </Text>
                        <Box mt='10px'>
                            <Text>{intl.formatMessage({ id: "work-main-tech" })}：</Text>
                            <Text>{intl.formatMessage({ id: "work-main-tech5" })}</Text>
                        </Box>
                    </Box>
                </Flex>
            </Box>
            <Box w='90%' mr='auto' ml='auto' mt='40px' mb='40px' pt='30px'>
                <Flex justify='start' w='50%'>
                    <Heading fontSize={{xl:"4xl",lg:"4xl",md:"3xl", sm:"3xl",base:"2xl"}}>{intl.formatMessage({ id: "work6-year" })}</Heading>
                </Flex>
                <Flex w='100%'  mt='10' direction={{xl:"row", lg:"row", md:"column", sm:"column", base:"column"}}>
                    <Flex  w={{xl:"50%", lg:"50%", md:"100%", sm:"100%",base:"100%"}} justify='center' alignItems='center'>
                        <Link href="" isExternal>
                            <StaticImage
                                src="../images/BlockAidHP.png"
                                width={220}
                                quality={95}
                                alt="cryptotuber"
                            />
                        </Link>
                    </Flex>
                    <Box  w={{xl:"50%", lg:"50%", md:"100%", sm:"100%",base:"100%"}} bg='gray.100' p='5' mt={{md:"20px", sm:'20px',base:"10px"}} fontSize={{md:"18px",base:"13px"}}>
                        <Text>
                        {
                            intl.formatMessage({ id: "work6-content" }).split('\n').map((str, index)=>{
                                return <Text key={index}>{str}<br /></Text>
                            }) 
                            }
                        </Text>
                        <Box mt='10px'>
                            <Text>{intl.formatMessage({ id: "work-main-tech" })}：</Text>
                            <Text>{intl.formatMessage({ id: "work-main-tech6" })}</Text>
                        </Box>
                    </Box>
                </Flex>
            </Box>
            <Box w='90%' mr='auto' ml='auto' mt='40px' mb='40px' pt='30px'>
                <Flex justify='start' w='50%'>
                    <Heading fontSize={{xl:"4xl",lg:"4xl",md:"3xl", sm:"3xl",base:"2xl"}}>{intl.formatMessage({ id: "work7-year" })}</Heading>
                </Flex>
                <Flex w='100%'  mt='10' direction={{xl:"row", lg:"row", md:"column", sm:"column", base:"column"}}>
                    <Flex  w={{xl:"50%", lg:"50%", md:"100%", sm:"100%" ,base:"100%"}} justify='center' alignItems='center'>
                        <Link href="" isExternal>
                            <StaticImage
                                src="../images/question.png"
                                width={220}
                                quality={95}
                                alt="cryptotuber"
                            />
                        </Link>
                    </Flex>
                    <Box  w={{xl:"50%", lg:"50%", md:"100%", sm:"100%", base:"100%"}} bg='gray.100' p='5' mt={{md:"20px", sm:'20px',base:"10px"}} fontSize={{md:"18px",base:"13px"}}>
                        <Text>
                        {
                            intl.formatMessage({ id: "work7-content" }).split('\n').map((str, index)=>{
                                return <Text key={index}>{str}<br /></Text>
                            }) 
                            }
                        </Text>
                        <Box mt='10px'>
                            <Text>{intl.formatMessage({ id: "work-main-tech" })}：</Text>
                            <Text>{intl.formatMessage({ id: "work-main-tech7" })}</Text>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </VStack>
    </Box>
    </Layout>
  </>
)
}

export default WorkPage
