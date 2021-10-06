import React from 'react';
import { Avatar, Column, NormalText, SmallText, Wrapper } from './User.styles';
import Image from 'assets/images/man.png';
import UserDropdown from './UserDropdown';

const User: React.FC = () => {
  return (
    <UserDropdown>
      <Wrapper>
        <Avatar>
          <img src={Image} alt='Avatar' />
        </Avatar>
        <Column>
          <NormalText>Duong Trong Phuc</NormalText>
          <SmallText>dtrongphucdv@gmail.com</SmallText>
        </Column>
      </Wrapper>
    </UserDropdown>
  );
};

export default User;
