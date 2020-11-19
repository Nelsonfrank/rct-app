import React from 'react';

//Components
import { Router, Redirect } from '@reach/router';
import Dashboard from './components/dashboard';
import UsersRoutes from './components/users';

// Props Types
// export interface ManagementRoutesProps {}

const ManagementRoutes: React.FC = () => {
  return (
    <Router>
      <Dashboard path="/" default />
      <UsersRoutes path="users/*" />
      <Redirect from="users" to="sellers" noThrow />
    </Router>
  );
};

export default ManagementRoutes;
