import { Space } from 'antd';
import React, { ReactNode } from 'react';
import { IoChevronBackSharp, IoChevronForwardSharp } from 'react-icons/io5';
import styled from 'styled-components';
import { LargeText } from 'styles/GlobalStyles';

const Between = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 6px;
`;

const Button = styled.div`
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  cursor: pointer;

  &:hover {
    background: #f1f1f1;
  }

  &.disabled {
    background: #f3f3f3;
    color: #5555;
    cursor: default;

    &:hover {
      background: #f3f3f3;
    }
  }
`;

interface Props {
  icon?: ReactNode;
  text: string;
  next?: {
    isDisabled: boolean;
    handler: () => void;
  };
  prev?: {
    isDisabled: boolean;
    handler: () => void;
  };
}

const Heading: React.FC<Props> = ({ icon, text, next, prev }) => {
  return (
    <Between>
      <Space direction='horizontal' size={14}>
        <span style={{ color: '#fff', fontSize: '2rem' }}>{icon}</span>
        <LargeText>{text}</LargeText>
      </Space>
      <Space direction='horizontal' size={4}>
        <Button
          className={`${prev?.isDisabled ? 'disabled' : ''}`}
          onClick={prev?.handler}
          data-testid='prev'
        >
          <IoChevronBackSharp size='1.1rem' />
        </Button>
        <Button
          className={`${next?.isDisabled ? 'disabled' : ''}`}
          onClick={next?.handler}
          data-testid='next'
        >
          <IoChevronForwardSharp size='1.1rem' />
        </Button>
      </Space>
    </Between>
  );
};

export default Heading;
