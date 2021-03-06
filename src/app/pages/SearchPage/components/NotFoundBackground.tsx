import React from 'react';
import styled from 'styled-components';
import NotFound from 'assets/images/not-found.png';
import { useTranslation } from 'react-i18next';

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

const NotFoundBackground: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Relative>
      <Wrapper>
        <Img src={NotFound} alt='Search' />
        <Text>{t('search.notFound')}</Text>
      </Wrapper>
    </Relative>
  );
};

export default NotFoundBackground;
