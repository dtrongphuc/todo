import React from 'react';
import { Skeleton, Space } from 'antd';
import { TaskState } from 'models/Task.interface';
import TaskItem from './TaskItem';
import { Content } from './TaskList.style';

interface Props {
  tasks: TaskState[];
  loading?: boolean;
}

const TaskList: React.FC<Props> = ({ tasks, loading = false }) => {
  return (
    <Content>
      <Skeleton loading={loading} active>
        <Space direction='vertical' size={4} style={{ width: '100%' }}>
          {!loading &&
            tasks &&
            tasks.length > 0 &&
            tasks.map((task) => {
              return <TaskItem key={task.id} task={task} />;
            })}
        </Space>
      </Skeleton>
    </Content>
  );
};

export default TaskList;
