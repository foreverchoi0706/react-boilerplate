import styled, { css } from "styled-components";

type TSize = "large" | "medium" | "small";

export interface IProps {
    full?: boolean;
    primary?: boolean;
    size?: TSize,
    children?: string
}

const Button = styled.button<IProps>(({
    full = false,
    primary = false,
    size = "medium",
    disabled,
}) => css`
    border: 1px solid black;
    background-color: black;
    border-radius: 10px;
    padding: 5px 10px;
    color: white;
    cursor: pointer;


    ${full && css`
        width: 100%;
    `}
    ${disabled && css`
        border: 1px solid lightgray;
        background-color: lightgray;
        cursor: default;
    `}
    //mode
    ${primary && css`
        border: 1px solid lightcoral;
        background-color: lightcoral;
    `}
    //size
    ${size === "large" && css`
        font-size: 20px;
    `}
    ${size === "medium" && css`
        font-size: 16px;
    `}
    ${size === "small" && css`
        font-size: 12px;
    `}
`)

export default Button;