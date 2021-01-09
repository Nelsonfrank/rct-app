import { createContext } from 'react';

const authContext = createContext({
  authenticated: false,
  userRole: '',
  userAccessToken: '',
  handleAuthentication: () => {},
  handleAuthDashboard: () => {},
  logout: () => {},
});

export const AuthProvider = authContext.Provider;
export const AuthConsumer = authContext.Consumer;
export const Auth = authContext;
