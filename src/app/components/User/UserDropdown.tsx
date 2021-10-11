import { Dropdown, Menu } from 'antd';
import { AuthContext } from 'contexts/AuthProvider';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';

const UserDropdown: React.FC = ({ children }) => {
  const { t } = useTranslation();
  const { authHandler } = useContext(AuthContext);

  let history = useHistory();

  const handleLogout = (): void => {
    authHandler.logout();
    history.push('/auth/login');
  };

  const menu = (
    <Menu style={{ left: 16 }}>
      <Menu.Item key='manage-account'>{t('account.manage')}</Menu.Item>
      <Menu.Divider />
      <Menu.Item key='logout' onClick={handleLogout}>
        {t('account.logout')}
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
