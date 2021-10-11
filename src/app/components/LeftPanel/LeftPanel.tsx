import React, { useContext } from 'react';
import User from 'app/components/User/User';
import { IoSearch } from 'react-icons/io5';
import {
  FlexRow,
  CustomNavLink,
  Brand,
  Sidebar,
  Overlay,
} from './LeftPanel.style';
import { AuthContext } from 'contexts/AuthProvider';
import { Space } from 'antd';
import Menu from 'app/components/Menu/Menu';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { close, selectSidebarState } from 'features/setting/settingSlice';

const LeftPanel: React.FC = () => {
  const dispatch = useAppDispatch();
  const { identity } = useContext(AuthContext);
  const sidebarState = useAppSelector(selectSidebarState);

  return (
    <>
      <Sidebar isOpen={sidebarState}>
        <Brand>Microsoft To Do</Brand>
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
      </Sidebar>
      <Overlay onClick={() => dispatch(close())} />
    </>
  );
};

export default LeftPanel;
