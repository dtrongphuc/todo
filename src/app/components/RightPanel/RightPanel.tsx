import React, { ReactNode } from 'react';
import { BottomRow, Center, Inner, TopRow, Wrapper } from './RightPanel.style';
import NewTask from 'app/components/NewTask/NewTask';

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
  return (
    <Wrapper>
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
  );
};

export default RightPanel;
