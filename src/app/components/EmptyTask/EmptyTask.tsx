import { Space } from 'antd';
import React from 'react';
import { Background, Img, Text, Title, Wrapper } from './EmptyTask.style';

interface Props {
  image?: string;
  title?: string;
  text: string;
}

const EmptyTask: React.FC<Props> = ({ image, title, text }) => {
  return (
    <Wrapper>
      <Background />
      <Space
        direction='vertical'
        align='center'
        style={{ width: '100%', height: '100%' }}
      >
        <Img src={image} alt='Calendar' />
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Space>
    </Wrapper>
  );
};

export default EmptyTask;
