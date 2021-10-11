import React, { useEffect } from 'react';
import EmptyTask from 'app/components/EmptyTask/EmptyTask';
import RightPanel from 'app/components/RightPanel/RightPanel';
import Image from 'assets/images/calendar.png';
import { IoStarOutline } from 'react-icons/io5';
import {
  actions,
  selectLoading,
  selectShouldUpdate,
  selectTaskList,
} from 'features/task/taskSlice';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import TaskList from 'app/components/TaskItem/TaskList';
import { defaultParams, FetchParams } from 'api/task';
import Heading from 'app/components/Heading/Heading';
import { withPagination } from 'app/components/HOCs/withPagination';
import { TFunction, useTranslation } from 'react-i18next';
import { message } from 'antd';

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

const Empty = (t: TFunction) => (
  <EmptyTask image={Image} text='Try starring some tasks to see them here.' />
);

const ImportantPage: React.FC<Props> = ({ next, prev, page }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const taskList = useAppSelector(selectTaskList);
  const loading = useAppSelector(selectLoading);
  const shouldUpdate = useAppSelector(selectShouldUpdate);

  // fetch task list
  useEffect(() => {
    const fetch = async () => {
      try {
        const params: FetchParams = {
          ...defaultParams,
          _page: page,
          isImportant: true,
        };
        dispatch(actions.fetch(params));
      } catch (error) {
        message.error(t('common:errorMessage'));
      }
    };

    fetch();
  }, [dispatch, page, t]);

  // re-fetch after delete
  useEffect(() => {
    if (shouldUpdate) {
      const fetch = async () => {
        try {
          const params: FetchParams = {
            ...defaultParams,
            _page: page,
            isImportant: true,
          };
          dispatch(actions.fetch(params));
        } catch (error) {
          message.error(t('common:errorMessage'));
        }
      };

      fetch();
    }
  }, [dispatch, page, shouldUpdate, t]);

  const top = (
    <Heading
      icon={<IoStarOutline />}
      text={t('important.name')}
      prev={prev}
      next={next}
    />
  );

  return (
    <RightPanel
      empty={Empty(t)}
      top={top}
      isEmpty={!loading && (!taskList || taskList.length === 0)}
      bottom={false}
    >
      <TaskList tasks={taskList} loading={loading} />
    </RightPanel>
  );
};

export default withPagination(ImportantPage);
