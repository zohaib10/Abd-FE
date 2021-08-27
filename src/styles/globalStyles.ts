import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    font-size: 16px;
    margin: 0;
    @media (min-width: 768px) {
       padding: 24px 30px;
    }
  }
`;
