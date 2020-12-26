// dependencies
import React from 'react';
import { RouteComponentProps } from '@reach/router';

// components
import TenderGivenList from './components/tender-given-list';
// export interface TenderGivenProps {}

const TenderGiven: React.FC<RouteComponentProps> = () => {
  return <TenderGivenList />;
};

export default TenderGiven;
