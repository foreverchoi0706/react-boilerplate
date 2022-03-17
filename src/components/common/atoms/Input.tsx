import styled, {css} from "styled-components";

const Input = {
    Text: styled.input(() => css`
      width: 100%;
      border: none;
      border-bottom: 1px solid lightgray;
      outline: none;
    `),
    Checkbox: styled.input(() => css`
      opacity: 0;
      width: 0;
      height: 0;
    `),
    Radio: styled.input(() => css`
      opacity: 0;
      width: 0;
      height: 0;
    `)
};

export default Input;
