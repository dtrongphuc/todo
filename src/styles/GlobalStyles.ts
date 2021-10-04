import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --primary-color: rgb(0, 103, 184);
    --danger-color: rgb(232, 17, 35);
  }

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

  .text-center {
    text-align: center;
  }
`;
