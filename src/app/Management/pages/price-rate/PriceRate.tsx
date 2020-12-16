import React from 'react';

// dependenies
import { RouteComponentProps } from '@reach/router';

// Routes
import PriceRateRoutes from './PriceRateRoutes';

// Props types
// export interface priceRateProps {}

const priceRate: React.FC<RouteComponentProps> = () => {
  return (
    <>
      <PriceRateRoutes />
    </>
  );
};

export default priceRate;
