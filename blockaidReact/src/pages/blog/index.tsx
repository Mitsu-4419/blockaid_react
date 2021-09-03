import React, {useState} from "react";
// import { Link } from "gatsby"
import { Grid, GridItem, Button, Box, Divider,Text, Heading, Flex,Wrap,WrapItem,SimpleGrid} from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../../components/seo"
import  Layout from "../../components/Layout";
import { BlogCard } from "../../components/molecules/blogCard"
import { graphql } from "gatsby"
import { useEffect } from "react";
import { string } from "prop-types";

export default function BlogPage({data}) {
   const [defaultBlogData, setDefaultBlogData] = useState([])
   const [blogData, setBlogData] = useState([])
   const [blogFlag, setblogFlag] = useState("all")
   const [mylife, setMyLife] = useState(false)
   const [kagoshima, setKagoshima] = useState(false)
   const [techStudy, setTechStudy] = useState(false)
   const [hobby, setHobby] = useState(false)
   useEffect(()=>{
    console.log(data.allContentfulBlogHinagataMarkdown.nodes)
    let datanodes=[]
    data.allContentfulBlogHinagataMarkdown.nodes.map((node)=>{
        console.log("node.title", node.title)
        if(typeof(node.title)==="string"){
            datanodes.push(node)
        }
    })
    // setDefaultBlogData(datanodes)
    setBlogData(datanodes)
    console.log("blogFlag", blogFlag)
   },[data])

   const onClickChangeLife = (()=>{
       if(blogFlag=="MyLife"){
           setblogFlag("all")
           setMyLife(false)
       }else{
        setblogFlag("MyLife")
        setMyLife(true)
        setHobby(false)
        setKagoshima(false)
        setTechStudy(false)
       }
   })
   const onClickChangeKagoshima = (()=>{
        if(blogFlag=="Kagoshima"){
            setblogFlag("all")
            setKagoshima(false)
        }
        else{
        setblogFlag("Kagoshima")
        setKagoshima(true)
        setMyLife(false)
        setTechStudy(false)
        setHobby(false)
        }
        
    })
    const onClickChangeTechStudy = (()=>{
        if(blogFlag=="TechStudy"){
            setblogFlag("all")
            setTechStudy(false)
        }
        else{
        setblogFlag("TechStudy")
        setTechStudy(true)
        setMyLife(false)
        setHobby(false)
        setKagoshima(false)
        }
        
    })
    const onClickChangeHobby = (()=>{
        if(blogFlag=="Hobby"){
            setblogFlag("all")
            setHobby(false)
        }
        else{
        setblogFlag("Hobby")
        setHobby(true)
        setTechStudy(false)
        setMyLife(false)
        setKagoshima(false)
        }
        
    })

   return (
    <>
    <Seo title="blogtop"/>
    <Layout>
    <Box pb='150px'>
        <Flex w='90%' ml='auto' mr='auto' h="150px"  justify='center' alignItems='center'>
            <Text fontWeight='bold' fontSize='60'>Blog</Text>
        </Flex>
        <Box minH='90vh' maxWidth={{xl:"1280px",}} ml='auto' mr='auto' pt='40px' pl='24px' pr='24px'  bg='white' shadow='sm'> 
            <Flex w='100%' ml='auto' mr='auto'>
                    <Button _hover={{bg:'blue.100'}}  bgColor={mylife?'blue.100':"gray.100"}  h='100%' minH='42px' w='25%' onClick={onClickChangeLife}>初めまして</Button>
                    <Button _hover={{bg:'blue.100'}} bgColor={kagoshima?'blue.100':"gray.100"}   h='100%' minH='42px' w='25%' onClick={onClickChangeKagoshima}>鹿児島生活</Button>
                    <Button _hover={{bg:'blue.100'}} bgColor={techStudy?'blue.100':"gray.100"}    h='100%' minH='42px' w='25%' onClick={onClickChangeTechStudy}>Tech,勉強</Button>
                    <Button _hover={{bg:'blue.100'}} bgColor={hobby?'blue.100':"gray.100"}    h='100%' minH='42px' w='25%' onClick={onClickChangeHobby}>趣味</Button>
            </Flex>
            <Box mt='40px'>
                <Wrap  ml='auto' mr='auto' w='100%'>
                {blogData.map(content=>{
                    if(blogFlag=="all"){
                        return <Box w={{xl:"24.3%", lg:"32.4%", md:"48.3%", sm:"99%"}} p='2' >
                        <WrapItem key={content.id} mx="auto" >
                           <BlogCard id={content.slug} title={content.title} imageUrl={content.mainThumbnail.fluid.src} tag={content.tag} postDate={content.postDate}/>
                       </WrapItem>
                      </Box>
                    }else if(blogFlag==content.tag){
                        return <Box w={{xl:"24.3%", lg:"32.4%", md:"48.3%", sm:"99%"}} p='2' >
                        <WrapItem key={content.id} mx="auto" >
                           <BlogCard id={content.slug} title={content.title} imageUrl={content.mainThumbnail.fluid.src} tag={content.tag} postDate={content.postDate}/>
                       </WrapItem>
                      </Box>
                    }
                   
                }
                
                 )}
                </Wrap>
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
