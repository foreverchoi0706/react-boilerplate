import styled, {css} from "styled-components";

export const Wrapper = styled.main(
  () => css`
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
  `
);
