/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo,useState,VFC, useEffect} from "react";
import {Flex, Heading,Spacer, Button, Divider, Center, Menu,MenuButton,MenuList,MenuItem, IconButton,Box, MenuDivider } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import {Link} from 'gatsby';
import Language from "../../Language";
import { HamburgerIcon } from '@chakra-ui/icons'
export const Header: VFC = memo(() => {
    const [loc, setLocationName] = useState('')
    useEffect(()=>{
        console.log("2222222222")
        let currentLang= localStorage.getItem('gatsby-intl-language')
        if (currentLang==null) currentLang = "ja"
        // changeLocale(currentLang)
        const pre = window.location.pathname.split('/')[2]
        const path = "/" + pre
        setLocationName(path)
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
            <Heading as="h1" fontSize={{ base: "md", md: "xl" }} ml='5'>
                Ko-rin Yamada
            </Heading>
        </Flex>
        <Spacer></Spacer>
        <Box display={{xl:"block",lg:"block",md:"none", sm:"none", base:"none"}}>
            <Flex mr='3' alignItems='center' >
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
        </Box>
        <Box display={{xl:"none", lg:"none"}}>
            <Flex alignItems='center'>
            <Box  mr='5'>
            <Language />
            </Box>
            <Menu >
                <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<HamburgerIcon />}
                    variant="outline"
                />
                <MenuList>
                <Link to="/">
                    <MenuItem >
                    HOME
                    </MenuItem>
                </Link>
                <Link to="/profile">
                    <MenuItem >
                    PROFILE
                    </MenuItem>
                </Link>
                <Link to="/works">
                    <MenuItem>
                    WORKS
                    </MenuItem>
                </Link>
                <Link to="/blog">
                    <MenuItem>
                    BLOG
                    </MenuItem>
                </Link>
                <Link to="/contact">
                    <MenuItem>
                    CONTACT
                    </MenuItem>
                </Link>
                </MenuList>
                <MenuDivider></MenuDivider>
            </Menu>
            </Flex>
        </Box>
    </Flex>
    </>
  );
});