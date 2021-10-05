import client from './client';
import { AxiosResponse } from 'axios';
import { CurrentUser, UserInput } from 'models/User.interface';

export const postLogin = (
  data: UserInput
): Promise<AxiosResponse<CurrentUser>> => {
  return client.post<UserInput, AxiosResponse<CurrentUser>>('/login', data);
};
