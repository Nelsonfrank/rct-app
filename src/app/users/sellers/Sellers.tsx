import React from 'react';

// Components
import { RouteComponentProps } from '@reach/router';
import Navigation from '../components/navigation';
import OptionButtons from '../components/option-buttons';

// Props Types
// export interface SellersProps {}

const Sellers: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <Navigation>
        <OptionButtons />
      </Navigation>
    </>
  );
};

export default Sellers;
