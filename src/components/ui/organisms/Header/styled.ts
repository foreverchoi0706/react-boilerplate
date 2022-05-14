import styled, { css } from "styled-components";

const Styled = {
  Header: styled.header(
    () => css`
      background-color: lightgray;
      max-width: 1200px;
      margin: 0 auto;
      padding: 15px;
  `),
  Gnb: styled.ul(
    () => css`
    display: flex;
    justify-content: space-between;
  `)
}

export default Styled;
