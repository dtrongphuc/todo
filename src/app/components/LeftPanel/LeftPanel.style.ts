import styled from 'styled-components';

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const SearchIcon = styled.div`
  width: 48px;
  display: flex;
  align-self: stretch;
  align-items: center;
  justify-content: center;
  background: transparent;
  cursor: pointer;

  &:hover {
    background-color: var(--gray-color);
  }
`;
