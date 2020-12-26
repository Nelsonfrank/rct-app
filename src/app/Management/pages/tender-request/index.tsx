// dependencies
import React from 'react';
import { RouteComponentProps, Router } from '@reach/router';

// components
import TenderRequestList from './components/tender-request-list';
import TenderRequestView from './components/tender-request-view';
// export interface TenderRequestProps {}

const TenderRequest: React.FC<RouteComponentProps> = () => {
  return (
    <Router>
      <TenderRequestList path="/" />
      <TenderRequestView path="view" />
    </Router>
  );
};

export default TenderRequest;
