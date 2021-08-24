/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo,useState,VFC} from "react";
import {Flex, Heading,Spacer, Button, Divider, Center } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import {Link} from 'gatsby';
import Language from "../../Language";

export const Header: VFC = memo(() => {
  
  return (
    <>
    <Flex
        as="nav"
        bg="blue.50"
        color="gray.800"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
        h='80px'
    >
        <Flex
        align="center"
        as="a"
        mr={8}
        _hover={{ cursor: "pointer" }}
        >
            <StaticImage
                src="../../../images/blockaid_icon_bgnone.png"
                max-width={50}
                quality={95}
                alt="A Gatsby astronaut"
            />
            <Heading as="h1" fontSize={{ base: "xl", md: "xl" }} ml='5'>
                Ko-rin Yamada
            </Heading>
        </Flex>
        <Spacer></Spacer>
        <Flex mr='3' alignItems='center'>
            <Link to="/">
                <Button borderRadius='md' ml='1' mr='1' _hover={{bgColor:'blue.200', color:'white'}} bgColor={location.pathname=='/'?"blue.600":'blue.50'} color={location.pathname=='/'?"white":'gray.800'}>HOME</Button>
            </Link>
            <Link to="/profile">
                <Button borderRadius='md' ml='1' mr='1' _hover={{bgColor:'blue.200',color:'white'}} bgColor={location.pathname=='/profile'?"blue.600":'blue.50'} color={location.pathname=='/profile'?"white":'gray.800'}>PROFILE</Button>
            </Link>
            <Link to="/works">
                <Button borderRadius='md' ml='1' mr='1' _hover={{bgColor:'blue.200',color:'white'}} bgColor='blue.50'>WORKS</Button>
            </Link>
            <Link to="/blog">
                <Button borderRadius='md' ml='1' mr='1' _hover={{bgColor:'blue.200',color:'white'}} bgColor='blue.50'>BLOG</Button>
            </Link>
            <Link to="/contact">
                <Button borderRadius='md' ml='1' mr='1' _hover={{bgColor:'blue.200',color:'white'}} bgColor='blue.50'>CONTACT</Button>
            </Link>
            <Center height="30px" ml='1' mr='1'>
                <Divider orientation="vertical" />
            </Center>
            <Language />
        </Flex>
    </Flex>
    </>
  );
});