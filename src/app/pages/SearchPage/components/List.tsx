import { Space } from 'antd';
import TaskItem from 'app/components/TaskItem/TaskItem';
import { TaskState } from 'models/Task.interface';
import React from 'react';

interface Props {
  tasks: TaskState[];
}

const List: React.FC<Props> = ({ tasks }) => {
  return (
    <Space
      direction='vertical'
      size={4}
      style={{ marginTop: 12, width: '100%' }}
    >
      {tasks &&
        tasks.length > 0 &&
        tasks.map((task) => {
          return <TaskItem key={task.id} task={task} />;
        })}
    </Space>
  );
};

export default List;
