import React from 'react';

// Components
import { RouteComponentProps } from '@reach/router';
import List from '../components/list';
import TenderRequest from './components/TenderRequest';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

// Props Types
// export interface BuyersProps {}

const Buyers: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <Navigation hideOptions>
        <TenderRequest />
      </Navigation>
      <Footer />
    </>
  );
};

export default Buyers;
