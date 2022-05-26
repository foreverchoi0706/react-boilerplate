import styled, { css } from "styled-components";

const Styled = {
  FormInput: styled.div(() => css`
    display: flex;
    flex-direction: column;
  `),
  Label: styled.label(() => css`
    margin-bottom: 2px;
    > em{
      color : red 
    }
  `),
  ErrorMsg: styled.em(() => css`
      display: inline-block;
      padding : 2.5px 0;
      color: red;
    `)
};

export default Styled;