import React from 'react';

// Components
import { Router } from '@reach/router';
import { RouteComponentProps } from '@reach/router';
import Sellers from './components/sellers';
import Buyers from './components/buyers';
import Leaders from './components/leaders';
import AddSellerForm from './components/sellers/components/add-seller-form';
import SellerInfoView from './components/sellers/components/seller-view';

// export interface UsersRoutesProps {}

const UsersRoutes: React.FC<RouteComponentProps> = () => {
  return (
    <Router>
      <Sellers path="sellers" />
      <Buyers path="buyers" />
      <Leaders path="leaders" />
      <AddSellerForm path="add-sellers-form" />
      <SellerInfoView path="view" />
    </Router>
  );
};

export default UsersRoutes;
