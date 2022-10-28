import { Box, Button, Flex, Stack, StackItem, Text } from "@chakra-ui/react";
import React, { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import shallow from "zustand/shallow";

import useUserState from "@/hook/states/useUserState";

const Main: FC<PropsWithChildren> = ({ children }) => {
  const { setIsSignIn } = useUserState((state) => state, shallow);

  return (
    <Flex minWidth="1200px">
      <Box
        backgroundColor="#ffffff"
        boxShadow="2xl"
        flexDirection="column"
        height="100vh"
        justifyContent="space-between"
        left="0"
        minWidth="300px"
        padding="20px"
        position="sticky"
        top="0"
        zIndex="999"
      >
        <Stack>
          <StackItem>
            <Flex alignItems="center" justifyContent="space-between">
              <Text as="h1" fontWeight="bold">
                테스트님 환영합니다.
              </Text>
              <Button onClick={() => setIsSignIn(false)}>로그아웃</Button>
            </Flex>
          </StackItem>
          <StackItem>
            <Link to="/">HOME</Link>
          </StackItem>
          <StackItem>
            <Link to="/about">ABOUT</Link>
          </StackItem>
          <StackItem>
            <Link to="">AAAAA</Link>
          </StackItem>
          <StackItem>
            <Link to="">AAAAA</Link>
          </StackItem>
          <StackItem>
            <Link to="">AAAAA</Link>
          </StackItem>
        </Stack>
      </Box>
      <Box flexGrow="1" padding="20px">
        {children}
      </Box>
    </Flex>
  );
};

const Sub: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Flex height="100vh" justifyContent="center" paddingTop="300px">
      <Box
        borderRadius="5%"
        boxShadow="lg"
        height="fit-content"
        padding="20px"
        width="300px"
      >
        {children}
      </Box>
    </Flex>
  );
};

export default Object.assign({
  Main,
  Sub,
});
