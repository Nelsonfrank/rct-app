import React from 'react';

// Components
import { RouteComponentProps } from '@reach/router';
import BuyerRoutes from './BuyerRoutes';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

// Props Types
// export interface BuyersProps {}

const Buyers: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <Navigation hideOptions>
        <BuyerRoutes />
      </Navigation>
      <Footer />
    </>
  );
};

export default Buyers;
