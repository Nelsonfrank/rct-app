import React from 'react';

// Components
import { RouteComponentProps } from '@reach/router';
import Navigation from '../components/navigation';
import OptionButtons from '../components/option-buttons';
import Header from '../components/header';
// Styles
import './Sellers.less';

// Props Types
// export interface SellersProps {}

const Sellers: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <Navigation>
        <OptionButtons />
        <Header />
      </Navigation>
    </>
  );
};

export default Sellers;
