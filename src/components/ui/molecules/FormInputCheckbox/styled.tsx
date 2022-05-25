import styled, { css } from "styled-components";

const Styled = {
  FormInputCheckBox: styled.div(() => css`
    display: flex;
  `),
  Label: styled.label(() => css`
    flex-grow: 1;
    margin-bottom: 2px;
    > em{
      color : red 
    }
  `),
};

export default Styled;