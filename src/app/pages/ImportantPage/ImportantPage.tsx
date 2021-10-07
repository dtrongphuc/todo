import React, { useEffect } from 'react';
import EmptyTask from 'app/components/EmptyTask/EmptyTask';
import RightPanel from 'app/components/RightPanel/RightPanel';
import Image from 'assets/images/calendar.png';
import { IoStarOutline } from 'react-icons/io5';
import { fetchTaskList, selectTaskList } from 'features/tasks/tasksSlice';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import TaskList from 'app/components/TaskItem/TaskList';
import { defaultParams, getParams } from 'api/task';
import Heading from 'app/components/Heading/Heading';

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
}

const Empty = (
  <EmptyTask image={Image} text='Try starring some tasks to see them here.' />
);

const ImportantPage: React.FC<Props> = ({ next, prev, page }) => {
  const dispatch = useAppDispatch();
  const taskList = useAppSelector(selectTaskList);

  // fetch task list
  useEffect(() => {
    const fetch = async () => {
      try {
        const params: getParams = {
          ...defaultParams,
          _page: page,
          isImportant: true,
        };
        await dispatch(fetchTaskList(params));
      } catch (error) {
        console.log(error);
      }
    };

    fetch();
  }, [dispatch, page]);

  const top = (
    <Heading
      icon={<IoStarOutline />}
      text='Important'
      prev={prev}
      next={next}
    />
  );

  return (
    <RightPanel
      empty={Empty}
      top={top}
      isEmpty={!taskList || taskList.length === 0}
      bottom={false}
    >
      <TaskList tasks={taskList} />
    </RightPanel>
  );
};

export default ImportantPage;