import React from 'react';
// dependencies
import { Router } from '@reach/router';
//Components
import Home from './components/home';
import BuyersList from './components/buyers-list';
import TenderBids from './components/tender-bids';
import TenderBidForm from './components/tender-bid-form';
import Profile from '../components/profile';
import UploadPictures from './components/upload-images';

// export interface SellersRoutesProps {}

const SellersRoutes: React.FC = () => {
  return (
    <>
      <Router primary={false}>
        <Home path="/" />
        <TenderBidForm path="tender-bid-form" />
        <BuyersList path="buyers-list" />
        <TenderBids path="tender-bids" />
        <Profile path="user-profile" />
        <UploadPictures path="upload-images" />
      </Router>
    </>
  );
};

export default SellersRoutes;
