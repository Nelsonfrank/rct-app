// dependencies
import React from 'react';
import { RouteComponentProps, Router } from '@reach/router';

// components
import TenderGivenList from './components/tender-given-list';
import TenderGivenView from './components/tender-given-view';

// export interface TenderGivenProps {}

const TenderGiven: React.FC<RouteComponentProps> = () => {
  return (
    <Router>
      <TenderGivenList path="/" />
      <TenderGivenView path="view" />
    </Router>
  );
};

export default TenderGiven;
