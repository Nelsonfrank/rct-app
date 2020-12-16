import React from 'react';

//Components
import { Router, RouteComponentProps } from '@reach/router';
import Buyers from './buyers';
import Sellers from './sellers';

// Props Types
// export interface UsersProps {}

const Users: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <Router primary={false}>
        <Buyers path="buyers/*" />
        <Sellers path="sellers/*" />
      </Router>
    </>
  );
};

export default Users;
