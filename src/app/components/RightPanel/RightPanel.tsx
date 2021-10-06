import React, { ReactNode } from 'react';
import { BottomRow, Center, Inner, TopRow, Wrapper } from './RightPanel.style';
import NewTask from 'app/components/NewTask/NewTask';
import TaskItem from '../TaskItem/TaskItem';
import { Space } from 'antd';

interface Props {
  top?: ReactNode;
  empty: ReactNode;
  tasks?: number[];
  addNewTask: () => void;
}

const RightPanel: React.FC<Props> = ({ top, empty, addNewTask, tasks }) => {
  return (
    <Wrapper>
      <Inner>
        <TopRow>{top}</TopRow>
        <Space
          direction='vertical'
          size={2}
          style={{ marginTop: 24, width: '100%' }}
        >
          {tasks &&
            tasks.length > 0 &&
            tasks.map((task, i) => {
              return <TaskItem key={i} />;
            })}
        </Space>
        <Center>{(!tasks || tasks.length === 0) && empty}</Center>
        <BottomRow>
          <NewTask handleAdd={addNewTask} />
        </BottomRow>
      </Inner>
    </Wrapper>
  );
};

export default RightPanel;
