import React from 'react';

// Components
import { RouteComponentProps } from '@reach/router';
import Navigation from '../components/navigation';
import Home from './components/home';
import TenderBid from './components/TenderBid';
import Footer from '../components/footer';

// Styles
import './Sellers.less';

// Props Types
// export interface SellersProps {}

const Sellers: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <Navigation hideOptions>
        <TenderBid />
      </Navigation>
      <Footer />
    </>
  );
};

export default Sellers;
