import styled, { css } from "styled-components";

const Button = {
  Primary: styled.button<{ disabled?: boolean }>(
    ({ disabled }) => css`
          color: skyblue;
          background-color: ${disabled ? "lightgray" : "white"};
          border: 1px solid lightgray;
          border-radius: 5px;
          cursor: pointer;
          padding: 5px 10px;

          &:hover {
            background-color: lightgray;
          }
        `
  ),
};

export default Button;
