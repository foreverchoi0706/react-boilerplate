import styled, { css } from "styled-components";

export const Wrapper = styled.div<{ isFilled: boolean }>(
  ({ isFilled }) =>
    css`
      background-color: red;
      max-width: ${isFilled ? "auto" : "1200px"};
      margin: 0 auto;
    `
);
