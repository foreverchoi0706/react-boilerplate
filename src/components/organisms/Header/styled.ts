import styled, { css } from "styled-components";

const Styled = {
    Header: styled.header(() => css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;
    `),
    LogoWrap: styled.div(() => css`
        font-weight: bold;
        font-size: 24px;
    `),
}

export default Styled;