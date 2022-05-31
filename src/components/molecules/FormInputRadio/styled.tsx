import styled, { css } from "styled-components";

const Styled = {
  FormInputRadio: styled.div(() => css`
    display: flex;
  `),
  Label: styled.label(() => css`
    flex-grow: 1;
    margin-bottom: 2px;
  `),
};

export default Styled;