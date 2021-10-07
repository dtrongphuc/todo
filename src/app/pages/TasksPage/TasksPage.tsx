import React, { useEffect } from 'react';
import EmptyTask from 'app/components/EmptyTask/EmptyTask';
import RightPanel from 'app/components/RightPanel/RightPanel';
import Image from 'assets/images/calendar.png';
import { IoHomeOutline } from 'react-icons/io5';
import {
  addNewTask,
  fetchTaskList,
  selectTaskList,
} from 'features/tasks/tasksSlice';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { TaskInput } from 'models/Task.interface';
import TaskList from 'app/components/TaskItem/TaskList';
import { defaultParams, getParams } from 'api/task';
import Heading from 'app/components/Heading/Heading';
import { withPagination } from 'app/components/HOCs/withPagination';

interface Props {
  next: {
    isDisabled: boolean;
    handler: () => void;
  };
  prev: {
    isDisabled: boolean;
    handler: () => void;
  };
  page: number;
  setPage: (p: number) => void;
}

const Empty = (
  <EmptyTask
    image={Image}
    text='Get things done with My Day, a list that refreshes every day.'
    title='Focus on your day'
  />
);

const TasksPage: React.FC<Props> = ({ next, prev, page, setPage }) => {
  const dispatch = useAppDispatch();
  const taskList = useAppSelector(selectTaskList);

  // fetch task list
  useEffect(() => {
    const fetch = async () => {
      try {
        const params: getParams = {
          ...defaultParams,
          _page: page,
          isCompleted: false,
        };
        await dispatch(fetchTaskList(params));
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [dispatch, page]);

  const handleAddNewTask = async (value: string) => {
    try {
      const data: TaskInput = {
        content: value,
        date: new Date().getTime(),
        isCompleted: false,
        isImportant: false,
      };
      await dispatch(addNewTask(data));
      setPage(1);
    } catch (error) {
      console.log(error);
    }
  };

  const top = (
    <Heading icon={<IoHomeOutline />} text='Tasks' prev={prev} next={next} />
  );

  return (
    <RightPanel
      empty={Empty}
      top={top}
      addNewTask={handleAddNewTask}
      isEmpty={!taskList || taskList.length === 0}
      bottom={true}
    >
      <TaskList tasks={taskList} />
    </RightPanel>
  );
};

export default withPagination(TasksPage);
