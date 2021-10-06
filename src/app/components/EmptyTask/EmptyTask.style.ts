import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  border-radius: 4%;
  min-width: 200px;
  min-height: 200px;
  max-width: 260px;
  max-height: 300px;
  padding: 1rem;
  overflow: hidden;
`;

export const Background = styled.div`
  background: rgba(0, 0, 0, 0.4);
  filter: drop-shadow(0 0 0.75rem rgba(255, 255, 255, 0.6));
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

export const Img = styled.img`
  max-width: 100px;
  margin-top: 16px;
`;

export const Title = styled.h4`
  color: #fff;
  font-size: 1.4rem;
  font-weight: 500;
  margin-top: 12px;
  margin-bottom: 4px;
`;

export const Text = styled.p`
  color: #fff;
  font-size: 0.9rem;
  font-weight: 400;
  margin-top: 12px;
  margin-bottom: 4px;
  text-align: center;
`;
