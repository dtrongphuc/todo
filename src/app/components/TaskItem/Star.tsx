import React from 'react';
import { IoStarOutline, IoStarSharp } from 'react-icons/io5';
import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

interface Props {
  checked: boolean;
  onClick: (e: React.MouseEvent) => void;
}

const Star: React.FC<Props> = ({ checked, onClick }) => {
  return (
    <ButtonWrapper onClick={onClick}>
      {checked ? (
        <IoStarSharp size='1.1rem' color='#677492' />
      ) : (
        <IoStarOutline size='1.1rem' color='#717171' />
      )}
    </ButtonWrapper>
  );
};

export default Star;
