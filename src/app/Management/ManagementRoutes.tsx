import React from 'react';

//Components
import { Router, Redirect, RouteComponentProps } from '@reach/router';
import Dashboard from './components/dashboard';
import UsersRoutes from './components/users';
import Layout from './components/Layout';

// Props Types
// export interface ManagementRoutesProps {}

const ManagementRoutes: React.FC<RouteComponentProps> = () => {
  return (
    <Layout>
      <Router>
        <Dashboard path="/" />
        <UsersRoutes path="users/*" />
        <Redirect from="users" to="sellers" noThrow />
      </Router>
    </Layout>
  );
};

export default ManagementRoutes;
