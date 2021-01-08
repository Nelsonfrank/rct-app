import React, { useState } from 'react';

// Components
import { Router, Redirect } from '@reach/router';
import UsersRoutes from './users';
import ManagementRoutes from './Management';

import ScrollToTop from './SrollToTop';
import { AuthConsumer } from '../auth/AuthContext';

// Props Types
// export interface MainRouteProps {}

const MainRoute: React.FC = () => {
  const [auth, setAuth] = useState([]);

  const GetAuthCredential = (value: React.SetStateAction<never[]>) => {
    setAuth(value);
  };
  return (
    <>
      <Router primary={false}>
        <ScrollToTop path="/">
          <Redirect from="/" to="/app/buyers" />
          <UsersRoutes path="app/*" />
          <ManagementRoutes path="management/*" />
        </ScrollToTop>
      </Router>
    </>
  );
};

export default MainRoute;
