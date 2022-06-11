import { DefaultTheme } from "styled-components";

const getMediaQuery = (maxWidth: number): string => `
    @media (max-width: ${maxWidth}px)
`;

const theme: DefaultTheme = {
  media: {
    desktop: "",
    tablet: getMediaQuery(1080),
    mobile: getMediaQuery(680),
    custom: getMediaQuery,
  },
  color: {
    black: "black",
    primary: "green",
  },
};

export default theme;
