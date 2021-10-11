import React, { useContext } from 'react';
import User from 'app/components/User/User';
import { IoSearch } from 'react-icons/io5';
import {
  FlexRow,
  CustomNavLink,
  Brand,
  Sidebar,
  Overlay,
  SpaceBetween,
} from './LeftPanel.style';
import { AuthContext } from 'contexts/AuthProvider';
import { Button, Space } from 'antd';
import Menu from 'app/components/Menu/Menu';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { close, selectSidebarState } from 'features/setting/settingSlice';
import { useTranslation } from 'react-i18next';

const LeftPanel: React.FC = () => {
  const { i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const { identity } = useContext(AuthContext);
  const sidebarState = useAppSelector(selectSidebarState);

  const handleChangeLng = (key: string) => () => {
    if (i18n.language !== key) {
      i18n.changeLanguage(key);
    }
  };

  return (
    <>
      <Sidebar isOpen={sidebarState}>
        <Brand>Microsoft To Do</Brand>
        <SpaceBetween>
          <Space direction='vertical' style={{ width: '100%' }}>
            <FlexRow>
              <User name={identity?.name ?? ''} email={identity?.email ?? ''} />
              <CustomNavLink to='/search' activeClassName='active'>
                <IoSearch size={18} color='#545454' />
              </CustomNavLink>
            </FlexRow>
            <FlexRow>
              <Menu />
            </FlexRow>
          </Space>
          <Space style={{ margin: '0 auto 16px' }} size={8}>
            <Button
              type='link'
              onClick={handleChangeLng('en')}
              disabled={i18n.language === 'en'}
            >
              EN
            </Button>
            <Button
              type='link'
              onClick={handleChangeLng('vi')}
              disabled={i18n.language === 'vi'}
            >
              VN
            </Button>
          </Space>
        </SpaceBetween>
      </Sidebar>
      <Overlay onClick={() => dispatch(close())} />
    </>
  );
};

export default LeftPanel;
