import {
  Box,
  BoxProps,
  Img,
  ImgProps,
  Text,
  TextProps,
} from "@chakra-ui/react";
import React, { createContext, FC, PropsWithChildren } from "react";

interface IContext {
  id?: number;
}

const Context = createContext<IContext>({
  id: undefined,
});

const Card: FC<PropsWithChildren<IContext>> = ({ children, id }) => {
  const value = { id };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const Container: FC<PropsWithChildren<BoxProps>> = ({ children, ...rest }) => {
  return <Box {...rest}>{children}</Box>;
};

const Image: FC<ImgProps> = (props) => {
  return <Img {...props} />;
};

interface IViewCount extends TextProps {
  value: number;
}

const ViewCount: FC<IViewCount> = ({ value, ...rest }) => {
  return <Text {...rest}>👀{value}</Text>;
};

export default Object.assign(Card, { Container, Image, ViewCount });
