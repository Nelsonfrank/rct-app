import { createContext } from 'react';

const authContext = createContext({
  authenticated: false,
  userRole: '',
  userAccessToken: '',
  adminRole: '',
  adminAccessToken: '',
  userInfo: {
    active: 1,
    dial_code: '',
    id: '',
    name: null,
    password: null,
    phone_number: '',
    role: '',
    salt: null,
  },
  handleAuthentication: () => {},
  handleAuthDashboard: () => {},
  logout: () => {},
  dashboardLogout: () => {},
});

export const AuthProvider = authContext.Provider;
export const AuthConsumer = authContext.Consumer;
export const Auth = authContext;
