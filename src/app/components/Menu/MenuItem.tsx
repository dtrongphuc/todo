import React, { ReactNode } from 'react';
import { Icon, Text, Wrapper } from './MenuItem.style';

interface Props {
  icon?: ReactNode;
  content: string;
}

const MenuItem: React.FC<Props> = ({ icon, content }) => {
  return (
    <Wrapper>
      <Icon>{icon}</Icon>
      <Text>{content}</Text>
    </Wrapper>
  );
};

export default MenuItem;
