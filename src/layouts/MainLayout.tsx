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

const Main = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  background-color: #fff;
`;

const MainLayout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <LeftPanel />
      <Main>{children}</Main>
    </Wrapper>
  );
};

export default MainLayout;
