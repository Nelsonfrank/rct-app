import React from 'react';

// Components
import { Router, Redirect } from '@reach/router';
import UsersRoutes from './users';
import ManagementRoutes from './Management';

import ScrollToTop from './SrollToTop';

// Props Types
// export interface MainRouteProps {}

const MainRoute: React.FC = () => {
  return (
    <>
      <Router primary={false}>
        <ScrollToTop path="/">
          <Redirect from="/" to="/app/buyers" />
          <UsersRoutes path="app/*" />
          {/* <ManagementRoutes path="management/*" /> */}
        </ScrollToTop>
      </Router>
    </>
  );
};

export default MainRoute;
