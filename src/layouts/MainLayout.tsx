import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #fff;
  display: flex;
`;

const Menu = styled.div`
  min-width: 0;
  max-width: 280px;
  width: 0;
  height: 100%;
  background-color: #fff;
  flex-shrink: 1;
  border-right: 1px solid #000;

  @media (min-width: 768px) {
    width: 280px;
  }
`;

const Main = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  background-color: #000;
`;

function MainLayout() {
  return (
    <Wrapper>
      <Menu />
      <Main />
    </Wrapper>
  );
}

export default MainLayout;
