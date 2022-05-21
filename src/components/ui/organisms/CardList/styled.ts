import styled, { css } from "styled-components";

const Styled = {
    CardList: styled.div(({ theme }) => css`
        margin-top: 10px;
        display: grid;
        justify-content: space-between;
        grid-template-columns: repeat(auto-fill, calc(33% - 5px));
        ${theme.media.mobile}{
            grid-template-columns: repeat(auto-fill,calc(50% - 5px));
        }
    `),
    Card: styled.div(() => css`
        border: 1px solid lightgray;
        border-radius: 5px;
        cursor: pointer;
        padding: 20px;
        margin-bottom: 10px;
       
    `),
    ThumbnailImgWrap: styled.div(() => css`
        overflow: hidden;
    `),
    ThumbnailImg: styled.img(() => css`
        width: 100%;
        &:hover{
            transform: scale(1.8);
            filter: brightness(0.8);
            transition-duration: 0.2s;
        }
    `)
}

export default Styled;