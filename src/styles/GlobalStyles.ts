import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
  }

  img {
    width: 100%;
    height: auto;
  }
`;
