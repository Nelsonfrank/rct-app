import React from 'react';
//dependencies
import { Router, RouteComponentProps, Redirect } from '@reach/router';

//Components
import Layout from './components/Layout';

// pages
import Dashboard from './pages/dashboard';
import UsersRoutes from './pages/users';
import Platform from './pages/platform';
import PriceRate from './pages/price-rate';
import Logs from './pages/logs';
import Variety from './pages/variety';
import TenderRequest from './pages/tender-request';
import TenderGiven from './pages/tender-given';
import ManagementSignin from './pages/management-signin';
import { AuthConsumer } from '../../auth/AuthContext';

// Props Types
// export interface ManagementRoutesProps {}

const ManagementRoutes: React.FC<RouteComponentProps> = () => {
  return (
    <AuthConsumer>
      {({ authenticated, handleAuthentication }) =>
        authenticated ? (
          <Layout>
            <Router>
              <Redirect from="signin" to="dashboard" />
              <Dashboard path="dashboard" />
              <UsersRoutes path="users/*" />
              <Platform path="platforms/*" />
              <PriceRate path="price-rate/*" />
              <TenderRequest path="tender-request/*" />
              <TenderGiven path="tender-given/*" />
              <Variety path="variety/*" />
              <Logs path="logs" />
            </Router>
          </Layout>
        ) : (
          <Router>
            <Redirect from="/" to="signin" />
            <ManagementSignin path="signin" handleAuth={handleAuthentication} />
          </Router>
        )
      }
    </AuthConsumer>
  );
};

export default ManagementRoutes;
