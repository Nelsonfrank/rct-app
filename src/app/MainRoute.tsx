import React from 'react';

// Components
import { Router, Redirect } from '@reach/router';
import UsersRoutes from './users';
import ManagementRoutes from './Management';

// Props Types
// export interface MainRouteProps {}

const MainRoute: React.FC = () => {
  return (
    <>
      <Router>
        <Redirect from="/" to="app/buyers" />
        <UsersRoutes path="app/*" />
        <ManagementRoutes path="dashboard/*" />
      </Router>
    </>
  );
};

export default MainRoute;
