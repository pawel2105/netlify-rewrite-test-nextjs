import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body,
  html {
    padding: 0;
    margin: 0;
    background: pink;
    font-size: 15px;
    line-height: 1.5em;
  }
`;

export default GlobalStyles;
