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
    Gnb: styled.nav(({ theme }) => css`
       & > a:not(:first-child):not(:last-child){
            margin: 0 12px;
        }
        ${theme.media.mobile}{
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: 999;
        }
    `)
}

export default Styled;