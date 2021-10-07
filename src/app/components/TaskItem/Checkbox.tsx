import React from 'react';
import {
  IoCheckmarkCircleOutline,
  IoCheckmarkCircleSharp,
  IoEllipseOutline,
} from 'react-icons/io5';
import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & .hover {
    display: none;
  }

  &:hover .normal {
    display: none;
  }

  &:hover .hover {
    display: block;
  }
`;

interface Props {
  checked: boolean;
  onClick: (e: React.MouseEvent) => void;
}

const Checkbox: React.FC<Props> = ({ checked, onClick }) => {
  return (
    <ButtonWrapper onClick={onClick}>
      {checked ? (
        <IoCheckmarkCircleSharp
          size='1.8rem'
          color='#677492'
          className='checked'
        />
      ) : (
        <>
          <IoEllipseOutline
            size='1.8rem'
            color='#717171'
            className='normal checkbox'
          />
          <IoCheckmarkCircleOutline
            size='1.8rem'
            color='#717171'
            className='hover checkbox'
          />
        </>
      )}
    </ButtonWrapper>
  );
};

export default Checkbox;
