import * as React from "react"
import { memo, VFC } from "react";
import { Box, Stack, Image,Text,} from "@chakra-ui/react";
import {Link} from 'gatsby';
import {changeDateFormat} from '../../js/changeDateFormat.js'

type Props = {
  id: string;
  title:string,
  imageUrl: string;
  tag:string;
  postDate:string;
};

export const BlogCard: VFC<Props> = memo(props => {
  const { id, title,imageUrl,tag, postDate} = props;
  const date= changeDateFormat(postDate)
  return (
    <>
    <Box w='100%'>
      <Link to={`/blog/${id}`} >
        <Box
            w="100%"
            minH="260px"
            bg="white"
            borderRadius="10px"
            shadow="xl"
            _hover={{ cursor: "pointer", opacity: 0.8 }}
        >
            <Stack textAlign="start">
              <Image
                  w='full'
                  h='180px'
                  objectFit="cover"
                  src={imageUrl}
                  alt={tag}
                  m="auto"
                  borderTopLeftRadius='10px'
                  borderTopRightRadius='10px'
              />
              <Box minH='80px' pt='2' pb='2'pl='15' pr='15'>
                <Text fontSize="lg" fontWeight="bold">
                    {title}
                </Text>
                <Text fontSize="md" color='gray.500'>
                    {date}
                </Text>
              </Box>
            </Stack>
        </Box>
      </Link>
    </Box>
    </>
  );
});