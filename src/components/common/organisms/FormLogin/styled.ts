import styled, {css} from "styled-components";

const Styled = {
    Wrapper: styled.div(() => css`
      form {
        display: flex;
        flex-direction: column;
      }
    `),
};

export default Styled;