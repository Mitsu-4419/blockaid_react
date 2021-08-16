/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo,useState,VFC} from "react";
import ReactMarkdown from 'react-markdown'
import { graphql } from "gatsby"
import { Box, Text,Flex, Heading, useDisclosure, Spacer, Button, Image } from "@chakra-ui/react";
import {Header} from "../components/organisms/layout/Header"
import marked from "marked";
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import Markdown from '../components/Markdown.js'

// type TemplateProps = {
//   data: {
//     blog: {
//       id: string,
//       postDate:string,
//       tag:string,
//       title:string,
//       content:{
//         content:html
//       }
//     }
//   }
// }

const ProjectDetails = ({data}) => {
  // const { id } = data.markdownRemark.frontmatter
  console.log(data.blog.content)
  console.log(data.blog.content.content)
  // const source = data.blog.content.content.replace(/\n/gi, '\nreplaced_text ')
  // marked.setOptions({
  //   gfm: true,
  //   breaks: true,
  // });
  // const parsedSouce = marked(source).replace(/replaced_text/g, '');

  return (
    <>
      <Header/>
      <Box>
        {data.blog.id}
        {data.blog.postDate}
        {data.blog.tag}
        {data.blog.title }
        {/* {data.blog.content.content} */}
        {/* <div dangerouslySetInnerHTML={{ __html: marked(parsedSouce) }} /> */}
      </Box>
      <Box color='red'>
      <Markdown >{data.blog.content.childMdx.body}</Markdown>
      </Box>
      
    </>
  )
}
 
export default ProjectDetails


export const query = graphql`
  query($slug: String!, $language:String) {
    blog: contentfulBlogHinagataMarkdown(slug: { eq: $slug }, node_locale:{eq:$language}) {
      id
      postDate
      tag
      title
      content{
        content
        childMdx {
          body
        }
      }
    }
  }
`
