// import React, { memo,useState,VFC} from "react";
// import { Box, Flex, Heading,Text, Link } from "@chakra-ui/react";
// import { StaticImage } from "gatsby-plugin-image";
// import { useIntl } from "gatsby-plugin-intl"

// type Props = {
//     headtitle: string;
//     url:string,
//     imageUrl: string;
//     content:string;
//     usedTech:string;
//   };


// export const WorkComp: VFC<Props> = memo(props => {
//   const {headtitle,url,imageUrl,content, usedTech} = props
//   const intl = useIntl()
//   return (
//     <>
//     <Box mr='auto' ml='auto' mt='40px' mb='40px' w='90%'>
//             <Flex justify='start' w='50%'>
//                 <Heading>{intl.formatMessage({ id: headtitle })}</Heading>
//             </Flex>
//             <Flex w='100%'  mt='10'>
//                 <Flex w='50%' justify='center' alignItems='center'>
//                    <Link href={url} isExternal>
//                     <StaticImage
//                         src={imageUrl}
//                         width={250}
//                         quality={95}
//                         alt="jankengame"
//                     />
//                     </Link>
//                 </Flex>
//                 <Box w='50%' bg='gray.100' p='5'>
//                         {
//                         intl.formatMessage({ id: content }).split('\n').map((str, index)=>{
//                             return <Text key={index}>{str}<br /></Text>
//                         }) 
//                         }
//                     <Box mt='10px'>
//                         <Text>{intl.formatMessage({ id: "work-main-tech" })}：</Text>
//                         <Text>{intl.formatMessage({ id: usedTech })}</Text>
//                     </Box>
//                 </Box>
//             </Flex>
//         </Box>
//     </>
//   );
// });