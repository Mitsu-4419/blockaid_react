/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo,useState,VFC, useEffect} from "react";
import {Flex, Heading,Spacer, Button, Divider, Center } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import {Link} from 'gatsby';
import Language from "../../Language";
import { changeLocale } from "gatsby-plugin-intl"

export const Header: VFC = memo(() => {
    const [loc, setLocationName] = useState('')
    useEffect(() => {
        const pre = window.location.pathname.split('/')[2]
        const path = "/" + pre
        setLocationName(path)
    }, [])
    useEffect(()=>{
        let currentLang= localStorage.getItem('gatsby-intl-language')
        if (currentLang==null) currentLang = "ja"
        changeLocale(currentLang)
    },[])

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
                <Button borderRadius='md' ml='1' mr='1' _hover={{bgColor:'blue.200', color:'white'}} bgColor={loc=='/'?"blue.500":'blue.50'} color={loc=='/'?"white":'gray.800'}>HOME</Button>
            </Link>
            <Link to="/profile">
                <Button borderRadius='md' ml='1' mr='1' _hover={{bgColor:'blue.200',color:'white'}} bgColor={loc=='/profile'?"blue.500":'blue.50'} color={loc=='/profile'?"white":'gray.800'}>PROFILE</Button>
            </Link>
            <Link to="/works">
                <Button borderRadius='md' ml='1' mr='1' _hover={{bgColor:'blue.200',color:'white'}} bgColor={loc=='/works'?"blue.500":'blue.50'} color={loc=='/works'?"white":'gray.800'}>WORKS</Button>
            </Link>
            <Link to="/blog">
                <Button borderRadius='md' ml='1' mr='1' _hover={{bgColor:'blue.200',color:'white'}} bgColor={loc=='/blog'?"blue.500":'blue.50'} color={loc=='/blog'?"white":'gray.800'}>BLOG</Button>
            </Link>
            <Link to="/contact">
                <Button borderRadius='md' ml='1' mr='1' _hover={{bgColor:'blue.200',color:'white'}} bgColor={loc=='/contact'?"blue.500":'blue.50'} color={loc=='/contact'?"white":'gray.800'}>CONTACT</Button>
            </Link>
            <Center height="30px" ml='1' mr='1'>
                <Divider orientation="vertical"/>
            </Center>
            <Language/>
        </Flex>
    </Flex>
    </>
  );
});