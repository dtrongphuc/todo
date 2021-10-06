import React from 'react';
import styled from 'styled-components';
import Loupe from 'assets/images/loupe.png';

const Relative = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  text-align: center;
`;

const Img = styled.img`
  width: 130px;
  margin-bottom: 2rem;
`;

const Text = styled.p`
  color: #828080;
  font-size: 0.9rem;
  font-weight: 400;
  margin-bottom: 0;
`;

const FindBackground: React.FC = () => {
  return (
    <Relative>
      <Wrapper>
        <Img src={Loupe} alt='Search' />
        <Text>
          What would you like to find? You can search within tasks, steps, and
          notes
        </Text>
      </Wrapper>
    </Relative>
  );
};

export default FindBackground;
