/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { graphql } from "gatsby"
import { Box, Text,Flex, Image, Tag,TagLabel } from "@chakra-ui/react";
import {Header} from "../components/organisms/layout/Header"
import {Footer} from "../components/organisms/layout/Footer"
import {changeDateFormat} from '../js/changeDateFormat.js'

const ProjectDetails = ({data}) => {
  console.log(data.blog.content)
  const date= changeDateFormat(data.blog.createdAt)

  return (
    <>
      <Header/>
      <Flex w='100%' justify='center' mt='80px' mb='100px'>
        <Box maxW='750px'>
          <Flex justify='center' w='100%'>
            <Text fontSize='15px' color='red'>{date}</Text>
          </Flex>
          <Box w='100%' textAlign='center' mt='10px' mb='10px'>
            <Text fontSize='30' fontWeight='bold'>
              {data.blog.title }
            </Text>
          </Box>
          <Flex h='50px' pl='20px' mb='10px'>
            <Tag size="md" colorScheme="gray" borderRadius="full" h='38px'>
                <Text mr='5px'>#</Text>
                <TagLabel>{data.blog.tag}</TagLabel>
              </Tag>
          </Flex>
            <Image
              src={data.blog.mainThumbnail.fluid.src}
              alt="tosenkyoThumbnail"
              fit='cover'
              h='600px' 
              w='100%'
            />
          <Box color='gray.900' fontSize='22' mt='4rem' mb='4rem'>
            {/* <Markdown >{data.blog.content.childMdx.body}</Markdown> */}
            <div dangerouslySetInnerHTML={{ __html: data.blog.content.childMarkdownRemark.html }} />
          </Box>
        </Box>
      </Flex>
      <Footer/>
    </>
  )
}
 
export default ProjectDetails


export const query = graphql`
  query($slug: String!, $language:String) {
    blog: contentfulBlogHinagataMarkdown(slug: { eq: $slug }, node_locale:{eq:$language}) {
      id
      tag
      title
      createdAt
      mainThumbnail {
        fluid {
          src
        }
      }
      content{
        content
        childMdx {
          body
        }
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
