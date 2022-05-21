import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    #root,#modal{
        * {
            box-sizing: border-box;
            letter-spacing: -0.5px;
        }
        a {
            text-decoration: none;
            color: black;
        }
    }
    #root{
        max-width: 1060px;
        padding: 0px 10px;
        margin: 0 auto;
    }
  
`
export default GlobalStyle;