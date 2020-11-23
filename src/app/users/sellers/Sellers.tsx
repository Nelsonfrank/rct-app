import React from 'react';

// Components
import { RouteComponentProps } from '@reach/router';
import Navigation from '../components/navigation';

// Props Types
// export interface SellersProps {}

const Sellers: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <Navigation>
        <p>Hello World</p>
      </Navigation>
    </>
  );
};

export default Sellers;
