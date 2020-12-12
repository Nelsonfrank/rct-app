import React from 'react';

//Components
import { Router } from '@reach/router';
import Home from './components/home';
import BuyersList from './components/buyers-list';
import TenderBids from './components/tender-bids';
import TenderBidForm from './components/tender-bid-form';
// export interface SellersRoutesProps {}

const SellersRoutes: React.FC = () => {
  return (
    <>
      <Router>
        <Home path="/" />
        <TenderBidForm path="tender-bid-form" />
        <BuyersList path="buyers-list" />
        <TenderBids path="tender-bids" />
      </Router>
    </>
  );
};

export default SellersRoutes;
