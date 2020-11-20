import React from 'react';

// Components
import { Router } from '@reach/router';
import { RouteComponentProps } from '@reach/router';
import Sellers from './components/sellers';
import Buyers from './components/buyers';

// export interface UsersRoutesProps {}

const UsersRoutes: React.FC<RouteComponentProps> = () => {
  return (
    <Router>
      <Sellers path="sellers" />
      <Buyers path="buyers" />
    </Router>
  );
};

export default UsersRoutes;
