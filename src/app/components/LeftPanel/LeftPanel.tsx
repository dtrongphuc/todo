import React, { useContext } from 'react';
import User from 'app/components/User/User';
import { IoSearch } from 'react-icons/io5';
import { FlexRow, SearchIcon } from './LeftPanel.style';
import { useHistory } from 'react-router';
import { AuthContext } from 'contexts/AuthProvider';
import { Space } from 'antd';
import Menu from '../Menu/Menu';

const LeftPanel: React.FC = () => {
  let history = useHistory();
  const { user } = useContext(AuthContext);

  return (
    <Space direction='vertical' style={{ width: '100%' }}>
      <FlexRow>
        <User name={user?.name} email={user?.email} />
        <SearchIcon onClick={() => history.push('/search')}>
          <IoSearch size={18} color='#545454' />
        </SearchIcon>
      </FlexRow>
      <FlexRow>
        <Menu />
      </FlexRow>
    </Space>
  );
};

export default LeftPanel;
