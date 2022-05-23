import styled, { css, keyframes } from "styled-components";

const appear = keyframes`
    from {
        transform: translateY(10px);
        opacity: 0;
    }
    to{
        transform: translateY(0);
        opacity: 1;
    }
`

const Styled = {
    FormLogin: styled.div(({ theme }) => css`
        position: relative;
        width: 320px;
        padding: 20px;
        border: 1px solid lightgray;
        border-radius: 5px;
        background: white;
        animation: ${appear} 0.5s linear;
        ${theme.media.tablet}{
            width: 100%;
            height: 100%;
            animation: none;
            border-radius : 0;
        }
    `),
    Header: styled.header(() => css`
      text-align: center;
    `),
    ButtonWrap: styled.div(() => css`
        position: absolute;
        right: 0;
        top: 0;
    `),
    FormInputWrap: styled.div(() => css`
        margin-bottom: 20px;
    `),
}

export default Styled;