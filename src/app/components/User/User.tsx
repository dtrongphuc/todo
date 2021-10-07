import React from 'react';
import { Avatar, Column, NormalText, SmallText, Wrapper } from './User.styles';
import Image from 'assets/images/man.png';
import UserDropdown from './UserDropdown';

interface Props {
  name: string;
  email: string;
}

const User: React.FC<Props> = ({ name, email }) => {
  return (
    <UserDropdown>
      <Wrapper>
        <Avatar>
          <img src={Image} alt='Avatar' />
        </Avatar>
        <Column>
          <NormalText>{name}</NormalText>
          <SmallText>{email}</SmallText>
        </Column>
      </Wrapper>
    </UserDropdown>
  );
};

export default User;
