import React from 'react';

// Components
import { RouteComponentProps } from '@reach/router';
import Navigation from '../components/navigation';
import Header from '../components/header';
import CardSection from '../components/section-card-list';

// Styles
import './Sellers.less';

// Props Types
// export interface SellersProps {}

const Sellers: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <Navigation>
        <Header />
        <CardSection title="Recent Tender Request" />
        <CardSection title="Shop by Seller" />
        <CardSection title="Shop By Platform" />
      </Navigation>
    </>
  );
};

export default Sellers;
