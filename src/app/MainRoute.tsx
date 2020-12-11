import React from 'react';

// Components
import { Router, Redirect } from '@reach/router';
import UsersRoutes from './users';
import ManagementRoutes from './Management';
import SignUp from './components/signup';

// Props Types
// export interface MainRouteProps {}

const MainRoute: React.FC = () => {
  return (
    <>
      <Router>
        <SignUp path="/" />
        <UsersRoutes path="app/*" />
        <ManagementRoutes path="dashboard/*" />
      </Router>
    </>
  );
};

export default MainRoute;
