import React from 'react';

//Components
import { Router, Redirect, RouteComponentProps } from '@reach/router';
import Dashboard from './pages/dashboard';
import UsersRoutes from './pages/users';
import Platform from './pages/platform';
import PriceRate from './pages/price-rate';
import Layout from './components/Layout';

// Props Types
// export interface ManagementRoutesProps {}

const ManagementRoutes: React.FC<RouteComponentProps> = () => {
  return (
    <Layout>
      <Router>
        <Dashboard path="/" />
        <UsersRoutes path="users/*" />
        <Platform path="platforms/*" />
        <PriceRate path="price-rate/*" />
        <Redirect from="users" to="sellers" noThrow />
      </Router>
    </Layout>
  );
};

export default ManagementRoutes;
