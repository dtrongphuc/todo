export interface UserInput {
  email: string;
  password: string;
}

export interface CurrentUser {
  accessToken: string;
  user: {
    id: number | string;
    email: string;
    name: string;
  };
}
