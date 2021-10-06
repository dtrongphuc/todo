import React from 'react';
import User from 'app/components/User/User';
import { IoSearch } from 'react-icons/io5';
import { FlexRow, SearchIcon } from './LeftPanel.style';
import { useHistory } from 'react-router';

const LeftPanel: React.FC = () => {
  let history = useHistory();

  return (
    <FlexRow>
      <User />
      <SearchIcon onClick={() => history.push('/search')}>
        <IoSearch size={18} color='#545454' />
      </SearchIcon>
    </FlexRow>
  );
};

export default LeftPanel;
