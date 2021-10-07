import { AxiosResponse } from 'axios';
import { TaskInput, TaskState } from 'models/Task.interface';
import client from './client';

export interface getParams {
  isCompleted?: boolean;
  isImportant?: boolean;
  _page?: number;
  _limit: 10 | number;
  _sort?: 'date' | string;
  _order?: 'desc' | string;
}

export interface FindParams {
  content: string;
}

export const defaultParams: getParams = {
  _limit: 4,
  _sort: 'date',
  _order: 'desc',
};

export const getTaskList = (
  params: getParams
): Promise<AxiosResponse<TaskState[]>> => {
  return client.get<getParams, AxiosResponse<TaskState[]>>('/660/tasks', {
    params,
  });
};

export const postNewTask = (
  data: TaskInput
): Promise<AxiosResponse<TaskState>> => {
  return client.post<TaskInput, AxiosResponse<TaskState>>('/660/tasks', data);
};

export const findTask = (
  params: FindParams
): Promise<AxiosResponse<TaskState[]>> => {
  return client.get<getParams, AxiosResponse<TaskState[]>>('/660/tasks', {
    params,
  });
};
