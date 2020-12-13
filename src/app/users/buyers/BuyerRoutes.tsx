import React from 'react';

//Components
import { Router } from '@reach/router';
import Home from './components/home';
import UserList from './components/user-list';
import Platform from './components/platforms';
import TenderRequests from './components/tender-requests';
import TenderRequestForm from './components/TenderRequestForm';
import Profile from '../components/profile';
// export interface BuyerRoutesProps {}

const BuyerRoutes: React.FC = () => {
  return (
    <Router>
      <Home path="/" />
      <UserList path="shop-by-sellers" />
      <Platform path="shop-by-platforms" />
      <TenderRequests path="tender-requests" />
      <TenderRequestForm path="tender-request-form" />
      <Profile path="user-profile" />
    </Router>
  );
};

export default BuyerRoutes;
