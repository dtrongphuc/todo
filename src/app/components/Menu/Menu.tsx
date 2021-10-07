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

export const CustomNavLink = styled(NavLink)`
  &.menu-active {
    background: red;
  }
`;

const Menu: React.FC = () => {
  return (
    <Space direction='vertical' size={4} style={{ width: '100%' }}>
      <MenuItem to='/' icon={<IoHomeOutline />} content='Tasks' />
      <MenuItem
        to='/completed'
        icon={<IoCheckmarkSharp />}
        content='Completed'
      />
      <MenuItem to='/important' icon={<IoStarOutline />} content='Important' />
    </Space>
  );
};

export default Menu;
