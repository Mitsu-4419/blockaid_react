import React, {useState} from "react";
// import { Link } from "gatsby"
import { Grid, GridItem, Button, Box, Divider,Text, Heading, Flex,Wrap,WrapItem,SimpleGrid} from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import { Header } from "../../components/organisms/layout/Header"
import { Footer } from "../../components/organisms/layout/Footer"
import { BlogCard } from "../../components/molecules/blogCard"
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
    <Flex w='90%' ml='auto' mr='auto' h="150px"  justify='center' alignItems='center'>
        <Text fontWeight='bold' fontSize='60'>Blog</Text>
    </Flex>
    <Box h='90vh' maxWidth={{xl:"1280px",}} ml='auto' mr='auto' pt='40px' pl='24px' pr='24px' bg={{md:"blue", sm:'red'}}> 
        <Flex w='100%' ml='auto' mr='auto'>
                <Button _hover={{bg:'blue.100'}} _active={{bg: "#dddfe2", transform: "scale(0.98)",}} bg='gray.100'  h='100%' minH='42px' w='25%'>初めまして</Button>
                <Button _hover={{bg:'blue.100'}} _active={{bg: "#dddfe2", transform: "scale(0.98)",}} bg='gray.100'  h='100%' minH='42px' w='25%'>鹿児島生活</Button>
                <Button _hover={{bg:'blue.100'}} _active={{bg: "#dddfe2", transform: "scale(0.98)",}} bg='gray.100'  h='100%' minH='42px' w='25%'>Tech,勉強</Button>
                <Button _hover={{bg:'blue.100'}} _active={{bg: "#dddfe2", transform: "scale(0.98)",}} bg='gray.100'  h='100%' minH='42px' w='25%'>趣味</Button>
        </Flex>
        <Box mt='40px'>
        {blogData.length>0?
            (
                <Wrap  ml='auto' mr='auto' w='100%'>
                    {blogData.map(content=>(
                    <Box w={{xl:"24.3%", lg:"32.4%", md:"48.3%", sm:"99%"}} p='2' >
                        <WrapItem key={content.slug} mx="auto" >
                            {content.title == null? "":
                            <BlogCard id={content.slug} title={content.title} imageUrl={content.mainThumbnail.fluid.src} tag={content.tag} createdAt={content.createdAt}/>}
                        </WrapItem>
                    </Box> 
                ))}
                </Wrap>
            ):""}
        </Box>
    </Box>
    <Footer></Footer>
  </>
   )
}

export const query = graphql`
    query ContentfulQuery($language:String) {
        allContentfulBlogHinagataMarkdown(sort: {fields: createdAt, order: DESC} filter: {node_locale: {eq:$language}}) {
        nodes {
            slug
            title
            createdAt
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
