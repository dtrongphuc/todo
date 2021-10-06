import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --primary-color: rgb(0, 103, 184);
    --danger-color: rgb(232, 17, 35);
    --gray-color: rgb(130 130 130 / 5%);
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

export const LargeText = styled.h2`
  color: #fff;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.2;
  text-transform: capitalize;
  margin-bottom: 4px;
`;

export const NormalText = styled.p`
  margin-bottom: 0;
  line-height: 1.2;
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
`;
