import { Flex, Img } from "@chakra-ui/react";
import React, { FC, useEffect, useRef } from "react";

import test from "@/asset/test.png";
import Layout from "@/component/Layout";

const Temp: FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.childNodes.forEach((childNode, index) => {
      const img = childNode as HTMLImageElement;
      img.style.left = `${img.clientWidth * index}px`;

      const interval = setInterval(() => {
        img.style.left = `${img.offsetLeft - img.clientWidth}px`;
        img.style.transitionProperty = "left";
        img.style.transitionDuration = "1s";

        if (img.x <= -189) {
          img.style.left = `${img.clientWidth * 5}px`;
          img.style.transitionProperty = "none";
        }
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    });
  }, []);
  return (
    <Flex ref={ref} height="72px" overflow="hidden" position="relative">
      {new Array(7).fill("").map((item, index) => (
        <Img
          key={index}
          alt={item}
          backgroundColor="lightblue"
          flexShrink="0"
          height="72px"
          position="absolute"
          src={test}
          width={228}
        />
      ))}
    </Flex>
  );
};

const About = () => {
  return (
    <Layout.Main>
      <Temp />
      <Temp />
      <Temp />
    </Layout.Main>
  );
};

export default About;
