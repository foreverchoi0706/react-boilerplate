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
     position: relative;
      background-color: white;
      border-radius: 5px;
      width: 768px;
      height : calc(100% - 120px);
      max-height : calc(100% - 120px);
      @media (max-width : 768px) {
         width: 100%;
         height: 100%;
         max-height: 100%;
      }
  `),

  FilterHeader: styled.header(() => css`
    height: 73px;
    width: 100%;
    border-bottom: 1px solid red;
    @media (max-width : 768px) {
      position: fixed;
      top: 0;
    }
  `),

  Section: styled.section(() => css`
    overflow-y : auto;
     width: 100%;
    height :  calc(100%  - 146px);
    max-height: calc(100%  - 146px);
    @media (max-width : 768px) {
      position: fixed;
      top: 73px;
     
    }
  `),



  FilterFooter: styled.footer(() => css`
    border-top: 1px solid red;
    width: 100%;
  
    @media (max-width : 768px) {
      position: fixed;
      bottom: 0;
    }
  `),

  BtnContainer: styled.div(() => css`
    display: flex;
    height: 73px;
    gap: 8px;
     > button{
       flex-grow: 1;
     }
  `)

}

export default Styled;
