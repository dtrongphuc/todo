import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface SidebarProps {
  isOpen: boolean;
}

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const CustomNavLink = styled(NavLink)`
  width: 48px;
  display: flex;
  align-self: stretch;
  align-items: center;
  justify-content: center;
  background: transparent;
  cursor: pointer;

  &:hover {
    background-color: var(--gray-color);
    color: currentColor;
  }

  &.active {
    background: var(--gray-color);
  }
`;

export const Brand = styled.h3`
  margin-top: 8px;
  margin-bottom: 12px;
  color: rgb(99 99 99 / 87%);
  font-size: 0.95rem;
  font-weight: 400;
  padding-left: 14px;
`;

export const Overlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.5);
`;

export const Sidebar = styled.div<SidebarProps>`
  display: block;
  min-width: 0;
  width: 280px;
  height: 100%;
  background-color: #fff;
  flex-shrink: 1;
  z-index: 10;

  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    transform: ${(props) =>
      props.isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(-280px, 0, 0)'};
    transition: transform ease 0.2s;
  }

  & ~ ${Overlay} {
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
  }
`;
