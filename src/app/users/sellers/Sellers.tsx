import React from 'react';

// Components
import { RouteComponentProps } from '@reach/router';

import Navigation from '../components/navigation';
import SellersRoutes from './SellersRoutes';
import Footer from '../components/footer';

// Styles
import './Sellers.less';

// Props Types
// export interface SellersProps {}

const Sellers: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <Navigation>
        <SellersRoutes />
      </Navigation>
      <Footer />
    </>
  );
};

export default Sellers;
