import { createContext } from 'react';

const authContext = createContext({
  authenticated: false,
  userId: '',
  handleAuthentication: () => {},
  handleAuthDashboard: () => {},
  logout: () => {},
});

export const AuthProvider = authContext.Provider;
export const AuthConsumer = authContext.Consumer;
