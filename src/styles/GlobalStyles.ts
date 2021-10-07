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
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    overflow-x: hidden;
    font-family: 'Noto Sans Display', sans-serif;
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

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar {
    width: 8px;
    background-color: #F5F5F5;
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #555;
    border-radius: 4px;
    margin-right: 4px;
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
