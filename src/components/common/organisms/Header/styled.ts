import styled, { css } from "styled-components";

export const Header = styled.header(
  () => css`
    background-color: lightgray;
    max-width: 1200px;
    margin: 0 auto;
  `
);

export const Gnb = styled.ul(
  () => css`
    display: flex;
    justify-content: space-between;
  `
);
