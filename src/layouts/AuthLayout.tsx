import React from 'react';
import styled from 'styled-components';
import background from 'assets/images/transparent-bg.svg';

const fixedLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled(fixedLayout)`
  background-color: #f2f2f2;
`;

const Background = styled(fixedLayout)`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  z-index: -1;
`;

function AuthLayout({ children }: { children?: React.ReactNode }) {
  return (
    <Wrapper>
      <Background />
      {children}
    </Wrapper>
  );
}

export default AuthLayout;
