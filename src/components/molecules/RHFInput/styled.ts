import { HTMLInputTypeAttribute } from "react";
import styled, { css } from "styled-components";

const Styled = {
  RHFInput: styled.div(
    () => css`
      position: relative;
      display: flex;
      flex-direction: column;
      margin-top: 8px;
    `
  ),
  Label: styled.label<{ type: HTMLInputTypeAttribute }>(({ type }) => {
    if (type === "checkbox" || type === "radio") {
      return css`
        font-size: 16px;
      `;
    }
    return css`
      color: gray;
      background-color: white;
      position: absolute;
      padding: 0 3px;
      left: 6px;
      top: -8px;
      font-size: 16px;
      > em {
        color: red;
      }
    `;
  }),
  ErrorMsg: styled.em(
    () => css`
      display: inline-block;
      padding: 2.5px 0;
      color: red;
      font-size: 14px;
    `
  ),
};

export default Styled;
