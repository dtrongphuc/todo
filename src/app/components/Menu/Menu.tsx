import React from 'react';
import { Space } from 'antd';
import MenuItem from './MenuItem';
import {
  IoCheckmarkSharp,
  IoHomeOutline,
  IoStarOutline,
} from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
  return (
    <Space direction='vertical' size={4} style={{ width: '100%' }}>
      <Link to='/'>
        <MenuItem icon={<IoHomeOutline />} content='Tasks' />
      </Link>
      <Link to='/completed'>
        <MenuItem icon={<IoCheckmarkSharp />} content='Completed' />
      </Link>
      <Link to='/important'>
        <MenuItem icon={<IoStarOutline />} content='Important' />
      </Link>
    </Space>
  );
};

export default Menu;
