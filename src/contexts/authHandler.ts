import { getIdentity, postLogin } from 'api/auth';
import { AxiosResponse } from 'axios';
import { CurrentUser, UserInput } from 'models/User.interface';
import { localStorage } from 'utils/localStorage';
import { UserIdentity } from './types';

export interface AuthHandler {
  login: (d: UserInput) => Promise<AxiosResponse<CurrentUser>>;
  getIdentity: () => Promise<AxiosResponse<UserIdentity>>;
  logout: () => void;
}

export const defaultAuthHandler: AuthHandler = {
  login: (d: UserInput): Promise<AxiosResponse<CurrentUser>> => postLogin(d),
  getIdentity: (): Promise<AxiosResponse<UserIdentity>> => getIdentity(),
  logout: () => {
    localStorage('token').remove();
  },
};
