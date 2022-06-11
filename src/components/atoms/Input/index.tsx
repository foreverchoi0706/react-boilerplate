import styled, { css } from "styled-components";

const Input = styled.input(
  ({ type }) => css`
    ${(type === "text" || type === "password") &&
    css`
      border: 1px solid lightgray;
      border-radius: 5px;
      padding: 10px 5px;
      outline: none;
    `}

    ${type === "checkbox" && css``}

    ${type === "radio" && css``}
  `
);

export default Input;
