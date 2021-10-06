import React from 'react';
import EmptyTask from 'app/components/EmptyTask/EmptyTask';
import RightPanel from 'app/components/RightPanel/RightPanel';
import Image from 'assets/images/calendar.png';
import { Space } from 'antd';
import { LargeText } from 'styles/GlobalStyles';
import { IoHomeOutline } from 'react-icons/io5';

const Empty = (
  <EmptyTask
    image={Image}
    text='Get things done with My Day, a list that refreshes every day.'
    title='Focus on your day'
  />
);

const Top = (
  <Space direction='horizontal' size={14}>
    <IoHomeOutline color='#fff' size='2rem' />
    <LargeText>Tasks</LargeText>
    {/* <NormalText>Tuesday, October 5</NormalText> */}
  </Space>
);

const TasksPage: React.FC = () => {
  return (
    <RightPanel empty={Empty} top={Top} addNewTask={() => {}} tasks={[1]} />
  );
};

export default TasksPage;
