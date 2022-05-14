import styled, { css } from "styled-components";

const Styled = {
  Footer: styled.footer(
    () => css`
    background-color: lightgray;
    max-width: 1200px;
    margin: 0 auto;
    padding: 15px;
  `)
}

export default Styled;
