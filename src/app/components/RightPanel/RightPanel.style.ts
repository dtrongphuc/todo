import styled from 'styled-components';
import MainBackground from 'assets/images/main-background1.jpg';

export const Wrapper = styled.section`
  overflow: hidden;
  background-image: url(${MainBackground});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
`;

export const Inner = styled.div`
  position: relative;
  padding: 48px 32px;
  width: 100%;
  height: 100%;
`;

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const BottomRow = styled.div`
  position: absolute;
  bottom: 32px;
  left: 0;
  right: 0;
`;
