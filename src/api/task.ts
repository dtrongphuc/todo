import { AxiosResponse } from 'axios';
import { TaskInput, TaskState } from 'models/Task.interface';
import client from './client';

export interface FetchParams {
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

export const defaultParams: FetchParams = {
  _limit: 7,
  _sort: 'date',
  _order: 'desc',
};

export const getTaskList = (
  params: FetchParams
): Promise<AxiosResponse<TaskState[]>> => {
  return client.get<FetchParams, AxiosResponse<TaskState[]>>('/660/tasks', {
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
  return client.get<FetchParams, AxiosResponse<TaskState[]>>('/660/tasks', {
    params,
  });
};

export const updateTask = (
  data: TaskState
): Promise<AxiosResponse<TaskState>> => {
  return client.put<TaskState, AxiosResponse<TaskState>>(
    `/660/tasks/${data.id}`,
    data
  );
};

export const deleteTaskApi = (id: number): Promise<AxiosResponse<object>> => {
  return client.delete<number, AxiosResponse<object>>(`/660/tasks/${id}`);
};
