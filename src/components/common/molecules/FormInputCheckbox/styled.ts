import styled, {css} from "styled-components";

const Styled = {
    Label: styled.label<{ checked: boolean }>(({checked}) => css`
      position: relative;
      vertical-align: center;
      cursor: pointer;

      &:before {
        display: inline-block;
        content: '';
        width: 20px;
        height: 20px;
        border: 1px solid ${checked ? "skyblue" : "lightgray"};
      }

      &:after {
        position: absolute;
        left: 5px;
        bottom: 8px;
        display: inline-block;
        content: '';
        width: 12px;
        height: 12px;
        background-color: ${checked ? "skyblue" : "lightgray"};
      }
    `),
};

export default Styled;