import React from 'react';

// dependecies
import { Router } from '@reach/router';

//Components
import PriceRateForm from './components/price-rate-form';
import PriceRateTable from './components/price-rate-table';
// Props type
// export interface PriceRateRoutesProps {}

const PriceRateRoutes: React.FC = () => {
  return (
    <Router>
      <PriceRateTable path="/" />
      <PriceRateForm path="price-rate-form" />
    </Router>
  );
};

export default PriceRateRoutes;
