/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo,VFC} from "react";
import {Flex,Box,Text,VStack, Link } from "@chakra-ui/react";
import { EmailIcon } from '@chakra-ui/icons'
import { StaticImage } from "gatsby-plugin-image";

export const Footer: VFC = memo(() => {
  
  return (
    <>
    <Flex
        as="nav"
        bg="blue.800"
        justify="center"
        padding={{ base: 3, md: 5 }}
        h='180px'
    >
        <VStack>
            <Flex justify='center' mt='auto' mb='auto' w={{xl:"50%",lg:"50%",md:"50%",sm:"50%"}}>
                <Link href="https://twitter.com/KodoOjiEngineer" isExternal>
                    <Box w='60px' ml={{lg:4}} mr={{lg:4}}>
                        <StaticImage alt="twitter" src="../../../images/twitterLogo.png" quality={95}></StaticImage>
                    </Box>
                </Link>
                <Link href="https://www.facebook.com/mitsutomo.yamada">
                    <Box w='60px' ml={{lg:4}} mr={{lg:4}}>
                        <StaticImage alt="facebook" src="../../../images/facebookLogo.png" quality={95}></StaticImage>
                    </Box>
                </Link>
                <Link href="https://www.linkedin.com/in/mitsutomo-yamada/">
                    <Box w='60px' ml={{lg:4}} mr={{lg:4}}>
                        <StaticImage alt="linkedin" src="../../../images/linkedinLogo.png" quality={95}></StaticImage>
                    </Box>
                </Link>
            </Flex>
            <Flex alignItems='center' color='white'>
                <EmailIcon w={5} h={5} mr='2' color='white'/>
                <Text fontSize='18'>m.yamada@blockaid-tokyo.com</Text>
            </Flex>
            <Flex alignItems='center' color='white'>
                <Text fontSize='14'>@2021 built by Gatsby</Text>
            </Flex>
        </VStack>
    </Flex>
    </>
  );
});