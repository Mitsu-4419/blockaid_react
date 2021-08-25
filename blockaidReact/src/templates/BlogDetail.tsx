/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo,useState,VFC} from "react";
import ReactMarkdown from 'react-markdown'
import { graphql } from "gatsby"
import { Box, Text,Flex, Heading, useDisclosure, Spacer, Button, Image } from "@chakra-ui/react";
import {Header} from "../components/organisms/layout/Header"
import {Footer} from "../components/organisms/layout/Footer"
import marked from "marked";
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import Markdown from '../components/Markdown.js'
import { StaticImage } from "gatsby-plugin-image"
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
          <Box w='100%' textAlign='center'>
            <Text fontSize='30' fontWeight='bold'>
              {data.blog.title }
            </Text>
          </Box>
          <Image
            src={data.blog.mainThumbnail.fluid.src}
            alt="tosenkyoThumbnail"
            mt='50px'
            mb='50px'
          />
          <Box color='gray.900' fontSize='22'>
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
