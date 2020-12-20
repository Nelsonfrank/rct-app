import React from 'react';

// Components
import { Router, Redirect } from '@reach/router';
import UsersRoutes from './users';
import ManagementRoutes from './Management';
import SignUp from './components/signup';
import Login from './components/login';
import VerifyPhone from './components/verify-phone';
import ScrollToTop from './SrollToTop';

// Props Types
// export interface MainRouteProps {}

const MainRoute: React.FC = () => {
  return (
    <>
      <Router primary={false}>
        <ScrollToTop path="/">
          <Redirect from="/" to="/app/buyers" />
          <Login path="/login" />
          <SignUp path="/signup" />
          <VerifyPhone path="/verify-phone" />
          <UsersRoutes path="app/*" />
          <ManagementRoutes path="dashboard/*" />
        </ScrollToTop>
      </Router>
    </>
  );
};

export default MainRoute;
