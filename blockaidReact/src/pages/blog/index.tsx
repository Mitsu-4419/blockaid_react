import React, {useState} from "react";
// import { Link } from "gatsby"
import { Grid, GridItem, Button, Box, Divider,Text, Heading, Flex,Wrap,WrapItem,SimpleGrid} from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import  Layout from "../../components/Layout";
import { BlogCard } from "../../components/molecules/blogCard"
import { graphql } from "gatsby"
import { useEffect } from "react";

export default function BlogPage({data}) {
    console.log("hogehoge")
   console.log(data)
   const [blogData, setBlogData] = useState([])
   useEffect(()=>{
    console.log(data.allContentfulBlogHinagataMarkdown.nodes)
    let datanodes=[]
    data.allContentfulBlogHinagataMarkdown.nodes.map((node)=>{
        if(node.title){
            datanodes.push(node)
        }
    })
    setBlogData(datanodes)
   },[data])


   return (
    <>
    <Layout>
    <Box pb='150px'>
        <Flex w='90%' ml='auto' mr='auto' h="150px"  justify='center' alignItems='center'>
            <Text fontWeight='bold' fontSize='60'>Blog</Text>
        </Flex>
        <Box h='90vh' maxWidth={{xl:"1280px",}} ml='auto' mr='auto' pt='40px' pl='24px' pr='24px'  bg='white' shadow='sm'> 
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
                                {content.title == null? null:
                                <BlogCard id={content.slug} title={content.title} imageUrl={content.mainThumbnail.fluid.src} tag={content.tag} postDate={content.postDate}/>}
                            </WrapItem>
                        </Box> 
                    ))}
                    </Wrap>
                ):""}
            </Box>
        </Box>
    </Box>
  </Layout>
  </>
)
}

export const query = graphql`
    query ContentfulQuery($language:String) {
        allContentfulBlogHinagataMarkdown(sort: {fields: postDate, order: DESC} filter: {node_locale: {eq:$language}}) {
        nodes {
            slug
            title
            createdAt
            postDate
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
