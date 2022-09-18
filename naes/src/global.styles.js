import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    margin: 0;
    padding: 1.25em 2.5em;
    font-family: 'Montserrat',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    @media screen and (max-width:50em) {
        padding: 1em;
    } 
}
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  a {
    text-decoration: none;
    color: black;
  }
  
`;