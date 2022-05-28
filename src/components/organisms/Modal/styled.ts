import styled, { css } from "styled-components";


const Styled = {
    Modal: styled.div(({ theme }) => css`
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0,0,0,0.6);
        ${theme.media.mobile}{
            width: 100%;
            height: 100%;
            animation: none;
            border-radius : 0;
        }
    `),
    ModalContents: styled.div<{ heightFull: boolean }>(({ heightFull }) => css`
        background: #ffffff;
        padding: 20px;
        border-radius: 5px;
        ${heightFull && css`
            height : 100%;   
            border-radius: 0;
        `}
    `),
    ModalHeader: styled.header(() => css`
        position: relative;
        text-align: center;
        border-bottom: 1px solid lightgray;
        padding-bottom: 24px;
        margin-bottom: 24px;
    `),
    ModalCloseButton: styled.button(() => css`
        position: absolute;
        right: 0;
        font-weight: bold;
        background-color: transparent;
        border: none;
    `)
}

export default Styled;