import { Dropdown, Menu } from 'antd';
import { AuthContext } from 'contexts/AuthProvider';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';

const UserDropdown: React.FC = ({ children }) => {
  const { logout } = useContext(AuthContext);

  let history = useHistory();

  const handleLogout = (): void => {
    logout();
    history.push('/auth/login');
  };

  const menu = (
    <Menu style={{ left: 16 }}>
      <Menu.Item key='manage-account'>Mange account</Menu.Item>
      <Menu.Divider />
      <Menu.Item key='logout' onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} placement='bottomCenter' trigger={['click']}>
      {children}
    </Dropdown>
  );
};

export default UserDropdown;
