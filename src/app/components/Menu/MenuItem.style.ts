import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const scale = keyframes`
  from {
    transform: scaleY(0);
  }

  to {
    transform: scaleY(1);
  }
`;

export const CustomNavLink = styled(NavLink)`
  background: transparent;
  display: flex;
  align-items: center;
  height: 48px;
  padding-left: 16px;
  padding-right: 16px;
  flex: 1;
  width: 100%;
  color: #2b2b2b;
  cursor: pointer;

  &:hover {
    background-color: var(--gray-color);
    color: currentColor;
  }

  &.menu-active {
    position: relative;
    background: var(--gray-color);
    color: #125261;

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 20%;
      left: 6px;
      bottom: 20%;
      width: 2px;
      background: #125261;
      animation: ${scale} 0.3s forwards ease;
    }

    & > p {
      color: #125261;
      font-weight: 500;
    }
  }
`;

export const Icon = styled.div`
  font-size: 1.1rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0;
`;
