import client from './client';
import { AxiosResponse } from 'axios';
import { CurrentUser, UserInput } from 'models/User.interface';
import { UserIdentity } from 'contexts/types';

export const postLogin = (
  data: UserInput
): Promise<AxiosResponse<CurrentUser>> => {
  return client.post<UserInput, AxiosResponse<CurrentUser>>('/login', data);
};

export const getIdentity = (): Promise<AxiosResponse<UserIdentity>> => {
  return client.get<never, AxiosResponse<UserIdentity>>('/600/users/1');
};
