import styled from 'styled-components';
import MainBackground from 'assets/images/main-background1.jpg';

interface SidebarWrapperProps {
  isOpen: boolean;
}

export const Wrapper = styled.section`
  position: relative;
  background-image: url(${MainBackground});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  overflow: hidden;
`;

export const Inner = styled.div`
  position: relative;
  padding: 54px 0 40px 32px;
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

export const ButtonNav = styled.div`
  position: absolute;
  top: 14px;
  left: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 0;
  z-index: 1;

  @media (min-width: 768px) {
    display: none;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.5);
`;

export const Sidebar = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 3;
`;

export const SidebarWrapper = styled.div<SidebarWrapperProps>`
  position: relative;
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};

  & > ${Overlay} {
    visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
    opacity: ${(props) => (props.isOpen ? 1 : 0)};
  }

  & > ${Sidebar} {
    & > * {
      display: block;
      position: fixed;
      left: ${(props) => (props.isOpen ? '0' : '-200%')};
      top: 0;
      bottom: 0;
      transition: all linear 0.25s;
    }
  }
`;
