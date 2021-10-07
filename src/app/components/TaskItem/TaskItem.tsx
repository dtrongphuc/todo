import { Space } from 'antd';
import React from 'react';
import {
  IoCheckmarkCircleOutline,
  IoCheckmarkCircleSharp,
  IoEllipseOutline,
  IoStarOutline,
  IoStarSharp,
} from 'react-icons/io5';
import {
  AnimateButton,
  ButtonWrapper,
  Content,
  Wrapper,
} from './TaskItem.style';
import { MdOutlineDeleteSweep } from 'react-icons/md';
import { TaskState } from 'models/Task.interface';

interface Props {
  task: TaskState;
}

const TaskItem: React.FC<Props> = ({ task }) => {
  return (
    <Wrapper>
      <ButtonWrapper checked={task?.isCompleted}>
        <IoEllipseOutline
          size='1.8rem'
          color='#717171'
          className='normal checkbox'
        />
        <IoCheckmarkCircleOutline
          size='1.8rem'
          color='#717171'
          className='hover checkbox'
        />
        <IoCheckmarkCircleSharp
          size='1.8rem'
          color='#677492'
          className='checked'
        />
      </ButtonWrapper>
      <Content>{task?.content}</Content>
      <Space direction='horizontal' size={16}>
        <AnimateButton>
          <MdOutlineDeleteSweep color='var(--danger-color)' size='1.4rem' />
        </AnimateButton>
        <ButtonWrapper checked={task?.isImportant}>
          <IoStarOutline
            size='1.1rem'
            color='#717171'
            className='checkbox normal no-hover'
          />
          <IoStarSharp size='1.1rem' color='#677492' className='checked' />
        </ButtonWrapper>
      </Space>
    </Wrapper>
  );
};

export default TaskItem;
