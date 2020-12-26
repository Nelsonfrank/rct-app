import React from 'react';
//dependencies
import { Router, RouteComponentProps } from '@reach/router';

//Components
import Layout from './components/Layout';

// pages
import Dashboard from './pages/dashboard';
import UsersRoutes from './pages/users';
import Platform from './pages/platform';
import PriceRate from './pages/price-rate';
import Logs from './pages/logs';
import Variety from './pages/variety';

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
        <Variety path="variety/*" />
        <Logs path="logs" />
      </Router>
    </Layout>
  );
};

export default ManagementRoutes;
