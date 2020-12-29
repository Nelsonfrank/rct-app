import React from 'react';

// dependecies
import { Router } from '@reach/router';

//Components
import PriceRateForm from './components/price-rate-form';
import PriceRateTable from './components/price-rate-table';
import PriceHistoryList from './components/price-history';

// Props type
// export interface PriceRateRoutesProps {}

const PriceRateRoutes: React.FC = () => {
  return (
    <Router>
      <PriceRateTable path="/" />
      <PriceRateForm path="price-rate-form" />
      <PriceHistoryList path="price-history" />
    </Router>
  );
};

export default PriceRateRoutes;
