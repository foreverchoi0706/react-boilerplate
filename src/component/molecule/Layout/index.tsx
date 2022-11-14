import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { FC, PropsWithChildren } from "react";
import { Link, useLocation } from "react-router-dom";
import shallow from "zustand/shallow";

import ROUTES from "@/constant/route";
import useGlobalState from "@/hook/useGlobalState";
import useSign from "@/hook/useSign";

const SignIn: FC<PropsWithChildren> = ({ children }) => {
  const { signOut } = useSign();
  const { pathname } = useLocation();
  const name = useGlobalState((state) => state.accountInfo.name, shallow);

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
        <Flex flexDirection="column" gap="30px">
          <Flex alignItems="center" justifyContent="space-between">
            <Text as="h1" fontWeight="bold">
              {name}님 환영합니다.
            </Text>
            <Button onClick={signOut}>로그아웃</Button>
          </Flex>
          {ROUTES.filter(({ path }) => path.split("/").length === 2).map(
            ({ name, path }) => (
              <Link key={path} to={path}>
                <Text
                  borderBottom="1px solid #e4e4e4"
                  fontWeight={pathname.includes(path) ? "bold" : "normal"}
                >
                  {name}
                </Text>
              </Link>
            )
          )}
        </Flex>
      </Box>
      <Box flexGrow="1" height="100vh" padding="20px">
        {children}
      </Box>
    </Flex>
  );
};

const SignOut: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Flex height="100vh" justifyContent="center" paddingTop="30vh">
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

export default Object.assign(
  {},
  {
    SignIn,
    SignOut,
  }
);
