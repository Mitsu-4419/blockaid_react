import React, { memo,useState,VFC} from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import {Link} from 'gatsby';

export const workComp: VFC = memo((props) => {
  const {url, al} = props
  return (
    <>
    <Box mr='auto' ml='auto' mt='40px' mb='40px' w='90%'>
        <Flex justify='start' w='50%'>
            <Heading>2019年4月</Heading>
        </Flex>
        <Flex w='100%' h='220px' mt='10'>
            <Flex w='50%' justify='center' alignItems='center'>
                <StaticImage
                    src="../images/jankenGame.png"
                    width={260}
                    quality={95}
                    alt="jankengame"
                />
            </Flex>
            <Box w='50%'  >
                hofhoisah
            </Box>
        </Flex>
    </Box>
    </>
  );
});