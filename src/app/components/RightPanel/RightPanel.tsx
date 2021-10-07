import React, { ReactNode } from 'react';
import {
  BottomRow,
  ButtonNav,
  Center,
  Inner,
  TopRow,
  Wrapper,
} from './RightPanel.style';
import NewTask from 'app/components/NewTask/NewTask';
import { IoMenuOutline } from 'react-icons/io5';
import { useAppDispatch } from 'app/hooks';
import { open } from 'features/setting/settingSlice';

interface Props {
  top?: ReactNode;
  empty: ReactNode;
  isEmpty: false | boolean;
  addNewTask?: (value: string) => void;
  bottom: true | boolean;
}

const RightPanel: React.FC<Props> = ({
  top,
  empty,
  addNewTask,
  isEmpty,
  bottom,
  children,
}) => {
  const dispatch = useAppDispatch();

  const handleButtonNavClick = () => {
    dispatch(open());
  };

  return (
    <>
      <Wrapper>
        <ButtonNav onClick={handleButtonNavClick}>
          <IoMenuOutline size='2rem' color='#fff' />
        </ButtonNav>
        <Inner>
          <TopRow>{top}</TopRow>
          {children}
          <Center>{isEmpty && empty}</Center>
          {bottom && (
            <BottomRow>
              <NewTask handleAdd={addNewTask} />
            </BottomRow>
          )}
        </Inner>
      </Wrapper>
    </>
  );
};

export default RightPanel;
