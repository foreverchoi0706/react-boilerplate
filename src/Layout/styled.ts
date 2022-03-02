import styled, { css } from "styled-components";

export const Wrapper = styled.div<{ fill: boolean }>(
  ({ fill }) =>
    css`
      background-color: red;
      max-width: ${fill ? "auto" : "1200px"};
      margin: 0 auto;
    `
);
