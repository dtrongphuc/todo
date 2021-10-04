import client from './client';
import { AxiosResponse } from 'axios';
import { UserInput } from 'models/User.interface';

export const postLogin = (data: UserInput): Promise<AxiosResponse> =>
  client.post('/login', data);
