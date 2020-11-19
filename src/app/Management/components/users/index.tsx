import React from 'react';

// Components
import { Router } from '@reach/router';
import { RouteComponentProps } from '@reach/router';
import Sellers from './components/sellers';

// export interface UsersRoutesProps {}

const UsersRoutes: React.FC<RouteComponentProps> = () => {
  return (
    <Router>
      <Sellers path="sellers" />
    </Router>
  );
};

export default UsersRoutes;
