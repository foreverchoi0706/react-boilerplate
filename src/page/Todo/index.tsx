import { Box } from "@chakra-ui/react";
import React, { FC } from "react";
import { useLocation } from "react-router-dom";

const Todo: FC = () => {
  const { pathname } = useLocation();
  return <Box>{JSON.stringify(pathname)}</Box>;
};

export default Todo;
