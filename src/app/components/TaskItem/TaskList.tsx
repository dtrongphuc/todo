import { Space } from 'antd';
import { TaskState } from 'models/Task.interface';
import React, { ReactNode } from 'react';
import TaskItem from './TaskItem';
import { Content } from './TaskList.style';

interface Props {
  tasks: TaskState[];
  loader?: ReactNode;
}

const TaskList: React.FC<Props> = ({ tasks, loader }) => {
  return (
    <Content>
      <Space direction='vertical' size={4} style={{ width: '100%' }}>
        {tasks &&
          tasks.length > 0 &&
          tasks.map((task) => {
            return <TaskItem key={task.id} task={task} />;
          })}
        {loader}
      </Space>
    </Content>
  );
};

export default TaskList;
