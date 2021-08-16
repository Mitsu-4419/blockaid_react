import * as React from "react"
import { memo, VFC } from "react";
import { Box, Stack, Image,Text,} from "@chakra-ui/react";
import {Link} from 'gatsby';

type Props = {
  id: string;
  title:string,
  imageUrl: string;
  tag:string;
};

export const BlogCard: VFC<Props> = memo(props => {
  const { id, title,imageUrl,tag} = props;

  return (
    <>
    <Link to={`/blog/${id}`}>
      <Box
          w="260px"
          h="260px"
          bg="white"
          borderRadius="10px"
          shadow="md"
          _hover={{ cursor: "pointer", opacity: 0.8 }}
      >
          <Stack textAlign="center">
          <Image
              w='full'
              h='160px'
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
    </>
  );
});