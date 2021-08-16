import React, {useState} from "react";
// import { Link } from "gatsby"
import { Grid, GridItem, Button, Box, Divider,Text, Heading, Flex,Wrap,WrapItem} from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import { Header } from "../../components/organisms/layout/Header"
import { BlogCard } from "../../components/blogCard"
import { graphql } from "gatsby"
import { useEffect } from "react";


export default function BlogPage({data}) {
    console.log("hogehoge")
   console.log(data)
   const [blogData, setBlogData] = useState([])
   useEffect(()=>{
    setBlogData(data.allContentfulBlogHinagataMarkdown.nodes)
    console.log("blogData",blogData)
   },[data])

   return (
    <>
    <Header/>
    <Grid
    h="100vh"
    templateRows="repeat(34, 1fr)"
    templateColumns="repeat(34, 1fr)"
    gap={1}
    >
    <GridItem rowSpan={2} colSpan={34} />
    <GridItem rowSpan={32} colSpan={2} />

    <GridItem rowSpan={2} colSpan={21}>
        <Flex w='95%' ml='auto' mr='auto'>
            <Button bgGradient="linear(to-br, #b1f5fc, #a1f7f7)"  h='100%' minH='42px' w='25%'>初めまして</Button>
            <Button bgGradient="linear(to-br, #b1f5fc, #a1f7f7)"  h='100%' minH='42px' w='25%'>鹿児島生活</Button>
            <Button bgGradient="linear(to-br, #b1f5fc, #a1f7f7)"  h='100%' minH='42px' w='25%'>Tech,勉強</Button>
            <Button bgGradient="linear(to-br, #b1f5fc, #a1f7f7)"  h='100%'  minH='42px' w='25%'>趣味</Button>
        </Flex>
    </GridItem>
    <GridItem rowSpan={29} colSpan={9}>
            <Box h='500px' bgColor='white' boxShadow='md'>
                <Box>
                    <StaticImage
                        src="../../images/sakurajima.JPG"
                        style={{width:"100%"}}
                        quality={95}
                        alt="sakurajima"
                    />
                </Box>
                <Box mr='auto' ml='auto' w='45%' mt='-65px'>
                    <StaticImage
                        src="../../images/koro.png"
                        style={{width:"100%"}}
                        max-width={160}
                        quality={95}
                        alt="koro"
                    />
                </Box>
                <Box w='100%' textAlign='center'>
                    <Text fontSize='3xl' fontWeight='bold'>Ko-rin</Text>
                </Box>
                <Box p='2'>
                    <Text fontSize='sm'>
                    元心臓外科医。35歳からプログラミングを学んで現在鹿児島でエンジニアをしています。
                            主戦場はFrontですが、技術全般好きでDataScience, ML, AIも勉強しています。
                            プログラミング、趣味、鹿児島生活など気ままに書いていきます。
                    </Text>
                </Box>
            </Box>
            <Box h="100px">

            </Box>
            <Box h='500px' bgColor='blue'>

            </Box>
    </GridItem>
    <GridItem rowSpan={32} colSpan={2} />

    <GridItem rowSpan={28} colSpan={21}>
       
        {blogData.length>0?
            (<Wrap p={{ base: 4, md: 10 }} ml='auto' mr='auto'>
                {blogData.map(content=>(
                    <WrapItem key={content.slug} mx="auto">
                        {content.mainThumbnail == null? "":<BlogCard id={content.slug} title={content.title} imageUrl={content.mainThumbnail.fluid.src} tag={content.tag} />}
                    </WrapItem>
            ))}
            </Wrap>):""}
    </GridItem>
    <GridItem rowSpan={1} colSpan={9}  />

    <GridItem rowSpan={2} colSpan={30} />
    </Grid>
  </>
   )
}


export const query = graphql`
    query ContentfulQuery($language:String) {
        allContentfulBlogHinagataMarkdown(filter: {node_locale: {eq:$language}}) {
        nodes {
            slug
            title
            mainThumbnail {
            fluid {
                src
            }
            }
            tag
        }
    }
}

`
