import styled, { css } from "styled-components";

export const Primary = styled.button<{ disabled: boolean }>(
  () => css`
    color: green;
    background-color: white;
    border: 1px solid white;
    border-radius: 5px;
    cursor: pointer;
    padding: 5px 10px;
    &:hover {
      background-color: lightgray;
      border: 1px solid lightgray;
    }
  `
);
