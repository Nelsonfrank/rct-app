import React from 'react';

// Components
import { Router } from '@reach/router';
import { RouteComponentProps } from '@reach/router';
import Sellers from './components/sellers';
import Buyers from './components/buyers';
import Leaders from './components/leaders';

// export interface UsersRoutesProps {}

const UsersRoutes: React.FC<RouteComponentProps> = () => {
  return (
    <Router>
      <Sellers path="sellers" />
      <Buyers path="buyers" />
      <Leaders path="leaders" />
    </Router>
  );
};

export default UsersRoutes;
