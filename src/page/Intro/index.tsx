import { Box, Text } from "@chakra-ui/react";
import React, { FC } from "react";

import Layout from "@/component/Layout";

const Intro: FC = () => {
  return (
    <Layout.Logo>
      <Box backgroundColor="red" height="2000px" />
      <Box
        backgroundColor="green"
        height="500px"
        overflow="hidden"
        position="relative"
      >
        <Box
          backgroundColor="black"
          boxSizing="border-box"
          height="100vw"
          left="0"
          overflowX="hidden"
          overflowY="scroll"
          position="absolute"
          transform="rotate(-90deg) translateY(-500px)"
          transformOrigin="right top"
          width="500px"
        >
          {new Array(10).fill("").map((_, index) => (
            <Box
              key={index}
              border="1px solid blue"
              boxSizing="border-box"
              color="white"
              height="500px"
              transform="rotate(90deg) translateX(500px)"
              transformOrigin="right top"
              width="500px"
            >
              <Text color="white">콘텐스{index + 1}</Text>
            </Box>
          ))}
        </Box>
      </Box>

      <Box backgroundColor="blue" height="2000px" />
    </Layout.Logo>
  );
};

export default Intro;
