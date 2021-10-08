import LeftPanel from 'app/components/LeftPanel/LeftPanel';
import React from 'react';
import { Switch, useLocation } from 'react-router';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  overflow: hidden;

  .fade-enter {
    opacity: 0;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 250ms;
  }
`;

const Main = styled(TransitionGroup)`
  flex-grow: 1;
  flex-shrink: 0;
  background-color: #fff;
`;

const MainLayout: React.FC = ({ children }) => {
  let location = useLocation();

  return (
    <Wrapper>
      <LeftPanel />
      <Main>
        <CSSTransition key={location.key} timeout={300} classNames='fade'>
          <Switch location={location}>{children}</Switch>
        </CSSTransition>
      </Main>
    </Wrapper>
  );
};

export default MainLayout;
