import * as React from "react"
import { memo, VFC } from "react";
import { Box, Stack, Image,Text,} from "@chakra-ui/react";
import {Link} from 'gatsby';
import { createBreakpoints } from "@chakra-ui/theme-tools"

type Props = {
  id: string;
  title:string,
  imageUrl: string;
  tag:string;
};

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "600px",
  lg: "960px",
  xl: "1280px",
})

export const BlogCard: VFC<Props> = memo(props => {
  const { id, title,imageUrl,tag} = props;

  return (
    <>
    <Box w='100%'>
      <Link to={`/blog/${id}`} >
        <Box
            w="100%"
            h="260px"
            bg="white"
            borderRadius="10px"
            shadow="xl"
            _hover={{ cursor: "pointer", opacity: 0.8 }}
        >
            <Stack textAlign="center">
            <Image
                w='full'
                h='180px'
                objectFit="cover"
                src={imageUrl}
                alt={tag}
                m="auto"
            />
            <Text fontSize="lg" fontWeight="bold">
                {title}
            </Text>
            </Stack>
        </Box>
      </Link>
    </Box>
    </>
  );
});