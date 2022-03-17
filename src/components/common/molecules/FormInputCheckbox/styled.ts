import styled, {css} from "styled-components";

const Styled = {
    Label: styled.label<{ checked: boolean }>(({checked}) => css`
      position: relative;
      cursor: pointer;

      &:before {
        position: absolute;
        left: 0;
        bottom: -3px;
        content: '';
        width: 20px;
        height: 20px;
        border: 1px solid ${checked ? "skyblue" : "lightgray"};
      }

      &:after {
        position: absolute;
        left: 5px;
        bottom: 2px;
        content: '';
        width: 12px;
        height: 12px;
        background-color: ${checked ? "skyblue" : "lightgray"};
      }
    `),

    Span: styled.span(() => css`
      margin-left: 20px;
    `)
};

export default Styled;