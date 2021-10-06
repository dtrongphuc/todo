import styled from 'styled-components';

export const Wrapper = styled.div`
  background: transparent;
  display: flex;
  align-items: center;
  height: 48px;
  padding-left: 16px;
  padding-right: 16px;
  flex: 1;
  cursor: pointer;

  &:hover {
    background-color: var(--gray-color);
  }
`;

export const Avatar = styled.div`
  overflow: hidden;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 8px;
`;

export const NormalText = styled.p`
  margin-bottom: 2px;
  font-size: 0.87rem;
  color: #545454;
  font-weight: 400;
  line-height: 1.5;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  user-select: none;
`;

export const SmallText = styled.p`
  font-size: 0.75rem;
  color: #7b7b7b;
  font-weight: 400;
  text-overflow: ellipsis;
  margin-bottom: 0;
  line-height: 1.2;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  user-select: none;
`;
