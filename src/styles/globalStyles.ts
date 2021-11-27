import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  body {
    background: #F2F2F2;
    font-family: sans-serif;
    font-size: 16px;
    margin: 0;
    @media (min-width: 768px) {
       padding: 24px 30px;
    }
  },
 
`;
