import styled, { css } from "styled-components";

const Input = styled.input(({ type }) => css`
    ${(type === "text" || type === "password") && css`
        border: 1px solid lightgray;
        border-radius: 5px;
        padding: 10px 5px;
        outline: none;
    `}

    ${type === "checkbox" && css`
        opacity: 0;
        width: 0;
        height: 0;
    `}

    ${type === "radio" && css`
        opacity: 0;
        width: 0;
        height: 0;
    `}
`);

export default Input;