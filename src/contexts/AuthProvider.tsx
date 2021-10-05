import React, { useEffect, useState } from 'react';
import { CurrentUser } from 'models/User.interface';
import { localStorage } from 'utils/localStorage';

interface AuthState extends CurrentUser {
  isLoggedIn: boolean;
  isLoading: boolean;
}

interface ContextState extends AuthState {
  isLoggedIn: boolean;
  isLoading: boolean;
  login: (d: CurrentUser) => void;
  logout: () => void;
}

const context: ContextState = {
  accessToken: '',
  user: {
    id: '',
    email: '',
    name: '',
  },
  isLoggedIn: false,
  isLoading: false,
  login: (d: CurrentUser) => {},
  logout: () => {},
};

const initialState: AuthState = {
  accessToken: '',
  user: {
    id: '',
    email: '',
    name: '',
  },
  isLoggedIn: false,
  isLoading: false,
};

export const AuthContext = React.createContext<ContextState>(context);

const AuthProvider: React.FC = ({ children }) => {
  const [auth, setAuth] = useState(initialState);

  useEffect(() => {
    const token: string = localStorage('token').get();
    if (!token || token.length === 0) {
      logout();
    }
  }, []);

  const login = (data: CurrentUser): void => {
    console.log('login');
    setAuth({
      ...data,
      isLoading: false,
      isLoggedIn: true,
    });
    localStorage('token').save(data.accessToken);
  };

  const logout = (): void => {
    setAuth(initialState);
    localStorage('token').remove();
  };

  return (
    <AuthContext.Provider value={{ ...auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
