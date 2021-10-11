import { AuthHandler } from './authHandler';

export interface ContextState {
  loading: boolean;
  error: string | null;
  authenticated: boolean;
  identity: UserIdentity | null;
  authHandler: AuthHandler;
  setAuthState: (
    authenticated: boolean,
    identity?: UserIdentity | null
  ) => void;
}

export interface UserIdentity {
  id: number | string;
  email: string;
  name: string;
}
