import React, { ReactChild } from 'react';
import { AuthHandler, defaultAuthHandler } from './authHandler';
import { useAuthProvider } from './useAuthProvider';
import { ContextState, UserIdentity } from './types';

interface AuthProviderProps {
  provider: AuthHandler;
  children: ReactChild;
}

const context: ContextState = {
  loading: true,
  error: null,
  authenticated: false,
  identity: null,
  authHandler: defaultAuthHandler,
  setAuthState: (authenticated: boolean, identity?: UserIdentity | null) => {},
};

export const AuthContext = React.createContext<ContextState>(context);

const AuthProvider: React.FC<AuthProviderProps> = ({ provider, children }) => {
  const contextValues = useAuthProvider(provider);
  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
