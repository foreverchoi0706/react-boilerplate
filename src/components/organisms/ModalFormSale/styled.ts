import styled, { css } from "styled-components";

const Styled = {
  FormLogin: styled.div(
    ({ theme }) => css`
      width: 600px;
      ${theme.media.mobile} {
        width: 100%;
      }
    `
  ),
  RHFInputWrap: styled.div(
    () => css`
      margin-bottom: 20px;
    `
  ),
};

export default Styled;
