import styled, { css } from "styled-components";

const Styled = {
  FormLogin: styled.div(() => css`
      background-color: white;
      display: flex;
      justify-content: center;
      padding: 30px;
      border-radius: 5px;

      form {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 300px;
      }
    `),
  RadioContainer: styled.div(() => css`
      display: flex;
      gap: 20px;
    `)
};

export default Styled;