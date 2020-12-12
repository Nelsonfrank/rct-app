import React from 'react';

// Components
import { Router, Redirect } from '@reach/router';
import UsersRoutes from './users';
import ManagementRoutes from './Management';
import SignUp from './components/signup';
import Login from './components/login';
import VerifyPhone from './components/verify-phone';

// Props Types
// export interface MainRouteProps {}

const MainRoute: React.FC = () => {
  return (
    <>
      <Router>
        <Redirect from="/" to="/app/buyers" />
        <Login path="/" />
        <SignUp path="/signup" />
        <VerifyPhone path="/verify-phone" />
        <UsersRoutes path="app/*" />
        <ManagementRoutes path="dashboard/*" />
      </Router>
    </>
  );
};

export default MainRoute;
