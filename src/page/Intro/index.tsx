import { Box, Text } from "@chakra-ui/react";
import React, { FC, useEffect, useRef, useState } from "react";
import "src/page/Intro/index.css";

import Layout from "@/component/Layout";

const TITLE = "ReferenceError\n: Can't find variable\n: index.";

const Intro: FC = () => {
  const refTitle = useRef<string>("");
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      if (!TITLE[index]) {
        clearInterval(interval);
        return;
      }
      setIndex((prevState) => prevState + 1);
      refTitle.current = refTitle.current += TITLE[index];
    }, 200);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <Layout.Logo>
      <Box backgroundColor="white" height="1080px">
        <Text
          as="span"
          dangerouslySetInnerHTML={{ __html: refTitle.current }}
          fontSize="64px"
          fontWeight="900"
          padding="20px"
        />
        <Box className="typing" />
      </Box>
      <Box
        backgroundColor="green"
        height="1080px"
        overflow="hidden"
        position="relative"
      >
        <Box
          backgroundColor="black"
          boxSizing="border-box"
          className="wrap"
          height="100vw"
          left="0"
          overflowX="hidden"
          overflowY="scroll"
          position="absolute"
          transform="rotate(-90deg) translateY(-1080px)"
          transformOrigin="right top"
          width="1080px"
        >
          {new Array(10).fill("").map((_, index) => (
            <Box
              key={index}
              border="1px solid blue"
              boxSizing="border-box"
              color="white"
              height="600px"
              transform="rotate(90deg) translateX(1200px)"
              transformOrigin="right top"
              width="600px"
            >
              <Text
                as="h1"
                color="#00dd6d"
                fontSize="32px"
                fontWeight="900"
                padding="20px"
              >
                콘텐츠{index + 1}
              </Text>
              <Box marginY="40px">dasd</Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Box backgroundColor="blue" height="1080px" />
    </Layout.Logo>
  );
};

export default Intro;
