import styled from 'styled-components';

interface ContentProps {
  isCompleted: boolean;
}

export const Wrapper = styled.div`
  background: #fff;
  border-radius: 4px;
  min-height: 54px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background: #f1f1f1;
  }
`;

export const Content = styled.p<ContentProps>`
  position: relative;
  margin-bottom: 0;
  padding: 6px 12px;
  font-size: 0.9rem;
  color: ${(props) => (props.isCompleted ? '#9a9a9a' : '#000')};
  text-align: left;
  flex: 1;
  width: min-content;
  word-break: break-all;
  white-space: normal;
  overflow-wrap: break-word;
  cursor: default;

  text-decoration: ${(props) =>
    props.isCompleted ? 'line-through' : 'initial'};
`;

export const AnimateButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transition: all ease-in-out 0.15s;
  opacity: 0;
  visibility: hidden;
  transform: translateY(100%);

  ${Wrapper}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;
