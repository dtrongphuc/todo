import styled from 'styled-components';

export const Wrapper = styled.div`
  background: transparent;
  display: flex;
  align-items: center;
  height: 48px;
  padding-left: 16px;
  padding-right: 16px;
  flex: 1;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: var(--gray-color);
  }
`;

export const Icon = styled.div`
  color: #2b2b2b;
  font-size: 1.1rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
`;

export const Text = styled.h4`
  color: #2b2b2b;
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 0;
`;
