import styled, {css} from "styled-components";

const Styled = {
    Wrapper: styled.div(() => css`
      display: flex;
      justify-content: center;
      padding: 20px 0;

      form {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 300px;
      }
    `),
    RadioWrapper: styled.div(() => css`
      display: flex;
      gap: 20px;
    `)
};

export default Styled;