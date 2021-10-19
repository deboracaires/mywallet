import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    border: none;
    font-family: 'Raleway', sans-serif;
  }
  body {
    background-color: #8C11BE;
  }
`;
 
export default GlobalStyle;