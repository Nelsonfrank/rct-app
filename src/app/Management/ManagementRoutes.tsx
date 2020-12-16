import React from 'react';
//dependencies
import { Router, Redirect, RouteComponentProps } from '@reach/router';

//Components
import Layout from './components/Layout';

// pages
import Dashboard from './pages/dashboard';
import UsersRoutes from './pages/users';
import Platform from './pages/platform';
import PriceRate from './pages/price-rate';
import Logs from './pages/logs';

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
        <Logs path="logs" />
        <Redirect from="users" to="sellers" noThrow />
      </Router>
    </Layout>
  );
};

export default ManagementRoutes;
