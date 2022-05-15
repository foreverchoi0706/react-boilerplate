import styled, { css } from "styled-components";

const Styled = {
  Label: styled.label(() => css`
      cursor: pointer;
    `),
  Em: styled.em(() => css`
      display: inline-block;
      padding: 10px 0;
      color: red;
    `)
};

export default Styled;