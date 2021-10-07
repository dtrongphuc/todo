import styled from 'styled-components';
import MainBackground from 'assets/images/main-background1.jpg';

export const Wrapper = styled.section`
  overflow: hidden;
  background-image: url(${MainBackground});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  overflow: hidden;
`;

export const Inner = styled.div`
  position: relative;
  padding: 48px 0 40px 32px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const TopRow = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  padding-right: 32px;
`;

export const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const BottomRow = styled.div`
  position: sticky;
  top: 100%;
  left: 0;
  margin-right: 32px;
`;
