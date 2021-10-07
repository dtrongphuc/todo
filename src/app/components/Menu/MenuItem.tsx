import { useAppDispatch } from 'app/hooks';
import { close } from 'features/setting/settingSlice';
import React, { ReactNode } from 'react';
import { Icon, Text, CustomNavLink } from './MenuItem.style';

interface Props {
  icon?: ReactNode;
  content: string;
  to: string;
}

const MenuItem: React.FC<Props> = ({ icon, content, to }) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(close());
  };

  return (
    <CustomNavLink
      exact
      to={to}
      activeClassName='menu-active'
      onClick={handleClick}
    >
      <Icon>{icon}</Icon>
      <Text>{content}</Text>
    </CustomNavLink>
  );
};

export default MenuItem;
