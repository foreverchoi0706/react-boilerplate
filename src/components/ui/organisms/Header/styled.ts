import styled, { css } from "styled-components";

const Styled = {
  Header: styled.header(
    () => css`
      background-color: lightgray;
      max-width: 1200px;
      margin: 0 auto;
      padding: 15px;
  `),
  Gnb: styled.ul(
    () => css`
    display: flex;
    justify-content: space-between;
  `),
  Filter: styled.div(() => css`
      background-color: white;
      border-radius: 5px;
    
      width: 768px;
      height : calc(100vh - 120px);
      max-height : calc(100vh - 120px);
  `),
  FilterHeader: styled.header(() => css`
    height: 73px;
    border-bottom: 1px solid red;
  `),
  Section: styled.section(() => css`
    overflow-y : auto;
    height :  calc(100vh - 120px - 146px);
    max-height: calc(100vh - 120px - 146px);
  `),
  BtnContainer: styled.div(() => css`
   border-top: 1px solid red;
    display: flex;
    height: 73px;
    gap: 8px;
     > button{
       flex-grow: 1;
     }
  `)

}

export default Styled;
