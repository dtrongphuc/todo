import LeftPanel from 'app/components/LeftPanel/LeftPanel';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  overflow: hidden;
`;

const Menu = styled.div`
  min-width: 0;
  max-width: 280px;
  width: 0;
  height: 100%;
  background-color: #fff;
  flex-shrink: 1;

  @media (min-width: 768px) {
    width: 280px;
  }
`;

const Main = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  background-color: #fff;
`;

const Brand = styled.h3`
  margin-top: 8px;
  margin-bottom: 12px;
  color: rgb(99 99 99 / 87%);
  font-size: 0.95rem;
  font-weight: 400;
  padding-left: 14px;
`;

const MainLayout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Menu>
        <Brand>Microsoft To Do</Brand>
        <LeftPanel />
      </Menu>
      <Main>{children}</Main>
    </Wrapper>
  );
};

export default MainLayout;
