import React, {useState} from "react";
import { Button, Box,Text, Flex,Wrap,WrapItem} from "@chakra-ui/react"

import Seo from "../../components/seo"
import  Layout from "../../components/Layout";
import { BlogCard } from "../../components/molecules/blogCard"
import { graphql } from "gatsby"
import { useEffect } from "react";
import { useIntl } from "gatsby-plugin-intl"

export default function BlogPage({data}) {
   const [blogData, setBlogData] = useState([])
   const [blogFlag, setblogFlag] = useState("all")
   const [mylife, setMyLife] = useState(false)
   const [kagoshima, setKagoshima] = useState(false)
   const [techStudy, setTechStudy] = useState(false)
   const [hobby, setHobby] = useState(false)
   const intl = useIntl()
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
    <Seo title="Ko-rin Yamada Blog" description='元医師、現エンジニアのKo-rin YamadaのBlog Siteです。エンジニアや鹿児島生活に関して書いています。'/>
    <Layout>
    <Box pb='150px'>
        <Flex w='90%' ml='auto' mr='auto' h={{xl:"150px",lg:"150px",md:"120px",sm:"100px", base:"100px"}}  justify='center' alignItems='center'>
            <Text fontWeight='bold' fontSize={{xl:"60",lg:"60",md:"50", sm:"30", base:"30"}}>Blog</Text>
        </Flex>
        <Box minH='90vh' maxWidth={{xl:"1280px",}} ml='auto' mr='auto' pt='40px' pl='24px' pr='24px'  bg='white' shadow='sm'> 
            <Flex w='100%' ml='auto' mr='auto'>
                    <Button _hover={{bg:'blue.100'}} fontSize={{xl:"16px",lg:"16px",md:"16px",sm:"14px",base:"12px"}}  bgColor={mylife?'blue.100':"gray.100"}  h='100%' minH='42px' w='25%' onClick={onClickChangeLife}>{intl.formatMessage({ id: "blogTag1" })}</Button>
                    <Button _hover={{bg:'blue.100'}} fontSize={{xl:"16px",lg:"16px",md:"16px",sm:"14px",base:"12px"}} bgColor={kagoshima?'blue.100':"gray.100"}   h='100%' minH='42px' w='25%' onClick={onClickChangeKagoshima}>{intl.formatMessage({ id: "blogTag2" })}</Button>
                    <Button _hover={{bg:'blue.100'}} fontSize={{xl:"16px",lg:"16px",md:"16px",sm:"14px",base:"12px"}} bgColor={techStudy?'blue.100':"gray.100"}    h='100%' minH='42px' w='25%' onClick={onClickChangeTechStudy}>{intl.formatMessage({ id: "blogTag3" })}</Button>
                    <Button _hover={{bg:'blue.100'}} fontSize={{xl:"16px",lg:"16px",md:"16px",sm:"14px",base:"12px"}} bgColor={hobby?'blue.100':"gray.100"}    h='100%' minH='42px' w='25%' onClick={onClickChangeHobby}>{intl.formatMessage({ id: "blogTag4" })}</Button>
            </Flex>
            <Box mt='40px'>
                <Wrap  ml='auto' mr='auto' w='100%'>
                {blogData.map(content=>{
                    if(blogFlag=="all"){
                        return <Box w={{xl:"24.3%", lg:"32.4%", md:"48.3%", sm:"99%",base:"99%"}} p='2' >
                        <WrapItem key={content.id} mx="auto" >
                           <BlogCard id={content.slug} title={content.title} imageUrl={content.mainThumbnail.fluid.src} tag={content.tag} postDate={content.postDate}/>
                       </WrapItem>
                      </Box>
                    }else if(blogFlag==content.tag){
                        return <Box w={{xl:"24.3%", lg:"32.4%", md:"48.3%", sm:"99%", base:"99%"}} p='2' >
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
