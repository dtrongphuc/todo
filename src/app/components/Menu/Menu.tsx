import React from 'react';
import { Space } from 'antd';
import MenuItem from './MenuItem';
import {
  IoCheckmarkSharp,
  IoHomeOutline,
  IoStarOutline,
} from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

export const CustomNavLink = styled(NavLink)`
  &.menu-active {
    background: red;
  }
`;

const Menu: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Space direction='vertical' size={4} style={{ width: '100%' }}>
      <MenuItem to='/' icon={<IoHomeOutline />} content={t('tasks.name')} />
      <MenuItem
        to='/completed'
        icon={<IoCheckmarkSharp />}
        content={t('completed.name')}
      />
      <MenuItem
        to='/important'
        icon={<IoStarOutline />}
        content={t('important.name')}
      />
    </Space>
  );
};

export default Menu;
