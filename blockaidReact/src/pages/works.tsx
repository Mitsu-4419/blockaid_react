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
    <Layout>
    <Box pb='150'>
        <Flex justify='center' h='120px' alignItems='center'>
            <Heading fontSize={{xl:"4xl",lg:"4xl",md:"3xl", sm:"3xl"}}>{intl.formatMessage({ id: "work-title" })}</Heading>
        </Flex>
        <VStack bg='white'  w='90%' mr='auto' ml='auto' pb='60px'>
            <Box mr='auto' ml='auto' mt='40px' mb='40px' w='90%'>
                <Flex justify='start' w='50%'>
                    <Heading>{intl.formatMessage({ id: "work1-year" })}</Heading>
                </Flex>
                <Flex w='100%'  mt='10' direction={{xl:"row", lg:"row", md:"column", sm:"column"}}>
                    <Flex w={{xl:"50%", lg:"50%", md:"100%", sm:"100%"}} justify='center' alignItems='center'>
                        <Link href="https://jankengame-2cfec.firebaseapp.com/" isExternal>
                        <StaticImage
                            src="../images/jankenGame.png"
                            width={260}
                            quality={95}
                            alt="jankengame"
                        />
                        </Link>
                    </Flex>
                    <Box  w={{xl:"50%", lg:"50%", md:"100%", sm:"100%"}} bg='gray.100' p='5' mt={{md:"20px", sm:'20px'}}>
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
                    <Heading>2019年10月</Heading>
                </Flex>
                <Flex w='100%'  mt='10' direction={{xl:"row", lg:"row", md:"column", sm:"column"}}>
                    <Flex  w={{xl:"50%", lg:"50%", md:"100%", sm:"100%"}} justify='center' alignItems='center'>
                        <Link href="https://cryptotuber.com/#/" isExternal>
                            <StaticImage
                                src="../images/cryptotuber_logoT.jpg"
                                width={220}
                                quality={95}
                                alt="cryptotuber"
                            />
                        </Link>
                    </Flex>
                    <Box  w={{xl:"50%", lg:"50%", md:"100%", sm:"100%"}} bg='gray.100' p='5' mt={{md:"20px", sm:'20px'}}>
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
                    <Heading>2020年4月</Heading>
                </Flex>
                <Flex w='100%'  mt='10' direction={{xl:"row", lg:"row", md:"column", sm:"column"}}>
                    <Flex  w={{xl:"50%", lg:"50%", md:"100%", sm:"100%"}} justify='center' alignItems='center'>
                        <Link href="https://gamelive.jp" isExternal>
                            <StaticImage
                                src="../images/gameLivelogo.png"
                                width={220}
                                quality={95}
                                alt="cryptotuber"
                            />
                        </Link>
                    </Flex>
                    <Box  w={{xl:"50%", lg:"50%", md:"100%", sm:"100%"}} bg='gray.100' p='5' mt={{md:"20px", sm:'20px'}}>
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
                    <Heading>2020年7月</Heading>
                </Flex>
                <Flex w='100%'  mt='10' direction={{xl:"row", lg:"row", md:"column", sm:"column"}}>
                    <Flex  w={{xl:"50%", lg:"50%", md:"100%", sm:"100%"}} justify='center' alignItems='center'>
                        <Link href="https://cooktuber.com" isExternal>
                            <StaticImage
                                src="../images/CookTuber_logo.png"
                                width={220}
                                quality={95}
                                alt="cryptotuber"
                            />
                        </Link>
                    </Flex>
                    <Box  w={{xl:"50%", lg:"50%", md:"100%", sm:"100%"}} bg='gray.100' p='5' mt={{md:"20px", sm:'20px'}}>
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
                    <Heading>2020年10月</Heading>
                </Flex>
                <Flex w='100%'  mt='10' direction={{xl:"row", lg:"row", md:"column", sm:"column"}}>
                    <Flex  w={{xl:"50%", lg:"50%", md:"100%", sm:"100%"}} justify='center' alignItems='center'>
                        <Link href="" isExternal>
                            <StaticImage
                                src="../images/nonoshireLogo.png"
                                width={220}
                                quality={95}
                                alt="cryptotuber"
                            />
                        </Link>
                    </Flex>
                    <Box  w={{xl:"50%", lg:"50%", md:"100%", sm:"100%"}} bg='gray.100' p='5' mt={{md:"20px", sm:'20px'}}>
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
                    <Heading>2021年6月</Heading>
                </Flex>
                <Flex w='100%'  mt='10' direction={{xl:"row", lg:"row", md:"column", sm:"column"}}>
                    <Flex  w={{xl:"50%", lg:"50%", md:"100%", sm:"100%"}} justify='center' alignItems='center'>
                        <Link href="" isExternal>
                            <StaticImage
                                src="../images/BlockAidHP.png"
                                width={220}
                                quality={95}
                                alt="cryptotuber"
                            />
                        </Link>
                    </Flex>
                    <Box  w={{xl:"50%", lg:"50%", md:"100%", sm:"100%"}} bg='gray.100' p='5' mt={{md:"20px", sm:'20px'}}>
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
                    <Heading>2021年</Heading>
                </Flex>
                <Flex w='100%'  mt='10' direction={{xl:"row", lg:"row", md:"column", sm:"column"}}>
                    <Flex  w={{xl:"50%", lg:"50%", md:"100%", sm:"100%"}} justify='center' alignItems='center'>
                        <Link href="" isExternal>
                            <StaticImage
                                src="../images/question.png"
                                width={220}
                                quality={95}
                                alt="cryptotuber"
                            />
                        </Link>
                    </Flex>
                    <Box  w={{xl:"50%", lg:"50%", md:"100%", sm:"100%"}} bg='gray.100' p='5' mt={{md:"20px", sm:'20px'}}>
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
