import styled, { css } from "styled-components";

export const Wrapper = styled.div<{ isFilled: boolean }>(
  ({ isFilled }) =>
    css`
      max-width: ${isFilled ? "auto" : "1200px"};
      margin: 0 auto;
    `
);
